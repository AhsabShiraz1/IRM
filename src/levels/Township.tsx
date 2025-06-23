import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
// import { VrTheater } from './VrTheatre';
import VideoPlayer from '../VideoPlayer';
import { Root, Text, Container } from "@react-three/uikit";
import Model from '../Model';
import { PositionalAudio } from "@react-three/drei"
import * as THREE from "three";
import { Button } from "../components/apfel/button"
import { Volume2 } from "@react-three/uikit-lucide"





export default function Township({ setNotification }: LevelProps) {

  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Please read through the messages")
  }, [])

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  useEffect(() => {
    setNotification("Adani Housing \n We will now showcase a few initiatives carried out by Adani group towards building a township for Adani employees \n Click on videos to play them");
  }, [setNotification]);

  return (
    <>

      <VideoPlayer scale={[0.5, 0.5, 0.5]} src="/assets/Township-final.mp4" position={[0, 3, -8]} rotation={[0, 0, 0]}></VideoPlayer>
      {/* <VideoPlayer scale={[0.5, 0.5, 0.5]} src="/assets/township-video-2.mp4" position={[0, 3, 8]} rotation={[0, Math.PI, 0]}></VideoPlayer>
      <VideoPlayer scale={[0.5, 0.5, 0.5]} src="/assets/township-video-3.mp4" position={[8, 3, 0]} rotation={[0, -Math.PI / 2, 0]}></VideoPlayer> */}
      <group position={[0, 0.5, -3]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={handleAudio}>
              <Volume2 width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
      <group position={[0, 1, -4]} rotation={[0, 0, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="center">
              <Text fontSize={12} fontWeight="bold">
                Township videos
              </Text>
              <Text fontSize={12} fontWeight="medium">
                The PEKB facility has a state of the art housing facility situated within 5 kms of the mine
              </Text>
              <Text fontSize={12} fontWeight="medium">
                The housing society consists of large walkways, beautiful homes, a temple as well as a community centre
              </Text>
              <Text fontSize={12} fontWeight="medium">
                Click on the videos around you to have a glimpse of life at the Adani Township.
              </Text>


            </Container>
          </Container>
        </Root>
      </group>
      <Model
        scale={1.1}
        position={[0, 5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        url="/assets/intro-gallery.glb"
      />
      <PositionalAudio
        ref={soundRef}
        url="/assets/township-audio.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />


    </>
  );
}
