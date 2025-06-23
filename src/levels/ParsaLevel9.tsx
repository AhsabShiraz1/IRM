import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import { Container, Root, Text } from "@react-three/uikit"
import { Environment } from "@react-three/drei"


import Model from "../Model";
// import {  Environment } from "@react-three/drei"
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"


export default function ParsaLevel9({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Mined ore is brought to washery for processing \n Coal is moved to the washery via the in-pit conveyor system");
  }, [setNotification]);

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>      
      <Model key="washery" scale={1} position={[0, -0.5, -50]} rotation={[0,  -Math.PI/2 , 0]} url="/assets/parsaWashery.glb" />
      <Model key="washery-ground" scale={2.5} position={[0, -0.8, -15]} rotation={[0,  -Math.PI/2 , 0]} url="/assets/washery-ground-final.glb" />

      <Environment 
        files="/assets/parsa-security-env.hdr"
        background 
        ground={{
          height: 10,     
          radius: 60,    
          scale: 220      
        }} 
      />
       <group position={[0, 1, -5]} rotation={[0, 0 , 0]}>
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
                Please read carefully
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Mined ore is brought to washery for processing
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * coal is moved to washery via the in-pit conveyor system
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Proceed inside washery by clicking "Next" 
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/parsa-level-9.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 0.6, -3]}>
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
