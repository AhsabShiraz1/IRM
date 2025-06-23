import { Image } from "@react-three/drei"
import { Root, Text, Container } from "@react-three/uikit"
import * as THREE from "three";
import { LevelProps } from '../interfaces'
import Model from '../Model'
import { useEffect, useRef } from "react"
import VideoPlayer from "../VideoPlayer"
import { Button } from "../components/apfel/button"
import { DoubleSide } from "three"
import { Volume2 } from "@react-three/uikit-lucide"
import { PositionalAudio } from "@react-three/drei"

export default function ParsaLevel2({ setNotification }: LevelProps) {
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
      <Image url="/assets/PEKB-site-map.png" position={[-8.2, 4.4, 3]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
      <Image url="/assets/coal-field.png" position={[-8.2, 2, 3]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
      <Image url="/assets/location-info.png" position={[-8.2, 4.4, -2]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
      <Image url="/assets/vtc.png" position={[-8.2, 2, -2]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
      <group position={[0, 5.2, -9]}>
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="bold" fontSize={25} letterSpacing={0}>
              Adani Natural Resources
            </Text>
            <Text fontWeight="bold" fontSize={25} letterSpacing={0} >
              Manoj Shahi
            </Text>
            <Text fontWeight="bold" fontSize={25} letterSpacing={0}>
              Cluster Head, P.E.K.B Mines
            </Text>
          </Container>
        </Root>
      </group>
      <VideoPlayer scale={[0.8, 0.8, 0.8]} src="/assets/cluster-head-video.mp4" position={[0, 2.5, -9]} rotation={[0, 0, 0]}></VideoPlayer>
     
      <Model url="/assets/parsa-studio-office.glb" position={[0, 0, 0]} scale={[2, 2, 2]} rotation={[0, Math.PI, 0]} />
      <group position={[4, 2, -2]} rotation={[0, -Math.PI/4, 0]}>
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
                Instructions
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Please complete the paperwork required for new joinee's with the HR team
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * For Mine workers : Please complete the 7 days mandatory training at the VTC
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * VTC (Vocational Traning center) is located adjacent to the admission building
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * You will also find the cafeteria located beside the VTC for daily meals
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Please proceed to Locker room by clicking "Next" to pickup your PPE kit 
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/parsa-level-2.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 0.4, -8]}>
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