import { Container, Root, Text } from "@react-three/uikit"
// import { Environment } from "@react-three/drei"
import { LevelProps } from '../interfaces'
import { useEffect, useRef } from "react"
import { Environment, PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"

export default function AchLevel1({ setNotification }: LevelProps) {
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
      <Environment 
        files="/assets/entrance_1.hdr"

        background 
        ground={{
          height: 12,     
          radius: 60,    
          scale: 10      
        }} 
      />
      <group position={[0, 2.8, -5]} rotation={[0, 0 , 0]}>
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
                Welcome to Adani Corporate House
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * You are now at the reception area
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Please proceed to the desk with a valid ID
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Our receptionist will verify your details and purpose of visit before providing you with a day pass
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/ach-reception.mp3"
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