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
import VideoPlayer from "../VideoPlayer";

export default function BargeOperations2({ setNotification }: LevelProps) {
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
            <Suspense fallback={null}>
                <Model url="/assets/bunkering-port.glb" position={[80, -1, -246.5]} scale={5} rotation={[0, 0, 0]} />
                <Model url="/assets/barge-ship.glb" position={[0, -7.5, 0]} scale={1.1} rotation={[0, Math.PI / 2, 0]} />
                <Model url="/assets/barge-pipe.glb" position={[-30, 1.5, -15]} scale={12} rotation={[0, 0, 0]} />

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

            <VideoPlayer scale={[0.5, 0.5, 0.5]} src="/assets/barge-video.mp4" position={[-8, 1.5, -6]} rotation={[0, Math.PI / 4, 0]}></VideoPlayer>

            <group position={[0, 2.5, -4]} rotation={[0, 0, 0]}>
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
                                SOP for fuel pipe connection
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                * Once the barge is parked next to the vessel
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                * The refuelling pipe is taken out and the workers on site use a pulley system to manage it
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                * and bring it to the right spot for connecting it to the vessel
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                * The bunker grade fuel is then pumped to the vessel
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                * This  marks the end of bunkering module
                            </Text>
                        </Container>
                    </Container>
                </Root>
            </group>
            <PositionalAudio
                ref={soundRef}
                url="/assets/barge-connection.mp3"
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
