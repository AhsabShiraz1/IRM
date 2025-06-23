import { LevelProps } from '../interfaces';
import { useEffect,useRef } from "react";
import Model from "../Model";
import {  Environment } from "@react-three/drei"
import VideoPlayer from '../VideoPlayer';
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"
import { Root, Text, Container } from "@react-three/uikit";



export default function ParsaLevel11({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Ore is processed in the vibrating feeder to remove dirt and impurities \n Please do not cross the red boundry");
  }, [setNotification]);

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>    
      <Model key="Boundry" scale={2} position={[5, 0, -5]} rotation={[0, 0 , 0]} url="/assets/red-boundry.glb" />
      
      <VideoPlayer scale={[0.2, 0.2, 0.2]} src="/assets/Vibratingfeeder-video.mp4" position={[0, 3, -3]} rotation={[0, 0, 0]}></VideoPlayer>
      <Model key="washery-2" scale={2} position={[-6, -12.5, -16]} rotation={[0,  Math.PI , 0]} url="/assets/washery-level-2.glb" />
      <Environment 
        files="assets/parsa-security-env.hdr"
        background 
        ground={{
          height:20,     
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
               Sorting and Cleaning
              </Text>
              <Text fontSize={12} fontWeight="bold">
               Ore is processed in the vibrating feeder to remove dirt and impurities
              </Text>
              <Text fontSize={12} fontWeight="medium">
               This machine breaks the coal into smaller pieces and removes dirt and mud from coal
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/parsa-level-11-updated.mp3"
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
    </>
  );
}
