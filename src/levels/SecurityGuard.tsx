import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group, Mesh, Object3DEventMap } from 'three';
import { ExtendedColors, Overwrite, NodeProps, NonFunctionKeys, Vector3, Euler, Matrix4, Quaternion, Layers } from '@react-three/fiber';
import { EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events';
import { JSX } from 'react/jsx-runtime';

type SecurityGuardProps = JSX.IntrinsicAttributes & 
  Omit<
    ExtendedColors<Overwrite<Partial<Group<Object3DEventMap>>, NodeProps<Group<Object3DEventMap>, typeof Group>>>,
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
  > & { position?: Vector3; up?: Vector3; scale?: Vector3; rotation?: Euler; matrix?: Matrix4; quaternion?: Quaternion; layers?: Layers; dispose?: (() => void) | null } & EventHandlers;

export function SecurityGuard(props: SecurityGuardProps) {
  const group = useRef<Group>(null!);
  const { nodes, materials } = useGLTF('/assets/security-guard.glb') as any;

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          name="Object_2"
          castShadow
          receiveShadow
          geometry={(nodes.Object_2 as Mesh).geometry}
          material={materials.Botas}
        />
        <mesh
          name="Object_3"
          castShadow
          receiveShadow
          geometry={(nodes.Object_3 as Mesh).geometry}
          material={materials.Camisa}
        />
        <lineSegments
          name="Object_4"
          geometry={(nodes.Object_4 as Mesh).geometry}
          material={materials.Chaleco}
        />
        <mesh
          name="Object_5"
          castShadow
          receiveShadow
          geometry={(nodes.Object_5 as Mesh).geometry}
          material={materials.Chaleco}
        />
        <mesh
          name="Object_6"
          castShadow
          receiveShadow
          geometry={(nodes.Object_6 as Mesh).geometry}
          material={materials.Piel}
        />
        <mesh
          name="Object_7"
          castShadow
          receiveShadow
          geometry={(nodes.Object_7 as Mesh).geometry}
          material={materials.Vaquero}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/security-guard.glb');
