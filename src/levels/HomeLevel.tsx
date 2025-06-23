import Box from '../Box'
import { Card } from '../components/apfel/card'
import { LevelProps } from '../interfaces'
import { useEffect, useRef } from 'react'
import * as THREE from "three";
// import Model from '../Model'
import { Environment } from "@react-three/drei"
import { Root, Text, Container } from "@react-three/uikit"
import { Button } from '../components/apfel/button';
import { Download, Volume2 } from "@react-three/uikit-lucide"
import { PositionalAudio } from "@react-three/drei";




export default function HomeLevel({ setCurrentLevel, setNotification }: LevelProps) {
  const soundRef = useRef<THREE.PositionalAudio>(null);
  useEffect(() => {
    setNotification("Welcome to Adani Immersive training,\n Please click on any cube with you're controller to access the module")
  }, [])

  const boxData = [
    // { position: [-5.3, 1.8, -1], level: 1, label: 'Precheck', opacity: 1 },
    // { position: [-1, 1.8, -4], level: 6, label: 'P.E.K.B', opacity: 1 },
    // { position: [3.5, 1.8, -0.5], level: 25, label: 'KCL', opacity: 1 },
    { position: [-1, 1.8, -4], level: 1, label: 'IRM', opacity: 1 },
    // { position: [-2.5, 1.8, -10], level: 44, label: 'Bunkering', opacity: 1 },
    // { position: [-6.8, 1.8, -1], level: 53, label: 'ACH', opacity: 1 },

  ];

  const handleAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  const downloadLocalStorageAsCSV = () => {
    const localStorageData = { ...localStorage };
    const csvRows: string[] = [];

    // Extract headers
    const headers = Object.keys(localStorageData);
    csvRows.push(headers.join(','));

    // Extract values
    const values = headers.map(key => JSON.stringify(localStorageData[key] || '').replace(/,/g, ''));
    csvRows.push(values.join(','));

    // Create CSV Blob and trigger download
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'Adani-results.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* <Model url="/assets/home-cpd-model.glb" position={[-6, -0.5, -4.7]} scale={2} /> */}
      {boxData.map((box, index) => (
        <group key={index}>
          <Box position={[box.position[0], box.position[1], box.position[2]]} setCurrentLevel={setCurrentLevel} level={box.level} opacity={box.opacity} />
          <group position={[box.position[0], box.position[1] + 0.6, box.position[2]]}>
            <Root depthTest={false} sizeX={1.5} sizeY={0.5} flexDirection="row" justifyContent="center" alignItems="center">
              <Card paddingX={14} paddingY={2} borderWidth={2}>
                <Text fontWeight="bold" fontSize={25} letterSpacing={0}>
                  {box.label}
                </Text>
              </Card>
            </Root>
          </group>
        </group>
      ))}
      <Environment
        files="/assets/reception-final.hdr"
        background
        ground={{
          height: 5,
          radius: 100,
          scale: 23
        }}
      />
      <group position={[0, 4.5, -3]} rotation={[0, 0, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="center">
              <Text fontSize={14} fontWeight="bold">
                Welcome to Adani Immersive Training module
              </Text>
              <Text fontSize={12} fontWeight="medium">
                Please click on the button below this card to enter VR mode if you are on browser
              </Text>
              <Text fontSize={12} fontWeight="medium">
                Feel free to move around and click on any of the cubes with the controller to access the module
              </Text>
              <Text fontSize={12} fontWeight="medium">
                Click on the audio button to hear the voice instructions
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/home-voice-over.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0.4, 3, -3]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={handleAudio}>
              <Volume2 width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
      <group position={[4, 1, -3]} rotation={[0, -Math.PI/2, 0]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={downloadLocalStorageAsCSV}>
              <Download width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
    </>
  )

}