import { Container, Root, Text } from "@react-three/uikit"

import { LevelProps } from '../interfaces'
import { useEffect } from "react"
// import { Button } from "../components/apfel/button"
// import { CheckCircleIcon } from "@react-three/uikit-lucide"
import VideoPlayer from "../VideoPlayer"
import Model from "../Model"

export default function PrecheckLevel2({ setNotification }: LevelProps) {

  useEffect(() => {
    setNotification("Click on the video to play")
  }, [])

  return (
    <>
      <group position={[0, 4.8, -4]}>
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#3064D7">
              Adani Natural Resources
            </Text>
            {/* <Container height={20}></Container> */}
            <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#3064D7" >
              Amitabh Mishra
            </Text>
            <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#3064D7">
              CHRO, Adani Natural Resource
            </Text>
          </Container>
        </Root>
      </group>
      {/* <Model scale={1} position={[-4, 3, -2]} rotation={[0, 0, 0]} url="/assets/globe.glb"></Model> */}
      <Model scale={1} position={[0, 5, 0]} rotation={[0, -Math.PI / 4, 0]} url="/assets/intro-gallery.glb"></Model>


      <VideoPlayer scale={[0.55, 0.5, 0.5]} src="/assets/Amitabh Mishra Compressed.mp4" position={[0, 3, -4]} rotation={[0, 0, 0]}></VideoPlayer>
      {/* <group position={[0, 2, -2]}>
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="normal" fontSize={14} letterSpacing={0}>
              Our vision at Adani Natural Resources is driven by goodness
            </Text>
            <Text fontWeight="normal" fontSize={14} letterSpacing={0}>
              We envision to be a world class leader in businesses that enrich lives
            </Text>
            <Text fontWeight="normal" fontSize={14} letterSpacing={0}>
              and contribute to the nation in building infrastructure through sustainable value creation
            </Text>
          </Container>
        </Root>
      </group> */}
       {/* <group position={[0, 0.25, -2]}>
        <Root>
          <Container>
            <Button variant="icon" onClick={() => setCurrentLevel(4)}>
              <CheckCircleIcon width={64} height={64} color={"grey"} />
            </Button>
          </Container>
        </Root>
      </group> */}
    </>
  )

}