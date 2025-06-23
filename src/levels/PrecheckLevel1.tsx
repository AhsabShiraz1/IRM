import { Container, Root, Text } from "@react-three/uikit"

import { LevelProps } from '../interfaces'
import { useEffect } from "react"
// import { Button } from "../components/apfel/button"
// import { CheckCircleIcon } from "@react-three/uikit-lucide"
import VideoPlayer from "../VideoPlayer"
import Model from "../Model"

export default function PrecheckLevel1({ setNotification }: LevelProps) {

  useEffect(() => {
    setNotification("Click on the video to play")
  }, [])

  return (
    <>
      <group position={[0, 5, -4]}>
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#3064D7">
              Adani Natural Resources
            </Text>
            {/* <Container height={20}></Container> */}
            <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#3064D7" >
              Vinay Prakash
            </Text>
            <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#3064D7">
              CEO, Adani Natural Resource
            </Text>
          </Container>
        </Root>
      </group>
      {/* <Model scale={1} position={[-5, 3, -4]} rotation={[0, 0, 0]} url="/assets/globe.glb"></Model> */}
      <VideoPlayer scale={[0.55, 0.5, 0.5]} src="/assets/Vinay Prakash Compressed.mp4" position={[0, 3, -4]} rotation={[0, 0, 0]}></VideoPlayer>
      <group position={[0, 1, -2]}>
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="medium" fontSize={14} letterSpacing={0} color="#3064D7">
              Our vision at Adani Natural Resources is driven by goodness
            </Text>
            <Text fontWeight="medium" fontSize={14} letterSpacing={0} color="#3064D7">
              We envision to be a world class leader in businesses that enrich lives
            </Text>
            <Text fontWeight="medium" fontSize={14} letterSpacing={0} color="#3064D7">
              and contribute to the nation in building infrastructure through sustainable value creation
            </Text>
          </Container>
        </Root>
      </group>
      <Model scale={1} position={[0, 5, 0]} rotation={[0, -Math.PI / 4, 0]} url="/assets/intro-gallery.glb"></Model>
      {/* <group position={[0, 0.25, -2]}>
        <Root>
          <Container>
            <Button variant="icon" onClick={() => setCurrentLevel(3)}>
              <CheckCircleIcon width={64} height={64} color={"grey"} />
            </Button>
          </Container>
        </Root>
      </group> */}
          <group position={[5, 2, -3]} rotation={[0, -Math.PI/4, 0]}>
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
                Welcome to Adani immersive trainning module
              </Text>
              <Text fontSize={10} fontWeight="medium">
                Click on the video to play and pause the video
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
    </>
  )

}