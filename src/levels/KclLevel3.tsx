import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import Model from "../Model";
import { Environment } from "@react-three/drei"
import { Button } from "../components/apfel/button"
import { Root, Text, Container } from "@react-three/uikit"
import * as THREE from "three";
import { Volume2 } from "@react-three/uikit-lucide"
import { PositionalAudio } from "@react-three/drei"


export default function KclLevel3({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Raw material is taken for processing in smelter \n Please stay 10m away from the yellow grills");
  }, [setNotification]);

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <Model key="smelter" scale={1.8} position={[0, -0.4, -8]} rotation={[0, 0, 0]} url="/assets/smelter-compressed.glb" />
      <Model key="Kcl-refinery-1" scale={0.1} position={[0, 0, -4]} rotation={[0, 0, 0]} url="/assets/kcl-shed.glb" />
      <Environment
        files="/assets/kcl-env-compressed.hdr"
        background
        ground={{
          height: 30,
          radius: 150,
          scale: 180
        }}
      />

      <group position={[0, 1, -3]} rotation={[0, 0, 0]}>
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
                Welcome to KCL smelter operations
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Here, we focus on the smelter's key statistics.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * The smelter operates at temperatures between 1200 to 1800 degrees Celsius.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * It processes 50 KTPA copper in the copper bearing and uses 276 KTPA fluxes
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * and the copper concentrator has a capacity of 1.6 million tons annually.
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/kcl-level-3-updated.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 1.8, -2]}>
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
