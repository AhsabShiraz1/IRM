import { Environment } from "@react-three/drei"
import { LevelProps } from '../interfaces'
import { Root, Text, Container } from "@react-three/uikit";
// import Model from '../Model'
import { Suspense, useEffect, useRef } from "react"
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"
import Model from "../Model";

export default function ParsaLevel1({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Welcome to P.E.K.B Security Block, \n Collect your gatepass here and enter security office with valid ID proof ")
  }, [])

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <Suspense fallback={null}>
        <Model url="/assets/security-scene-final.glb" position={[-8, -0.5, -18]} scale={1} rotation={[0, Math.PI, 0]} />
        <Model url="/assets/Security-animated-1.glb" position={[1, -0.06, -3.5]} scale={1.1} rotation={[0, -Math.PI / 8, 0]} />
        <Model url="/assets/cars-parked.glb" position={[14, 0, 18]} scale={2} rotation={[0, -Math.PI / 2, 0]} />
        <Model url="/assets/light-pole.glb" position={[-30, 0, -5]} scale={2.5} rotation={[0, 0, 0]} />
        <Model url="/assets/container-box.glb" position={[-30, 0.8, 16]} scale={2} rotation={[0, 0, 0]} />
        <Model url="/assets/tower-parsa.glb" position={[-30, 0.8, -20]} scale={0.01} rotation={[0, 0, 0]} />
        <Model url="/assets/barricade-1.glb" position={[-29, -0.2, -28]} scale={2} rotation={[0, Math.PI / 2, 0]} />
        <Model url="/assets/barricade-2.glb" position={[-30, -0.2, 15]} scale={2} rotation={[0, Math.PI / 2, 0]} />
        <Model url="/assets/barricade-3.glb" position={[-10, -0.2, -30]} scale={2} rotation={[0, Math.PI / 2, 0]} />
        <Model url="/assets/barricade-4.glb" position={[-10, -0.2, 22]} scale={2} rotation={[0, Math.PI / 2, 0]} />
        <Model url="/assets/barricade-5.glb" position={[12, -0.2, 0]} scale={2} rotation={[0, 0, 0]} />
        <Model url="/assets/tree-pack-1.glb" position={[-2, 0, 28]} scale={8} rotation={[0, Math.PI / 2, 0]} />
        <Model url="/assets/tree-pack-2.glb" position={[-2, 0, -28]} scale={8} rotation={[0, Math.PI / 2, 0]} />
        <Model url="/assets/tree-pack-3.glb" position={[-26, 0, -22]} scale={8} rotation={[0, Math.PI / 2, 0]} />





      </Suspense>
      <Environment
        files="/assets/parsa-parking-1.hdr"
        background
        ground={{
          height: 40,
          radius: 280,
          scale: 250
        }}
      />
      <group position={[0, 2.5, -4]} rotation={[0, 0, 0]}>
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
                You are at the security office
              </Text>
              <Text fontSize={10} fontWeight="medium">
                please collect your gatepass and enter security office with valid ID proof
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/parsa-level-1.mp3"
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
    </>
  )
}
