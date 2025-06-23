import { Image } from "@react-three/drei";
import { Root, Text, Container } from "@react-three/uikit";
import { LevelProps } from '../interfaces';
import Model from '../Model';
import { useEffect, useRef } from "react";
import VideoPlayer from "../VideoPlayer";
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"


export default function ParsaLevel({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Welcome to P.E.K.B Module \n Click on the video to play and pause");
  }, [setNotification]);


  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <group position={[0, 5, -4]}>
        <Root>
          <Container flexDirection="column" justifyContent="center" alignItems="center">
            <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#3064D7">
              Adani Natural Resources
            </Text>
            <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#3064D7">
              Rajendra Ingale
            </Text>
            <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#3064D7">
              Business Head, India Coal Mines
            </Text>
          </Container>
        </Root>
      </group>

      {/* Model and Text Section */}
      <group position={[4, 1, -2]}>
        <Model
          scale={1.2}
          position={[-1, 0, 0]}
          rotation={[0, -Math.PI / 6, 0]}
          url="/assets/india_coal_map.glb"
        />
        <group position={[0, 3.8, 0.8]} rotation={[0, -Math.PI / 6, 0]}>
          <Root>
            <Container flexDirection="column" justifyContent="center" alignItems="center">
              <Text fontWeight="bold" fontSize={14} letterSpacing={0}>
                Our Presence
              </Text>
            </Container>
          </Root>
        </group>

        {/* Cards Section */}
        <group position={[1.4, 3.4, 1.5]} rotation={[0, -Math.PI / 6, 0]}>
          <Root>
            <Container
              padding={10}
              borderWidth={2}
              borderColor="white"
              borderRadius={8}
              backgroundColor="lightgrey"
            >
              <Container flexDirection="column" alignItems="flex-start">
                {["* KURMITAR (6 MTPA)", "* TALABIRA || & ||| (20 MTPA)", "* GARE || (23.6 MTPA)", "* GARE ||| (5 MTPA)", "* BAILADILA D-13 (10 MTPA)"].map((text, index) => (
                  <Text key={index} fontSize={10} fontWeight="medium">
                    {text}
                  </Text>
                ))}
              </Container>
            </Container>
          </Root>
        </group>

        <group position={[1.8, 0.8, 2]} rotation={[0, -Math.PI / 6, 0]}>
          <Root>
            <Container
              padding={10}
              borderWidth={2}
              borderColor="white"
              borderRadius={8}
              backgroundColor="lightgrey"
            >
              <Container flexDirection="column" alignItems="flex-start">
                {["* DHIRAULI (6.5 MTPA)", "* SULIYARI (5 MTPA)", "* ATMSP (22 MTPA)", "* PARSA EAST & KANTA BESAN (18 MTPA)", "* PARSA (5 MTPA)", "* KENTE EXTENSION (9 MTPA)"].map((text, index) => (
                  <Text key={index} fontSize={10} fontWeight="medium">
                    {text}
                  </Text>
                ))}
              </Container>
            </Container>
          </Root>
        </group>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/parsa-level-0.mp3"
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

      {/* Video Player */}
      <VideoPlayer
        scale={[0.55, 0.45, 0.45]}
        src="/assets/RajendraIngale.mp4"
        position={[0, 3, -4]}
        rotation={[0, 0, 0]}
      />

      {/* Images */}
      <Image
        url="/assets/Mining-services-anr.png"
        position={[-4.8, 2.5, -1]}
        toneMapped={false}
        scale={[4, 2.2]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />
      <Image
        url="/assets/Operational-performance-anr.png"
        position={[0, 2.5, 4]}
        toneMapped={false}
        scale={[4, 2.2]}
        rotation={[0, Math.PI, 0]}
        castShadow
        receiveShadow
      />
      <Model
        scale={1.1}
        position={[0, 5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        url="/assets/intro-gallery-4.glb"
      />
       <group position={[0, 0.8, -4]} rotation={[0, 0, 0]}>
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
                Welcome to Parsa and Kanta Basan immersive module
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * please click on the video to play and pause and do not click on audio button while video is playing
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * You can move around and read the statistics and click on the next button to proceed
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * After watching the video please click on the next button to proceed
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      {/* <group position={[0, 0.25, -2]}>
        <Root>
          <Container>
            <Button variant="icon" onClick={() => setCurrentLevel(13)}>
              <CheckCircleIcon width={64} height={64} color="white" />
            </Button>
          </Container>
        </Root>
      </group> */}
    </>
  );
}
