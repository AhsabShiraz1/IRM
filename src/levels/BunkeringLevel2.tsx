// import { Image } from "@react-three/drei"
import { Root, Text, Container } from "@react-three/uikit"
import { Image } from "@react-three/drei"
import { DoubleSide } from "three"

import { LevelProps } from '../interfaces'
import Model from '../Model'
import { useEffect, useRef } from "react"
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"


export default function BunkeringLevel2({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Click on the video to play \n Please move around and view the slides and read the instructions on your right carefully")
  }, [])

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <Image url="/assets/bunkering-1.png" position={[-4, 3, -6]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, 0, 0]} castShadow receiveShadow side={DoubleSide} />
      <Image url="/assets/bunkering-2.png" position={[0, 3, -6]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, 0, 0]} castShadow receiveShadow side={DoubleSide} />
      <Image url="/assets/bunkering-3.png" position={[4, 3, -6]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, 0, 0]} castShadow receiveShadow side={DoubleSide} />

      <Model url="/assets/parsa-studio-office.glb" position={[0, 0, 0]} scale={[2, 2, 2]} rotation={[0, Math.PI, 0]} />
      <group position={[0, 1, -4]} rotation={[0, 0, 0]}>
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
                You are at the admin office
              </Text>
              <Text fontSize={12} fontWeight="medium">
                Please move around and view the images of gallery on the wall
              </Text>
              <Text fontSize={12} fontWeight="medium">
                * Adani Bunkering is your trusted partner for marine fuel solutions
              </Text>
              <Text fontSize={12} fontWeight="medium">
                * Operating out of Mundra Port in Gujarat. As an end-to-end provider, we supply bunker-grade fuels to ports across Gujarat, India, and even globally. 
              </Text>
              <Text fontSize={12} fontWeight="medium">
                * Part of Adani Natural Resources, the leading private bunker supplier in India 
              </Text>
                <Text fontSize={12} fontWeight="medium">
                * we ensure reliable fuel delivery wherever our customers need it 
              </Text>
              <Text fontSize={12} fontWeight="medium">
                * Click on the next button to proceed
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/bunkering-part-1.mp3"
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