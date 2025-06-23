// import { Image } from "@react-three/drei"
import { Root, Text, Container } from "@react-three/uikit"
import { Image } from "@react-three/drei"
import { DoubleSide } from "three"

import { LevelProps } from '../interfaces'
import Model from '../Model'
import { useEffect } from "react"
import VideoPlayer from "../VideoPlayer"
// import { Button } from "../components/apfel/button"
// import { CheckCircleIcon } from "@react-three/uikit-lucide"
// import { DoubleSide } from "three"

export default function KclLevel2({ setNotification }: LevelProps) {

  useEffect(() => {
    setNotification("Click on the video to play \n Please move around and view the slides and read the instructions on your right carefully")
  }, [])

  return (
    <>
      <Image url="/assets/kcl-1.png" position={[-8.2, 2.5, 3]} toneMapped={false} scale={[4.25, 2.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
      {/* <Image url="/assets/kcl-2.png" position={[-8.2, 2, 3]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} /> */}
      <Image url="/assets/kcl-2.png" position={[-8.2, 2.5, -2]} toneMapped={false} scale={[4.25, 2.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
      {/* <Image url="/assets/vtc.png" position={[-8.2, 2, -2]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} /> */}
      <VideoPlayer scale={[0.4, 0.4, 0.4]} src="/assets/sunipa-kcl.mp4" position={[-3, 2.8, -9]} rotation={[0, 0, 0]}></VideoPlayer>
      <VideoPlayer scale={[0.4, 0.4, 0.4]} src="/assets/mohan-kcl.mp4" position={[3, 2.8, -9]} rotation={[0, 0, 0]}></VideoPlayer>
      <group position={[-3, 4.5, -9]} rotation={[0, 0, 0]} >
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="bold" fontSize={15} letterSpacing={0} color="#000000">
              Ms. Sunipa Roy
            </Text>
            <Text fontWeight="bold" fontSize={15} letterSpacing={0} color="#000000">
              Business Head kutch Copper Limited
            </Text>
          </Container>
        </Root>
      </group>
      <group position={[3, 4.5, -9]} rotation={[0, 0, 0]} >
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="bold" fontSize={15} letterSpacing={0} color="#000000">
              Mr. Mohanasundaram Natarajan
            </Text>
            <Text fontWeight="bold" fontSize={15} letterSpacing={0} color="#000000">
              Business Head - Strategic and precious metals
            </Text>
          </Container>
        </Root>
      </group>
      <group position={[-8, 4.4, 0]} rotation={[0, Math.PI / 2, 0]} >
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="bold" fontSize={20} letterSpacing={0} color="#FFFFFF">
              Trainees at kutch copper limited
            </Text>
          </Container>
        </Root>
      </group>
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
                Click on the video to play and pause, Avoid playing both videos at the same time
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
    </>
  )

}