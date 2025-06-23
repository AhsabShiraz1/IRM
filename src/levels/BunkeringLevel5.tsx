// import { Image } from "@react-three/drei"
import { Root, Text, Container } from "@react-three/uikit"


import { LevelProps } from '../interfaces'
import Model from '../Model'
import { useEffect, useRef } from "react"
import { Environment, PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"


export default function BunkeringLevel5({ setNotification }: LevelProps) {
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
                                * This scene highlights the enclosure tanks where fuel is stored.
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                * Some tanks transfer bunkering fuel directly to vessels at the port.
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                * Other tanks send fuel to refineries or store it for LPG and other petroleum products.
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                * Fuel is kept at precise temperatures to meet various needs.
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                * It is transported via trucks and pipelines to the barge network for seamless distribution.
                            </Text>
                            <Text fontSize={12} fontWeight="medium">
                                * Next we move to bunkering operation via barge
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
                url="/assets/bunkering-final.mp3"
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