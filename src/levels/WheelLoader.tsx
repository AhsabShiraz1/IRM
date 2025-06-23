import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group, Mesh } from 'three';
import { ExtendedColors, Overwrite, NodeProps, NonFunctionKeys, Vector3, Euler, Matrix4, Quaternion, Layers } from '@react-three/fiber';
import { EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events';
import { JSX } from 'react/jsx-runtime';

export function WheelLoader(props: JSX.IntrinsicAttributes & Omit<ExtendedColors<Overwrite<Partial<Group>, NodeProps<Group, typeof Group>>>, NonFunctionKeys<{ position?: Vector3; up?: Vector3; scale?: Vector3; rotation?: Euler; matrix?: Matrix4; quaternion?: Quaternion; layers?: Layers; dispose?: (() => void) | null; }>> & { position?: Vector3; up?: Vector3; scale?: Vector3; rotation?: Euler; matrix?: Matrix4; quaternion?: Quaternion; layers?: Layers; dispose?: (() => void) | null; } & EventHandlers) {
  const group = useRef<Group>(null!);
  const { nodes, materials } = useGLTF('/assets/wheel-loader-animated.glb') as any;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="AuxScene">
        <group name="WheelLoader">
          <group name="Chassis" rotation={[-Math.PI / 2, 0, 0]} scale={0.284}>
            <mesh
              name="ChassisMesh"
              castShadow
              receiveShadow
              geometry={(nodes.ChassisMesh as Mesh).geometry}
              material={materials.Chassis}
            />
          </group>
          <group name="Wheels" position={[1.132, -3.052, 0]}>
            <mesh
              name="WheelsMesh"
              castShadow
              receiveShadow
              geometry={(nodes.WheelsMesh as Mesh).geometry}
              material={materials.Wheels}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/assets/wheelLoader.glb');
