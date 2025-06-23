import { Image } from "@react-three/drei";
import { Root, Text, Container } from "@react-three/uikit";
import { LevelProps } from '../interfaces';
import Model from '../Model';
import { useEffect, useRef } from "react";
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"


export default function IrmLevel1({ setNotification }: LevelProps) {
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
      <PositionalAudio
        ref={soundRef}
        url="/assets/irm-level-1-final.mp3"
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

      

      {/* Images */}
      <Image
        url="/assets/Irm-footprint.png"
        position={[-4.8, 2.5, -1]}
        toneMapped={false}
        scale={[4, 2.2]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />
      <Image
        url="/assets/irm-final-2.png"
        position={[4.8, 2.5, -1]}
        toneMapped={false}
        scale={[4, 2.2]}
        rotation={[0, -Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />
      <Model
        scale={1.1}
        position={[0, 5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        url="/assets/intro-gallery-3.glb"
      />
      <group position={[0, 1.5, -4]} rotation={[0, 0, 0]}>
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
                Welcome to Adani IRM immersive module
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * please click on the video to play and pause and do not click on audio button while video is playing
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * You can move around and read the statistics and click on the next button to proceed
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
    </>
  );
}
