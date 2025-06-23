import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import Model from "../Model";
import {  Environment } from "@react-three/drei"
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Root, Text, Container } from "@react-three/uikit";

import { Volume2 } from "@react-three/uikit-lucide"


export default function ParsaLevel10({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Cleaning and segregation of coal before washing \n Please do not cross the red boundry");
  }, [setNotification]);

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>      
      <Model key="Boundry" scale={2} position={[-15, 0, 5]} rotation={[0, 0 , 0]} url="/assets/red-boundry.glb" />
      <Model key="washery-1" scale={1.5} position={[-18, -2.5, -10]} rotation={[0,  0 , 0]} url="/assets/washery-process-1.glb" />
      <Model key="coal-sliding" scale={0.3} position={[0, 1.7, -6]} rotation={[0,  0 , 0]} url="/assets/Coal_sliding.glb" />


      <Environment 
        files="assets/parsa-security-env.hdr"
        background 
        ground={{
          height: 10,     
          radius: 80,    
          scale: 200      
        }} 
      />
       <group position={[0, 3, -4]} rotation={[0, 0, 0]}>
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
                Cleaning and segregation of coal before washing
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/parsa-level-10.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 2, -3]}>
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
