import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import Model from "../Model";
import { Environment } from "@react-three/drei"
import { Button } from "../components/apfel/button"
import { Root, Text, Container } from "@react-three/uikit"
import * as THREE from "three";
import { Volume2 } from "@react-three/uikit-lucide"
import { PositionalAudio } from "@react-three/drei"
import VideoPlayer from '../VideoPlayer';


export default function KclLevel4({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Raw material is taken for processing in smelter \n Please stay 10m away from the yellow grills");
  }, [setNotification]);

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <Model key="Kcl-refinery-2" scale={0.1} position={[0, 0, -6]} rotation={[0, 0, 0]} url="/assets/kcl-anode-loading-final.glb" />
      <Environment
        files="/assets/kcl-env-compressed.hdr"
        background
        ground={{
          height: 30,
          radius: 150,
          scale: 180
        }}
      />

      <group position={[0, 0.8, -3]} rotation={[0, 0, 0]}>
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
                Welcome to KCL Refinery
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * The anode is transported to cells via crane 
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * You are currently at the loading station
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Please click on the video to watch the cells being loaded
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Click 'Next' to proceed to electrolysis and stripping process
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/kcl-level-4.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 1.4, -2]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={handleAudio}>
              <Volume2 width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
      <VideoPlayer scale={[0.3, 0.3, 0.3]} src="/assets/kcl-anode-loading.mp4" position={[4, 2.5, -5]} rotation={[0,-Math.PI / 6, 0]}></VideoPlayer>
    </>
  );
}
