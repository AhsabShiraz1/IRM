import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
// import { VrTheater } from './VrTheatre';
import VideoPlayer from '../VideoPlayer';
import { Container, Root, Text } from "@react-three/uikit"
import Model from '../Model';
import { PositionalAudio } from "@react-three/drei"
import * as THREE from "three";
import { Button } from "../components/apfel/button"
import { Volume2 } from "@react-three/uikit-lucide"

import { Image } from "@react-three/drei"
import { DoubleSide } from "three"







export default function CsrLevel({ setNotification }: LevelProps) {

  const soundRef = useRef<THREE.PositionalAudio>(null);

  useEffect(() => {
    setNotification("Please read through the messages")
  }, [])

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  useEffect(() => {
    setNotification("CORPORATE SOCIAL RESPONSIBILITY (CSR) \n Click on videos to play them");
  }, [setNotification]);

  return (
    <>
      <VideoPlayer scale={[0.5, 0.5, 0.5]} src="/assets/CSR-final.mp4" position={[0, 3, -8]} rotation={[0, 0, 0]}></VideoPlayer>
      <Image url="/assets/skill-dev.png" position={[5, 3, -8]} toneMapped={false} scale={[4.25, 2.8]} rotation={[0, 0, 0]} castShadow receiveShadow side={DoubleSide} />

      {/* <VideoPlayer scale={[0.5, 0.5, 0.5]} src="/assets/Hospital-csr.mp4" position={[0, 3, 8]} rotation={[0, Math.PI, 0]}></VideoPlayer>
      <Image url="/assets/hospital-csr.png" position={[-5, 3, 8]} toneMapped={false} scale={[4.25, 2.8]} rotation={[0, Math.PI, 0]} castShadow receiveShadow side={DoubleSide} />


      <VideoPlayer scale={[0.5, 0.5, 0.5]} src="/assets/neonatal-csr.mp4" position={[8, 3, 0]} rotation={[0, -Math.PI / 2, 0]}></VideoPlayer>
      <Image url="/assets/neonatal.png" position={[8, 3, 5]} toneMapped={false} scale={[4.25, 2.8]} rotation={[0, -Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />

      <Image url="/assets/csr-image-vm.png" position={[-8, 3, 5]} toneMapped={false} scale={[4.25, 2.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />

      <VideoPlayer scale={[0.5, 0.5, 0.5]} src="/assets/vidya-mandir.mp4" position={[-8, 3, 0]} rotation={[0, Math.PI / 2, 0]}></VideoPlayer>
      <Image url="/assets/vidya-mandir.png" position={[-8, 3, -5]} toneMapped={false} scale={[4.25, 2.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} /> */}

      <group position={[0, 0.5, -3]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={handleAudio}>
              <Volume2 width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
      <group position={[0, 4.8, -8]} rotation={[0, 0, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="flex-start">
              <Text fontSize={15} fontWeight="bold">
                CSR Activities
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      {/* <group position={[0, 4.8, 8]} rotation={[0, Math.PI, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="flex-start">
              <Text fontSize={15} fontWeight="bold">
                Hospital
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <group position={[8, 4.8, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="flex-start">
              <Text fontSize={15} fontWeight="bold">
                NeoNatal Care
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <group position={[-8, 4.8, 0]} rotation={[0, Math.PI / 2, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="flex-start">
              <Text fontSize={15} fontWeight="bold">
                Vidya Mandir
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <group position={[0, 0.8, -4]} rotation={[0, 0, 0]}>
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
                Click on the videos to play, Please do not play audio voiceover while watching the videos
              </Text>
              <Text fontSize={12} fontWeight="medium">
                PEKB is renowned for its initiatives towards improving and enabling the local communities. Amongst the many initiatives carried out, the following are the most remarkable ones:
              </Text>
              <Text fontSize={12} fontWeight="medium">
                The Skill development center for upskilling the locals and getting them job ready for the current job market.
              </Text>
              <Text fontSize={12} fontWeight="medium">
                The Vidya Mandir contains the best of amenities to enrich learning striking a balance between studies and extracurricular activities
              </Text>
              <Text fontSize={12} fontWeight="medium">
                The local hospital with state of the art facilities for treating a range of medical conditions. A testing and lab facility is also being opened soon
              </Text>
              <Text fontSize={12} fontWeight="medium">
                Neonatal care is one of the most critical initiatives carried out with trained professionals raising awareness on baby care, providing care packages and organising community welfare engagements.
              </Text>
              <Text fontSize={12} fontWeight="medium">
                Additionally, green belt, in-house nurseries, and transplantation are also carried out."
              </Text>
            </Container>
          </Container>
        </Root>
      </group> */}
      <Model
        scale={1.1}
        position={[0, 5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        url="/assets/intro-gallery-1.glb"
      />
      <PositionalAudio
        ref={soundRef}
        url="/assets/csr-audio.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
    </>
  );
}
