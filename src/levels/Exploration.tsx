import { LevelProps } from '../interfaces';
import { useEffect } from "react";
import { Container, Root, Text } from "@react-three/uikit"

import Model from "../Model";
import { Environment } from "@react-three/drei"
import { CoalPile } from './CoalPile';
import { ParsaGround } from './ParsaGround';


export default function Exploration({ setNotification }: LevelProps) {

  useEffect(() => {
    setNotification("Overburden management is a critical operation \n Surface miner to be  added");
  }, [setNotification]);

  return (
    <>
      <ParsaGround key="parsaGround" scale={0.5} position={[4, -4.83, 85]} rotation={[0, -Math.PI / 2, 0]} />
      <Model scale={1} position={[-6, 0, -2]} rotation={[0, Math.PI / 2, 0]} url="/assets/Wheel-loader-comp1.glb"></Model>
      <Model scale={1} position={[8, 0, -2]} rotation={[0, -Math.PI / 2, 0]} url="/assets/Wheel-loader-comp1.glb"></Model>
      <Model scale={1} position={[4, 0.15, 4]} rotation={[0, -Math.PI /2 , 0]} url="/assets/wheel-loader-animated.glb"></Model>

      <CoalPile key="CoalPile1" scale={1} position={[1.8, -8.5, -6]} rotation={[0, 0, 0]} />
      <CoalPile key="CoalPile2" scale={1} position={[-14, -8.5, -38]} rotation={[0, 0, 0]} />
      <CoalPile key="CoalPile3" scale={1} position={[15, -8.5, -15]} rotation={[0, 0, 0]} />
      <Model key="excavator" scale={1.5} position={[25, 0, -18]} rotation={[0, -Math.PI / 3, 0]} url="/assets/Excavator.glb " />
      <Model key="dump-truck" scale={0.6} position={[-25, 0, -30]} rotation={[0, -Math.PI / 3, 0]} url="/assets/Dump-truck.glb " />
      <Environment
        files="/assets/parsa-env.hdr"
        background
        ground={{
          height: 30,
          radius: 100,
          scale: 230
        }}
      />
      <group position={[0, 3.8, 0]} rotation={[0, 0, 0]}>
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
                Please read carefully
              </Text>
              <Text fontSize={12} fontWeight="bold">
                Extraction
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * The surface miner retrieves ore with its "Drilling teeth "
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * HEMM ( Heavy Earth Moving Machinary is used to move the raw coal )
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * This completes the open pit mine operation, Click next to visit washery
              </Text>
              <Text fontSize={10} fontWeight="medium">
                * Piles are loaded onto dump truck using excavator
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
    </>
  );
}
