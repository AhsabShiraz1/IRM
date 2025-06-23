import { useEffect, useRef } from "react";
import { Root, Container, Text } from "@react-three/uikit";
import { LevelProps } from "../interfaces";
import Model from "../Model";
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"




export default function Instructions({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);
  useEffect(() => {
    setNotification("These are VR instructions for the Quest 3");
  }, [setNotification]);

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <Model
        url="/assets/VR-instructions-space-1.glb"
        position={[0, 0, -2.5]}
        scale={[2, 2, 2]}
        rotation={[0, Math.PI, 0]}
      />
      <Model
        url="/assets/quest-3-model.glb"
        position={[1.5, 1.8, -1]}
        scale={0.6}
        rotation={[0, 0, 0]}
      />
      <group position={[0, 4, -3]} rotation={[0, 0, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="flex-start">
              <Text fontSize={12} fontWeight="bold">
                Instructions
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * The Quest 3 has 2 controllers and a headset with strap adjustments to fit you.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Each controller has a trigger button and can be reached by pointing your index finger.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * The Home, Next, and Previous buttons are located directly in front of your feet
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Use the right controller to select them and use the trigger to click.
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/Instructions-Voice-over.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
        <group position={[0, 3.2, -3]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={handleAudio}>
              <Volume2 width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
    </>
  );
}
