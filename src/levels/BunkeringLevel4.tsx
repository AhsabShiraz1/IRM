// import { Image } from "@react-three/drei"
import { Root, Text, Container } from "@react-three/uikit"


import { LevelProps } from '../interfaces'
import Model from '../Model'
import { useEffect, useRef } from "react"
import { Environment, PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"


export default function BunkeringLevel4({ setNotification }: LevelProps) {
    const soundRef = useRef<THREE.PositionalAudio>(null);

    useEffect(() => {
        setNotification("Click on the video to play \n Please move around and view the slides and read the instructions on your right carefully")
    }, [])

    const handleAudio = () => {
        if (soundRef.current) {
            soundRef.current.play();
        }
    }

    return (
        <>
            <Model url="/assets/lft-1.glb" position={[0, -10, -125]} scale={[3, 3, 3]} rotation={[0, Math.PI, 0]} />
            <Model url="/assets/lft-platform.glb" position={[0, -8.2, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} />

            <group position={[0, 1, -4]} rotation={[-Math.PI / 4, 0, 0]}>
                <Root>
                    <Container
                        padding={10}
                        borderWidth={2}
                        borderColor="white"
                        borderRadius={8}
                        backgroundColor="lightgrey"
                    >
                        <Container flexDirection="column" alignItems="flex-start">
                            <Text fontSize={12} fontWeight="medium">
                                Please do not cross the railing
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                * At the heart of our operations is the Large Fuel Tank system, which houses over hundreds of tanks.
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                * These specialized enclosures store a variety of materials
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                * T-45 Grade tanks store fuel.
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                * T-18 tanks store monomers.
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                * T-19 to T-40 tanks store specialized chemicals
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                * Click on the next button to proceed
                            </Text>
                        </Container>
                    </Container>
                </Root>
            </group>
            <Environment
                files="/assets/port-sky-final.hdr"
                background
                ground={{
                    height: 10,
                    radius: 280,
                    scale: 250
                }}
            />
            <PositionalAudio
                ref={soundRef}
                url="/assets/irm-lft-1.mp3"
                distance={2}
                loop={false}
                autoplay={false}
                onEnded={() => soundRef.current?.stop()}
            />
            <group position={[0, 0.6, -1.6]}>
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