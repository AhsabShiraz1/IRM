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
        files="/assets/pathway.hdr"
        background 
        ground={{
          height: 2,     
          radius: 8,    
          scale: 100      
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
                Please read carefully
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * You are now on the way to the main block.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Please walk along the pathway
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * If you have any concerns or need directions, feel free to reach out to security.
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/pathway.mp3"
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