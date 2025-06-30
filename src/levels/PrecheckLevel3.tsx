import { Image } from "@react-three/drei"
import { Container, Root, Text } from "@react-three/uikit"
import * as THREE from "three";
import { LevelProps } from '../interfaces'
import { useEffect, useRef } from "react"
import { Button } from "../components/apfel/button"
// import { CheckCircleIcon } from "@react-three/uikit-lucide"
import Model from "../Model"
import { DoubleSide } from "three"
import { Volume2 } from "@react-three/uikit-lucide"
import { PositionalAudio } from "@react-three/drei"

export default function PrecheckLevel2({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Please read through the messages")
  }, [])

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <Image url="/assets/Chairman message.png" position={[-2.8, 1.4, -1]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
      <Image url="/assets/Adani Welcome.png" position={[2.8, 1.4, -1]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, -Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
      <Image url="/assets/Adani Values.png" position={[-2.8, 1.4, -6.5]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
      <Image url="/assets/business-profile.png" position={[2.8, 1.4, -6.5]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, -Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
      <Model scale={1} position={[0, 3.2, -1]} rotation={[0, Math.PI / 2, 0]} url="/assets/vr-gallery.glb"></Model>
      <PositionalAudio
        ref={soundRef}
        url="/assets/precheck-level-3.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 0.5, -3]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={handleAudio}>
              <Volume2 width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
      {/* <group position={[0, 0.25, -2]}>
        <Root>
          <Container>
            <Button variant="icon" onClick={() => setCurrentLevel(5)}>
              <CheckCircleIcon width={64} height={64} color={"grey"} />
            </Button>
          </Container>
        </Root>
      </group> */}

      <group position={[0, 1, -3]} rotation={[0, 0, 0]}>
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
                Move around and read the messages,Walk closer to see the details.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                If you are near the boundary, please exit and expand it for more space.
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      {/* <group position={[0, 0.09, -0.85]} rotation={[-Math.PI / 2, 0, 0]}>
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
                You have completed precheck, Please go back to Home
              </Text>
              <Text fontSize={12} fontWeight="bold">
                Click on home button beside audio button to go back to home
              </Text>
            </Container>
          </Container>
        </Root>
      </group> */}
        {/* <group position={[0, 1.7, -3]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={() => setCurrentLevel(0)}>
              <HomeIcon width={55} height={55} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group> */}
    </>
  )

}