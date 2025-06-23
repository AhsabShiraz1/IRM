import { Environment } from "@react-three/drei"
import { LevelProps } from '../interfaces'
import { Root, Text, Container } from "@react-three/uikit";
// import Model from '../Model'
import { Suspense, useEffect, useRef } from "react"
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"
import Model from "../Model";

export default function BargeOperations1({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);
  const autoPlaySoundRef = useRef<THREE.PositionalAudio>(null);


  useEffect(() => {
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
        <Model url="/assets/bunkering-port.glb" position={[-195, -1, 150]} scale={5} rotation={[0, Math.PI , 0]} />
        <Model url="/assets/barge-animation-ship.glb" position={[180, 0, -82.5]} scale={1.1} rotation={[0, Math.PI/2, 0]} />
      </Suspense>
      <Environment
        files="/assets/port-sky-final.hdr"
        background
        ground={{
          height: 50,
          radius: 480,
          scale: 550
        }}
      />
      <group position={[0, 2.5, -4]} rotation={[0, 0, 0]}>
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
                You are at the jetty area
              </Text>
              <Text fontSize={10} fontWeight="medium">
                You can see barge arriving on the right
              </Text>
              <Text fontSize={10} fontWeight="medium">
                Barge is parked right next to the vessel and fuel pipes are connect 
              </Text>
              <Text fontSize={10} fontWeight="medium">
                Click Next to proceed
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/barge-ops-1.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
        <PositionalAudio
        ref={autoPlaySoundRef}
        url="/assets/boat-horn.mp3" 
        distance={1}
        loop={false}
        autoplay={false}
        onEnded={() => autoPlaySoundRef.current?.stop()}
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
  )
}
