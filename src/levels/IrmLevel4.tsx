import { Container, Root, Text } from "@react-three/uikit"
import { LevelProps } from '../interfaces'
import { useEffect, useRef } from "react"
import Model from "../Model"
import { PositionalAudio } from "@react-three/drei";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"
import * as THREE from "three";


export default function IrmLevel4({ setNotification }: LevelProps) {
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
      <Model scale={[0.23, 0.25, 0.25]} position={[0, 0, -5]} rotation={[0, 0, 0]} url="/assets/PPE-box.glb"></Model>
      <Model scale={2} position={[0, 0, 7]} rotation={[0, 0, 0]} url="/assets/locker-room-compressed.glb"></Model>
      <Model scale={0.2} position={[5, 0.9, -3]} rotation={[0, 0, 0]} url="/assets/steel-boots.glb"></Model>
      <Model scale={0.2} position={[2, 0.5, -3]} rotation={[0, 0, 0]} url="/assets/safety-helmet.glb"></Model>
      <Model scale={0.2} position={[-1.5, 0.5, -3]} rotation={[0, 0, 0]} url="/assets/gloves.glb"></Model>
      <Model scale={1.5} position={[-4, -0.4, -3]} rotation={[0, 0, 0]} url="/assets/adani-vest.glb"></Model>
      <group position={[-4, 2.2, -3]}>
        <Root>
          <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#000000" >Safety Vest</Text>
        </Root>
      </group>
      <group position={[-1.2, 1, -3]}>
        <Root>
          <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#000000" >Gloves</Text>
        </Root>
      </group>
      <group position={[2, 1.15 , -3]}>
        <Root>
          <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#000000" >Safety Helmet</Text>
        </Root>
      </group> 
      <group position={[5, 1.7, -3]}>
        <Root>
          <Text fontWeight="bold" fontSize={14} letterSpacing={0} color="#000000" >Steel Boots</Text>
        </Root>
      </group>   
       
      <group position={[0, 3.5, -5]} rotation={[0, 0, 0]}>
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
                Instructions
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Ensure you've collected all the equipments 
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Make sure your helmet and shoes fit well, and your safety vest is clean.
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * From here we will be moving to the jetty area
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/irm-ppe.mp3"
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