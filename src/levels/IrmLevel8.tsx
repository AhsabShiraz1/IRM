import { Environment } from "@react-three/drei"
import { LevelProps } from '../interfaces'
import { Root, Text, Container } from "@react-three/uikit";
// import Model from '../Model'
import { CoalPile } from './CoalPile';
import { Suspense, useEffect, useRef } from "react"
import { PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"
import Model from "../Model";


export default function IrmLevel8({ setNotification }: LevelProps) {
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
                <Model scale={0.5} position={[4, -4.8, 85]} rotation={[0, -Math.PI / 2, 0]} url="/assets/exploration-ground-v1.glb"></Model>
                <Model scale={1.5} position={[-20, -1, -88]} rotation={[0, -Math.PI / 2, 0]} url="/assets/tls-stackyad.glb"></Model>
                <Model scale={1.5} position={[-40, -1, -88]} rotation={[0, -Math.PI / 2, 0]} url="/assets/tls-stackyad-1.glb"></Model>
                <Model scale={1.5} position={[40, 0, -98]} rotation={[0, 0, 0]} url="/assets/Silo-tracks.glb" />

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
            <CoalPile key="CoalPile1" scale={4} position={[1.8, -34, -88]} rotation={[0, 0, 0]} />
            <CoalPile key="CoalPile2" scale={4} position={[-12, -34, -88]} rotation={[0, 0, 0]} />
            <CoalPile key="CoalPile3" scale={4} position={[15, -34, -88]} rotation={[0, 0, 0]} />
            <CoalPile key="CoalPile4" scale={4} position={[82.8, -34, -88]} rotation={[0, Math.PI , 0]} />
            <CoalPile key="CoalPile5" scale={4} position={[82.8, -34, -58]} rotation={[0, Math.PI, 0]} />
            <CoalPile key="CoalPile6" scale={4} position={[82.8, -34, -48]} rotation={[0, Math.PI, 0]} />

            <group position={[0, 1.5, -4]} rotation={[0, 0, 0]}>
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
                                You are at the stackyard
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                After processing at the substation, the coal is brought here.
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                The coal berths are organized based on the vendors' requirements and maintained for transporting coal
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                Based on these requirements, the coal is transported either via the TLS (Truck Loading Station) on the left or the WLS (Wagon Loading Station) on the right
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                This marks the end of IRM module 
                            </Text>
                        </Container>
                    </Container>
                </Root>
            </group>
            <PositionalAudio
                ref={soundRef}
                url="/assets/stackyard-step-irm.mp3"
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
