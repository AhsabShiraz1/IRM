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
                <Model url="/assets/irm-scene-first.glb" position={[193, -1, -60]} scale={5} rotation={[0, 0 , 0]} />
                <Model url="/assets/conveyor-compressed.glb" position={[-3, 0, 0]} scale={0.8} rotation={[0, 0 , 0]} />

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

            <group position={[0, 2.5, -2]} rotation={[0, 0, 0]}>
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
                                You are standing below the conveyor belt
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                After the coal is dropped on the conveyor belt
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                It is then transported to the substations for further processing
                            </Text>
                        </Container>
                    </Container>
                </Root>
            </group>
            <PositionalAudio
                ref={soundRef}
                url="/assets/irm-conveyor-step.mp3"
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
    )
}
