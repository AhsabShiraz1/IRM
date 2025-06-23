import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group, Mesh } from 'three';
import { ExtendedColors, Overwrite, NodeProps, NonFunctionKeys, Vector3, Euler, Matrix4, Quaternion, Layers } from '@react-three/fiber';
import { EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events';
import { JSX } from 'react/jsx-runtime';

export function CoalPile(
  props: JSX.IntrinsicAttributes &
    Omit<
      ExtendedColors<
        Overwrite<Partial<Group>, NodeProps<Group, typeof Group>>
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
  const { nodes, materials } = useGLTF('/assets/coal-pile1.glb') as any;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Model_material2_0 as Mesh).geometry}
        material={materials.material2}
        position={[0.183, 12.748, 9.941]}
        rotation={[-0.718, 0.029, -0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Model_material0_0 as Mesh).geometry}
        material={materials.material0}
        position={[0.183, 12.748, 9.941]}
        rotation={[-0.718, 0.029, -0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Model_material1_0 as Mesh).geometry}
        material={materials.material1}
        position={[0.183, 12.748, 9.941]}
        rotation={[-0.718, 0.029, -0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Model_material3_0 as Mesh).geometry}
        material={materials.material3}
        position={[0.183, 12.748, 9.941]}
        rotation={[-0.718, 0.029, -0.034]}
      />
    </group>
  );
}

useGLTF.preload('/assets/coal-pile1.glb');
