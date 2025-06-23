import { LevelProps } from '../interfaces';
import { useEffect, useState, Suspense, useRef } from "react";
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import Model from "../Model";
import { Environment } from "@react-three/drei";
import VideoPlayer from '../VideoPlayer';
import { Root, Container, Text } from "@react-three/uikit";
import { Button } from "../components/apfel/button";
import { RefreshCcw } from "@react-three/uikit-lucide";

export default function ParsaLevel7({ setCurrentLevel, setNotification }: LevelProps) {
  const [componentKey, setComponentKey] = useState(0);
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Please make sure you have worn the safety gear and stay 100m away as advised \n Click on the blast button to manually initiate blast ");

    // Play the audio when the component loads
    if (soundRef.current) {
      soundRef.current.play();
    }
  }, [setNotification, componentKey]);

  const handleLevelChange = () => {
    setCurrentLevel(14);
    setComponentKey(prevKey => prevKey + 1); // Update key to reload the component
  };

  return (
    <>   
      <VideoPlayer
        key={componentKey + "-video"}
        scale={[0.5, 0.5, 0.5]}
        src="/assets/parsa-blasting.mp4"
        position={[-8, 2.5, 2]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Suspense fallback={null}>
        <Model 
          key={componentKey + "-ground"}
          scale={0.5} 
          position={[4, -4.83, 85]} 
          rotation={[0, -Math.PI / 2 , 0]} 
          url="/assets/exploration-ground-v1.glb" 
        />
        <Model 
          key={componentKey + "-blast-animation"}
          scale={[5, 3, 3]} 
          position={[2, 0, -10]} 
          rotation={[0, Math.PI / 6 , 0]} 
          url="/assets/blast-compressed.glb" 
        />
        <PositionalAudio
          key={componentKey + "-audio"}
          ref={soundRef}
          url="/assets/blast.mp3"
          distance={5}
          loop={false}
          autoplay
          onEnded={() => soundRef.current?.stop()}
        />
      </Suspense>
      <Environment 
        key={componentKey + "-environment"}
        files="/assets/parsa-env-compressed.hdr"
        background 
        ground={{
          height: 30,     
          radius: 100,    
          scale: 230      
        }} 
      />
      <group position={[0, 2.25, -2]}>
        <Root>
          <Container>
            <Button variant="icon" onClick={handleLevelChange}>
              <RefreshCcw width={64} height={64} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
      <group position={[0, 3.5, -4]} rotation={[0, 0, 0]}>
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
                Click the button to initiate the blast and look to your left to see the blast video
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
    </>
  );
}
