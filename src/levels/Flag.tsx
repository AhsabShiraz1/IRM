import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Group, LoopRepeat } from 'three';

export function Flag(props: any) {
  const group = useRef<Group>(null!);
  const { nodes, materials, animations } = useGLTF('/assets/flag1.glb') as any;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Start the flag animation when the component mounts
    if (actions && actions.Object_0) { 
      actions.Object_0.setLoop(LoopRepeat, Infinity);
      actions.Object_0.setEffectiveTimeScale(1 / 5);
      actions.Object_0.play();
    }

    // Clean up on unmount
    return () => {
      if (actions && actions.FlagAnimation) {
        actions.FlagAnimation.stop();
      }
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="AuxScene">
        <group name="1685_1685_low_poly_golf_flag_animatedglb">
          <group name="1685low_poly_golf_flag_animatedglb">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.284}>
              <group name="ab6305f6efde404684e7d3380aa836ffabccleanermaterialmergergles">
                <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_3">
                    <group name="Object_4" position={[1.132, -3.052, 0]}>
                      <group name="TimeframeMainGroup">
                        <group name="Object_6">
                          <mesh
                            name="Cylinder_001_6_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder_001_6_0.geometry}
                            material={materials.Cylinder_001}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Object_8" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="MorphMainGroup">
                        <mesh
                          name="Plane"
                          castShadow
                          receiveShadow
                          geometry={nodes.Plane.geometry}
                          material={materials.Plane}
                          morphTargetDictionary={nodes.Plane.morphTargetDictionary}
                          morphTargetInfluences={nodes.Plane.morphTargetInfluences}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/assets/flag1.glb');
