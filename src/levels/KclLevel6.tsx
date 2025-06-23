import { LevelProps } from '../interfaces';
import { Suspense, useEffect, useRef } from "react";
import { Container, Root, Text } from "@react-three/uikit"
import { Button } from "../components/apfel/button"


import Model from "../Model";
import { Environment } from "@react-three/drei"
import VideoPlayer from '../VideoPlayer';
import * as THREE from "three";
import { Volume2 } from "@react-three/uikit-lucide"
import { PositionalAudio } from "@react-three/drei"


export default function KclLevel6({ setNotification }: LevelProps) {
    const soundRef = useRef<THREE.PositionalAudio>(null);

    useEffect(() => {
        setNotification("The Robotic arm picks up the copper sheets from the conveyor belt and stacks it");
    }, [setNotification]);


    const handleAudio = () => {
        if (soundRef.current) {
            soundRef.current.play();
        }
    }

    return (
        <>
            <Suspense fallback={null}>
                <Model key="Kcl-refinery-2" scale={0.1} position={[8, 0, -8]} rotation={[0, 0, 0]} url="/assets/robotic-arm-scene-shed.glb" />
                <Model key="Kcl-copper-sheets" scale={0.2} position={[8.5, 0.2, 5.5]} rotation={[0, 0, 0]} url="/assets/copper_sheets_stack.glb" />
                <Model key="Kcl-copper-sheets-1" scale={0.2} position={[10, 0.2, -4]} rotation={[0, 0, 0]} url="/assets/copper-sheets-1.glb" />
                <Model key="Kcl-copper-sheets-2" scale={0.2} position={[12, 0.2, -4]} rotation={[0, 0, 0]} url="/assets/copper-sheets-2.glb" />
                <Model key="Kcl-copper-sheets-3" scale={0.2} position={[14, 0.2, -4]} rotation={[0, 0, 0]} url="/assets/copper-sheets-3.glb" />
                <Model key="Robotic-arm-animation" scale={0.3} position={[-2.5, 1.5, -7.8]} rotation={[0, -Math.PI / 4, 0]} url="/assets/robotic-arm-compressed.glb" />
                <Model key="Robotic-arm-animation-1" scale={0.3} position={[1, 1.5, -13.8]} rotation={[0, -Math.PI / 4, 0]} url="/assets/robotic-arm-compressed-1.glb" />
                <Model key="forklift" scale={5} position={[15, 0.2, -6]} rotation={[0, -Math.PI/2, 0]} url="/assets/forklift.glb" />
                <Model key="props" scale={1.5} position={[15, 0.2, -10]} rotation={[0, 0, 0]} url="/assets/kcl-props-robotic-arm.glb" />
                <Model key="truck" scale={0.8} position={[15, 0.65, 5]} rotation={[0, Math.PI/1.5, 0]} url="/assets/mazda-truck.glb" />



            </Suspense>
            <VideoPlayer scale={[0.5, 0.5, 0.5]} src="/assets/robotic-arm-compressed.mp4" position={[-2, 3.8, -16]} rotation={[0, 0, 0]}></VideoPlayer>

            <Environment
                files="/assets/kcl-env-1.hdr"
                background
                ground={{
                    height: 30,
                    radius: 150,
                    scale: 180
                }}
            />

            <group position={[0, 0.9, -2]} rotation={[0, 0, 0]}>
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
                                The robotic arm picks up the copper sheets from the conveyor belt and makes stacks
                            </Text>
                            <Text fontSize={12} fontWeight="bold">
                                then a Forklift vehicle picks up these stacks of copper sheets
                            </Text>
                            <Text fontSize={12} fontWeight="bold">
                                and places it in the designated area.
                            </Text>
                            <Text fontSize={12} fontWeight="bold">
                                The team prepares it for dispatch
                            </Text>
                            <Text fontSize={12} fontWeight="bold">
                                You can see the stacks arranged on your right
                            </Text>
                            <Text fontSize={12} fontWeight="bold">
                                These are transported to CCR or either RR Kabel
                            </Text>
                        </Container>
                    </Container>
                </Root>
            <group position={[8, 0.9, 4]} rotation={[0, -Math.PI/2, 0]}>
                <Root>
                        <Container padding={10}
                            borderWidth={2}
                            borderColor="white"
                            borderRadius={8}
                            backgroundColor="lightgrey">
                        <Text fontSize={12} fontWeight="bold">
                            The sheets are transported to RR Kabel and others
                        </Text>
                    </Container>
                </Root>
            </group>
                <group position={[10, 1.2, -6]} rotation={[0, -Math.PI / 4, 0]}>
                    <Root>
                        <Container padding={10}
                            borderWidth={2}
                            borderColor="white"
                            borderRadius={8}
                            backgroundColor="lightgrey">
                            <Text fontSize={12} fontWeight="bold">
                            Copper cathodes are sent to CCR from here 
                            </Text>
                        </Container>
                    </Root>
                </group>

            </group>
            <group position={[0, 1.8, -2]}>
                <Root>
                    <Container>
                        <Button variant="icon" padding={4} onClick={handleAudio}>
                            <Volume2 width={75} height={75} color={"white"} />
                        </Button>
                    </Container>
                </Root>
            </group>
            <PositionalAudio
                ref={soundRef}
                url="/assets/kcl-robotic-arm-ops.mp3"
                distance={2}
                loop={false}
                autoplay={false}
                onEnded={() => soundRef.current?.stop()}
            />
        </>
    );
}
