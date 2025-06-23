import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import Model from "../Model";
import { Root, Text, Container } from "@react-three/uikit";

import { Environment } from "@react-three/drei"
import { Flag } from './Flag';
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"


export default function ParsaLevel6({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);
  useEffect(() => {
    setNotification("The area is cordoned off using red flags. Keep a minimum distance of 100m from the marked site.");
  }, [setNotification]);

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <Flag key="flag1" scale={1} position={[-4, 2, -8]} rotation={[0, 0, 0]} />
      <Flag key="flag2" scale={1} position={[-2, 2, -8]} rotation={[0, 0, 0]} />
      <Flag key="flag3" scale={1} position={[-0, 2, -8]} rotation={[0, 0, 0]} />
      <Flag key="flag4" scale={1} position={[2, 2, -8]} rotation={[0, 0, 0]} />
      <Flag key="flag5" scale={1} position={[4, 2, -8]} rotation={[0, 0, 0]} />

      <Model key="ground" scale={0.5} position={[4, -4.83, 85]} rotation={[0, -Math.PI / 2, 0]} url="/assets/exploration-ground-v1.glb" />
      <Environment
        files="/assets/parsa-env-compressed.hdr"
        background
        ground={{
          height: 30,
          radius: 100,
          scale: 230
        }}
      />
      <PositionalAudio
        ref={soundRef}
        url="/assets/parsa-level-6.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 0.6, -3]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={handleAudio}>
              <Volume2 width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
      <group position={[0, 3.5, -4]} rotation={[0, 0, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="center">
              <Text fontSize={12} fontWeight="bold">
                Red flags mark the area. Stay at least 100 meters away
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
    </>
  );
}
