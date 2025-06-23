import { Container, Root, Text } from "@react-three/uikit"
import { Environment } from "@react-three/drei"
import { LevelProps } from '../interfaces'
import { useEffect, useRef } from "react"
import Model from "../Model"
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"

export default function ParsaLevel4({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Welcome to open pit mine\n Cleaning and levelling is carried out in the designated area")
  }, [])

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>   
      <Model scale={1.5} position={[-10, 0, -10]} rotation={[0, Math.PI /2 , 0]} url="/assets/Wheel-loader-comp1.glb"></Model>
      <Model scale={1.5} position={[8, 0.15, -4]} rotation={[0, -Math.PI /2 , 0]} url="/assets/wheel-loader-animated.glb"></Model>
      <Model scale={0.5} position={[4, -4.83, 85]} rotation={[0, -Math.PI /2 , 0]} url="/assets/exploration-ground-v1.glb"></Model>
      <Model scale={5} position={[0, 0, -30]} rotation={[0, 0, 0]} url="/assets/green-boundry.glb"></Model>

      <Environment 
        files="/assets/parsa-env-compressed.hdr"
        background 
        ground={{
          height: 50,     
          radius: 200,    
          scale: 230      
        }} 
      />
      <group position={[0, 3, -5]}>
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="bold" fontSize={25} letterSpacing={0} color="#FFFFFF">
              Green boundry represents the designated area for blasting
            </Text>
          </Container>
        </Root>
      </group>
      <group position={[0, 3.8, -5]} rotation={[0, 0 , 0]}>
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
                * All the steps involved in mining coal will be explained step by step
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * We begin by designating an area of land for blasting 
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * After the area is cleared and marked we move to drilling process
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Please proceed to drilling process by clicking "Next"
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/parsa-level-4.mp3"
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