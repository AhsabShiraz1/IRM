import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import Model from "../Model";
import { Environment } from "@react-three/drei"
// import VideoPlayer from '../VideoPlayer';
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"
import { Root, Text, Container } from "@react-three/uikit";



export default function ParsaLevel12({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);
  const autoPlaySoundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    // Set notification
    setNotification("Washed Coal is sent to silo via conveyor belt \n Coal received either directly from the washery or from stacking yard \n Please read the card carefully");

    // Autoplay the new positional audio when component mounts
    if (autoPlaySoundRef.current) {
      autoPlaySoundRef.current.play();
    }

    // Cleanup on unmount
    return () => {
      if (autoPlaySoundRef.current) {
        autoPlaySoundRef.current.stop();
      }
    };
  }, [setNotification]);

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  };

  return (
    <>
      <Model key="Boundry" scale={2} position={[5, 0, -5]} rotation={[0, 0, 0]} url="/assets/red-boundry.glb" />

      {/* <VideoPlayer scale={[0.2, 0.2, 0.2]} src="/assets/Vibratingfeeder-video.mp4" position={[0, 3, -3]} rotation={[0, 0, 0]}></VideoPlayer> */}
      <Model key="washery-2" scale={2} position={[-11, -3.1, -2]} rotation={[0, Math.PI, 0]} url="/assets/washery-process-3.glb" />
      <Model key="coal-sliding-1" scale={0.5} position={[-1, 1.8, -9]} rotation={[0, Math.PI, Math.PI / 11]} url="/assets/Coal_sliding.glb" />
      {/* <Model key="water" scale={0.05} position={[-1, 1.5, -9.2]} rotation={[0, Math.PI / 2, 0]} url="/assets/water-animation.glb" /> */}

      <Environment
        files="assets/parsa-security-env.hdr"
        background
        ground={{
          height: 20,
          radius: 300,
          scale: 350
        }}
      />
      <group position={[0, 1, -3]} rotation={[0, 0, 0]}>
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
                Washing
              </Text>
              <Text fontSize={12} fontWeight="bold">
                The finished product is now sent to either the stockyard or the silo for transportation
              </Text>
              <Text fontSize={12} fontWeight="medium">
                The "spent water" is collected and further processed to obtain sediments
              </Text>
              <Text fontSize={12} fontWeight="medium">
                The sediments that are collected, are used as an alternate power source in the facility.
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/parsa-level-12-updated.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <PositionalAudio
        ref={autoPlaySoundRef}
        url="/assets/water-sound.mp3"
        distance={1}
        loop={false}
        autoplay={false}
        onEnded={() => autoPlaySoundRef.current?.stop()}
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
  );
}
