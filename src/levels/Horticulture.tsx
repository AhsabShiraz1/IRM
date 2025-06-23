import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import VideoPlayer from '../VideoPlayer';
import Model from '../Model';
import * as THREE from "three";

import { Image } from "@react-three/drei"
import { DoubleSide } from "three"
import { Volume2 } from "@react-three/uikit-lucide"

import { Button } from "../components/apfel/button"
import { PositionalAudio } from "@react-three/drei"



import { Root, Text, Container } from "@react-three/uikit";




export default function Horticulture({ setNotification }: LevelProps) {

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
        setNotification("Enviroment initiatives \n We will now see few initiaties carried out by the Adani group for land \n Click on videos to play them");
    }, [setNotification]);

    return (
        <>
            <VideoPlayer scale={[0.5, 0.5, 0.5]} src="/assets/Horticulture-final.mp4" position={[0, 3, -8]} rotation={[0, 0, 0]}></VideoPlayer>
            <Image url="/assets/Horticulture-image-1.png" position={[-6, 3, 0]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
            <group position={[0, 0.5, -3]}>
                <Root>
                    <Container>
                        <Button variant="icon" padding={4} onClick={handleAudio}>
                            <Volume2 width={75} height={75} color={"white"} />
                        </Button>
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
                                We will now showcase a few initiatives carried out by the Adani group when it comes to conservation and sustainable practices
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                At PEKB, there are a number of initiatives that are being carried out
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                The "green miner" initiative is a marquee sustainable practice as highlighted in the videos.
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                Reclamation and plantation are key drivers to sustainable mining.
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                Over 380 hectares in total biological Reclamation has been successfully carried out with over 11.5L plantations.
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                Additionally, green belt, in-house nurseries, and transplantation are also carried out."
                            </Text>
                        </Container>
                    </Container>
                </Root>
            </group>
            <Model
                scale={1.1}
                position={[0, 5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
                url="/assets/intro-gallery-2.glb"
            />
            <PositionalAudio
                ref={soundRef}
                url="/assets/horticulture-audio.mp3"
                distance={2}
                loop={false}
                autoplay={false}
                onEnded={() => soundRef.current?.stop()}
            />
        </>
    );
}
