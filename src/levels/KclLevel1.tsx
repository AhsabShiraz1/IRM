import { Environment } from "@react-three/drei"
import { LevelProps } from '../interfaces'
import Model from '../Model'
import { Root, Text, Container } from "@react-three/uikit";

import { Suspense, useEffect, useRef } from "react"
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"
// import { SecurityGuard } from "./SecurityGuard"

export default function KclLevel1({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Welcome to Kutch Copper Limited, \n You are at the Project office, Please carry valid ID for registration")
  }, [])

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <Suspense fallback={null}>
        <Model url="/assets/kcl-project-office.glb" position={[-2, -0.5, -12]} scale={1} rotation={[0, Math.PI, 0]} />
        <Model url="/assets/Security-animated-1.glb" position={[1, -0.06, -3.5]} scale={1.1} rotation={[0, -Math.PI / 8, 0]} />
      </Suspense>
      <Environment 
        files="/assets/parsa-parking-1.hdr"
        background 
        ground={{
          height: 20,     
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
                Welcome to Kutch Copper Limited
              </Text>
              <Text fontSize={10} fontWeight="medium">
                You are at the project office, please collect your gatepass and have a valid ID proof with you
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/kcl-level-1.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={ [0, 0.6, -3]}>
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
