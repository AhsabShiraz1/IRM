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


export default function IrmLevel3({ setNotification }: LevelProps) {
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
      <Image url="/assets/irm-gallery.png" position={[-3, 3, -8]} toneMapped={false} scale={[4.25, 2.8]} rotation={[0, 0, 0]} castShadow receiveShadow side={DoubleSide} />
      {/* <Image url="/assets/kcl-2.png" position={[-8.2, 2, 3]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} /> */}
      <Image url="/assets/irm-gallery-inside.png" position={[3, 3, -8]} toneMapped={false} scale={[4.25, 2.8]} rotation={[0, 0, 0]} castShadow receiveShadow side={DoubleSide} />
      {/* <Image url="/assets/vtc.png" position={[-8.2, 2, -2]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} /> */}
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
                Please click on the next button to proceed
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/irm-level-3.mp3"
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