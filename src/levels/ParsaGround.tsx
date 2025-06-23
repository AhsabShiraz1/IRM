import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group, Mesh } from 'three';
import { ExtendedColors, Overwrite, NodeProps, NonFunctionKeys, Vector3, Euler, Matrix4, Quaternion, Layers } from '@react-three/fiber';
import { EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events';
import { JSX } from 'react/jsx-runtime';

export function ParsaGround(
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
  const { nodes, materials } = useGLTF('/assets/exploration-ground-v1.glb') as any;

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.09}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Material2_8 as Mesh).geometry}
            material={materials.Dirt02}
            position={[-2330.007, 122.887, 0]}
            scale={3}
          />
        </group>
      </group>
      <group position={[-230.203, 23.813, 373.245]} rotation={[0, 1.539, 0]} scale={4}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.203}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[480.743, 0.406, -183.956]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.OpenPitMine_Material006_0 as Mesh).geometry}
                material={materials['Material.006']}
                position={[0.965, -0.157, 0]}
              />
            </group>
          </group>
        </group>
      </group>
      <group position={[-89.765, 23.813, -359.433]} rotation={[Math.PI, -1.328, Math.PI]} scale={4}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.203}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[480.743, 0.406, -183.956]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.OpenPitMine_Material006_0_1 as Mesh).geometry}
                material={materials['Material.006']}
                position={[0.965, -0.157, 0]}
              />
            </group>
          </group>
        </group>
      </group>
      <group position={[-539.686, 23.813, -64.503]} rotation={[0, -0.113, 0]} scale={4}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.203}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[480.743, 0.406, -183.956]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.OpenPitMine_Material006_0_2 as Mesh).geometry}
                material={materials['Material.006']}
                position={[0.965, -0.157, 0]}
              />
            </group>
          </group>
        </group>
      </group>
      <group position={[135.718, 23.813, -61.602]} rotation={[Math.PI, -0.284, Math.PI]} scale={4}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.203}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[480.743, 0.406, -183.956]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={(nodes.OpenPitMine_Material006_0_3 as Mesh).geometry}
                material={materials['Material.006']}
                position={[0.965, -0.157, 0]}
              />
            </group>
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Sphere as Mesh).geometry}
        material={nodes.Sphere.material}
      />
    </group>
  );
}

useGLTF.preload('/assets/exploration-ground-v1.glb');
