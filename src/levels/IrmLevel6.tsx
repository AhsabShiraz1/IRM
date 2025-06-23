import { Environment } from "@react-three/drei"
import { LevelProps } from '../interfaces'
import { CoalPile } from './CoalPile';
import { Root, Text, Container } from "@react-three/uikit";
// import Model from '../Model'
import { Suspense, useEffect, useRef } from "react"
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"
import Model from "../Model";


export default function IrmLevel6({ setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Please wear the PPE Kit before the tour of the facility and read the instructions carefully")
  }, [])

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  return (
    <>
      <Suspense fallback={null}>
        {/* <Model url="/assets/irm-scene2-comp.glb" position={[190, -6.5, 150]} scale={5} rotation={[0, -Math.PI/2 , 0]} /> */}
        <Model url="/assets/crane-animated-v1.glb" position={[32, -6, -15]} scale={1} rotation={[0, 0, 0]} />
        <Model url="/assets/bulk-carrier-inside.glb" position={[0, 10, -12]} scale={0.2} rotation={[0, 0, 0]} />
        <Model url="/assets/coalFall.glb" position={[28, 20, -11]} scale={0.8} rotation={[0, 0, 0]} />
        {/* <Model key="excavator" scale={1} position={[7, -6, -12]} rotation={[0, -Math.PI, 0]} url="/assets/Excavator.glb " /> */}

        {/* <Model url="/assets/excavator-1.glb" position={[0, -5, -3]} scale={10} rotation={[0, 0, 0]} /> */}


      </Suspense>
      <Environment
        files="/assets/port-sky-final.hdr"
        background
        ground={{
          height: 50,
          radius: 480,
          scale: 650
        }}
      />
      <CoalPile key="CoalPile1" scale={1.1} position={[-5, -9.8, -10.5]} rotation={[0, 0, 0]} />
      <CoalPile key="CoalPile2" scale={1.1} position={[3.8, -9.8, -10.5]} rotation={[0, 0, 0]} />
      <CoalPile key="CoalPile3" scale={1.08} position={[-5, -9.8, -4]} rotation={[0, 0, 0]} />
      <CoalPile key="CoalPile4" scale={1.08} position={[3.8, -10.5, -4]} rotation={[0, 0, 0]} />

      {/* <VideoPlayer scale={[0.6, 0.6, 0.6]} src="/assets/crane-unloading-final.mp4" position={[-8, 2.5, -6]} rotation={[0, Math.PI / 4, 0]}></VideoPlayer> */}

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
                You are on the vessel
              </Text>
              <Text fontSize={10} fontWeight="medium">
                The excavator is placed inside the vessel to create heaps
              </Text>
              <Text fontSize={10} fontWeight="medium">
                The crane picks up the coal from the vessel and drops it on the conveyor belt
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/irm-crane-step.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 0.8, -3]}>
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
