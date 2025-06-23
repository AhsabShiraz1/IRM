import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group, Mesh, Object3DEventMap } from 'three';
import { ExtendedColors, Overwrite, NodeProps, NonFunctionKeys, Vector3, Euler, Matrix4, Quaternion, Layers } from '@react-three/fiber';
import { EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events';
import { JSX } from 'react/jsx-runtime';

type GLTFResult = {
  nodes: {
    'stairs_vray_03_-_Default_0': Mesh;
    wall_ext_Material_0: Mesh;
    'floor_vray_07_-_Default_0': Mesh;
    'white_stairs_vray_09_-_Default_0': Mesh;
  };
  materials: {
    'vray_03_-_Default': any;
    Material: any;
    'vray_07_-_Default': any;
    'vray_09_-_Default': any;
  };
};

export function VrTheater(
  props: JSX.IntrinsicAttributes &
    Omit<
      ExtendedColors<
        Overwrite<
          Partial<Group<Object3DEventMap>>,
          NodeProps<Group<Object3DEventMap>, typeof Group>
        >
      >,
      NonFunctionKeys<{
        position?: Vector3;
        up?: Vector3;
        scale?: Vector3;
        rotation?: Euler;
        matrix?: Matrix4;
        quaternion?: Quaternion;
        layers?: Layers;
        dispose?: (() => void) | null;
      }>
    > & {
      position?: Vector3;
      up?: Vector3;
      scale?: Vector3;
      rotation?: Euler;
      matrix?: Matrix4;
      quaternion?: Quaternion;
      layers?: Layers;
      dispose?: (() => void) | null;
    } & EventHandlers
) {
  const group = useRef<Group>(null!);
  const { nodes, materials } = useGLTF('/assets/vrTheater.glb') as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['stairs_vray_03_-_Default_0'].geometry}
          material={materials['vray_03_-_Default']}
          position={[0, 208.818, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_ext_Material_0.geometry}
          material={materials.Material}
          position={[-11.806, 263.275, -1.033]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['floor_vray_07_-_Default_0'].geometry}
          material={materials['vray_07_-_Default']}
          position={[-148.557, 102.952, 204.422]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['white_stairs_vray_09_-_Default_0'].geometry}
          material={materials['vray_09_-_Default']}
          position={[-148.557, 102.952, 204.422]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/vrTheater.glb');
