import { LevelProps } from '../interfaces';
import { Suspense, useEffect, useRef } from "react";
import { Container, Root, Text } from "@react-three/uikit";
import { Environment, PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import VideoPlayer from "../VideoPlayer";

import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide";

import Model from "../Model";

export default function Silo({ setNotification }: LevelProps) {
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
      <Suspense fallback={null}>
        <Model key="parsa-ground-silo" scale={0.5} position={[4, -4.83, 85]} rotation={[0, -Math.PI / 2, 0]} url="/assets/exploration-ground-v1.glb" />
        <Model scale={1} position={[5, 0, -18]} rotation={[0, 0, 0]} url="/assets/Silo-tracks.glb" />
        <Model scale={1} position={[-16, -1.5, -17.3]} rotation={[0, Math.PI / 2, 0]} url="/assets/Train_engine.glb" />
        <Model scale={1} position={[25, 0.6, -12.5]} rotation={[0, 0, 0]} url="/assets/Train_boogies.glb" />
      <Model key="washery-ground" scale={3} position={[0, -0.5, -5]} rotation={[0,  0 , 0]} url="/assets/washery-ground-final.glb" />

      </Suspense>
      <VideoPlayer
        scale={[0.2, 0.2, 0.2]}
        src="/assets/coal-loading-silo.mp4"
        position={[0, 0.1, -2]}
        rotation={[-Math.PI/2, 0, 0]}
      />
      <Environment
        files="/assets/parsa-env-compressed.hdr"
        background
        ground={{
          height: 30,
          radius: 100,
          scale: 230
        }}
      />
      <group position={[0, 4, -8]} rotation={[0, 0, 0]}>
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
                Key Facts
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * ATMSPL length : 75, 562 Km Starting from surajpur road railway station
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * The end destination is RVUNL Power Plants
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Total track length : 102 Km
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * No of crossing stations : 6 Nos ( Including PSRS Station )
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * No of Major wateryway bridges : 10 Nos
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Largest waterway Bridge : Jhink Nalla Bridge ( 7 x 24.4 m Span , 39m Height )
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * No of minor waterway bridges: 69 Nos
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * No of RUB's : 34 Nos
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * No of ROB's : 20 Nos
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Animal Overpass : 4 Nos
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * No of manned level crossings : 9 Nos
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/silo-updated-track.mp3"
        distance={1}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <PositionalAudio
        ref={autoPlaySoundRef}
        url="/assets/train-sound.mp3" 
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
