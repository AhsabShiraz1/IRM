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

export default function BunkeringLevel1({ setNotification }: LevelProps) {
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
        <Model url="/assets/adani-mundra-port.glb" position={[-74, -10.3, 28]} scale={1} rotation={[0, 0, 0]} />
        <Model url="/assets/Security-animated-1.glb" position={[1, -0.06, -3.5]} scale={1.1} rotation={[0, -Math.PI / 8, 0]} />
      </Suspense>
      <Environment
        files="/assets/mundra-env.hdr"
        background
        ground={{
          height: 10,
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
                Welcome to Adani Ports and Special Economic Zone
              </Text>
              <Text fontSize={10} fontWeight="medium">
                please collect your gatepass and have a valid ID proof
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/irm-level-2.mp3"
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
