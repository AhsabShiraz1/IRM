import { useGLTF, useAnimations } from "@react-three/drei";
import { Object3DProps } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Mesh, LoopRepeat, Object3D, LoopOnce } from "three";

interface ModelProps extends Object3DProps {
  url: string;
}

function Model({ url, position, scale, rotation }: ModelProps) {
  const { animations, scene } = useGLTF(url);
  
  // scene = useMemo(() => scene.clone(), [scene]);
  const { actions } = useAnimations(animations, scene);
  const modelRef = useRef<Object3D>(null);

  useEffect(() => {
    if (scene) {
      // console.log(scene.id, "scene-id")
      scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  useEffect(() => {
    if (actions) {
      Object.keys(actions).forEach(actionName => {
        const action = actions[actionName];
        console.log(actionName)
        if (action) {
          if (actionName === "ArmatureAction") {
            action.reset();
            console.log(actions);
            action.setLoop(LoopOnce, 1);
            action.setEffectiveTimeScale(1 / 5);
            action.play();
            actions[53]?.stop();
          } else if (actionName === "Arm_Anchor") {
            action.reset();
            action.setLoop(LoopOnce, 1);
            action.setEffectiveTimeScale(1 / 5);
            actions["Arm_Dig"]?.play(); // Ensure this key exists
            action.stop();
          }
          else if (actionName === "Armature|ArmatureAction") {
            action.reset();
            action.setLoop(LoopRepeat, Infinity);
            // action.setLoop(LoopOnce, Infinity);
            action.setEffectiveTimeScale(1 / 5);
            action?.play();
          }
          else if (actionName === "BargeAnimation") {
            action.reset();
            action.setLoop(LoopRepeat, 2);
            // action.setLoop(LoopOnce, Infinity);
            action.setEffectiveTimeScale(1 / 8);
            action?.play();
          }
          else if (actionName === "Break") {
            action.reset();
            setTimeout(() => {
              action.setLoop(LoopOnce, 1);
              action.setEffectiveTimeScale(1 / 5);
              action?.play();
            }, 40000); // 5 seconds delay
          }
          else {
            action.reset();
            // console.log(actionName);
            action.clampWhenFinished = true;
            action.setLoop(LoopRepeat, 2);
            action.setLoop(LoopOnce, 1);
            action?.setEffectiveTimeScale(1/2 );
            action?.play();
          }
        }
      });
    }
    return () => {
      if (scene) {
        scene.traverse((child) => {
          if (child instanceof Mesh) {
            child.geometry.dispose();
            if (child.material instanceof Array) {
              child.material.forEach(material => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
    };
  }, [actions, scene]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      rotation={rotation}
      position={position}
      scale={scale}
      castShadow
      visible={true}
      receiveShadow
    />
  );
}

export default Model;
