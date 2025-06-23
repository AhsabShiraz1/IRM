import { Container, Root, Text } from "@react-three/uikit"
import { Environment } from "@react-three/drei"
import { Image } from "@react-three/drei"
import { DoubleSide } from "three"
import { LevelProps } from '../interfaces'
import { useEffect, useRef } from "react"
import Model from "../Model"
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"


export default function ParsaLevel5({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Post cleaning, drilling process is started\n Charge is setup while drilling takes place")
  }, [])

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <Model scale={1.5} position={[-5.4, -0.15, -5]} rotation={[0, Math.PI, 0]} url="/assets/drill.glb"></Model>
      <Model scale={2} position={[-1, 1, -3]} rotation={[0, 0, 0]} url="/assets/bomb-pipe.glb"></Model>
      <Model scale={5} position={[0, 0, -30]} rotation={[0, 0, 0]} url="/assets/green-boundry.glb"></Model>

      <group position={[-1, 1.4, -3]}>
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="medium" fontSize={14} letterSpacing={0} color="#FFFFFF">
              C5 Explosive Booster
            </Text>
          </Container>
        </Root>
      </group>
      <Model scale={1} position={[-1, 1, -5]} rotation={[0, 0, 0]} url="/assets/chalk-line.glb"></Model>
      <group position={[1, 1.4, -3]}>
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="medium" fontSize={14} letterSpacing={0} color="#FFFFFF">
              Trunk line detonator
            </Text>
          </Container>
        </Root>
      </group>
      <Model scale={0.5} position={[4, -4.8, 85]} rotation={[0, -Math.PI / 2, 0]} url="/assets/exploration-ground-v1.glb"></Model>
      <Environment
        files="/assets/parsa-env-compressed.hdr"
        background
        ground={{
          height: 50,
          radius: 200,
          scale: 230
        }}
      />
      <group position={[0, 4, -8]} rotation={[0, 0, 0]}>
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
                Drilling and Charge setup
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * We are starting the drilling process to create holes for explosives using the drilling vehicle
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * The charges are set up using the equipment in front of you: trunk line detonator and explosives.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * These charges are then placed into the holes for blasting
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * The drilling is carried out first following a grid pattern using the mining drill rig.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * The drilled holes are spaced evenly at 17 meters with a depth of 20 meters each
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * The charges are then deployed in these holes ensuring an air gap of 1.5 meters at the bottom
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Click 'Next' to proceed.
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <Image url="/assets/drill-pattern-parsa.png" position={[-2.5, 2, 1]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
      <PositionalAudio
        ref={soundRef}
        url="/assets/parsa-level-5-updated.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 0.4, -3]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={handleAudio}>
              <Volume2 width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
    </>
  )

}