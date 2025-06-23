import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import { Container, Root, Text } from "@react-three/uikit"
import { Button } from "../components/apfel/button"
import * as THREE from "three";
import Model from "../Model";
import { Environment } from "@react-three/drei"
import { CoalPile } from './CoalPile';
// import { ParsaGround } from './ParsaGround';
import { Volume2 } from "@react-three/uikit-lucide"
import { PositionalAudio } from "@react-three/drei"


export default function ParsaLevel8({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Please read all the steps involved post blasting carefully");
  }, [setNotification]);
  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <Model scale={2} position={[-5, 0.18, -6]} rotation={[0, Math.PI /2 , 0]} url="/assets/wheel-loader-animated.glb"></Model>
      <Model scale={0.6} position={[8, -0.1, -16]} rotation={[0, -Math.PI /2 , 0]} url="/assets/surface-miner.glb"></Model>
      <Model key="parsa-ground" scale={0.5} position={[4, -4.83, 85]} rotation={[0, -Math.PI /2 , 0]} url="/assets/exploration-ground-v1.glb"></Model>
      <CoalPile key="CoalPile1" scale={1} position={[1.8, -8.5, -28]} rotation={[0, 0, 0]} />
      <CoalPile key="CoalPile2" scale={1} position={[-12, -8.5, -58]} rotation={[0, 0, 0]} />
      <CoalPile key="CoalPile3" scale={1} position={[15, -8.5, -35]} rotation={[0, 0, 0]} />
      <Model key="excavator" scale={2} position={[28, 0, -32]} rotation={[0, -Math.PI / 3, 0]} url="/assets/Excavator.glb " />
      <Model key="dump-truck" scale={0.8} position={[-25, 0, -45]} rotation={[0, -Math.PI / 3, 0]} url="/assets/Dump-truck.glb " />
      <Environment
        files="/assets/parsa-env-compressed.hdr"
        background
        ground={{
          height: 30,
          radius: 100,
          scale: 230
        }}
      />
      <group position={[0, 3.8, -3]} rotation={[0, 0, 0]}>
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
                Please read carefully
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * There are number of processes carried out post blasting
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Post blasting, The area is cleared using a loader
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * A specialized HEMM vehicle, known as a surface miner, retrieves the ore using its powerful drilling teeth.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * The loader will make piles based on category of rock and quality of ore
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Piles are loaded onto dump truck using excavator
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Overburden management is a critical operation here
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * This completes the open pit mine operations, The coal is sent to washery or stackyard from here
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Click next to continue
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/surface-miner-step.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 0.8, -8]}>
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
