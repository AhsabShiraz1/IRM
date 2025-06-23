import { useEffect, useRef, useState } from 'react'
import './App.css'
import { createXRStore } from "@react-three/xr"
import {  ArrowLeftIcon, ArrowRightIcon, HomeIcon, PlaySquare } from "@react-three/uikit-lucide"
import { Container, Root } from "@react-three/uikit"
import { XR } from "@react-three/xr";

// import { Card } from './components/apfel/card'

import HomeLevel from './levels/HomeLevel';
// import PrecheckLevel from './levels/PrecheckLevel';
import Tone from './Tone'
// import ParsaLevel from './levels/ParsaLevel'
import {  OrbitControls, SoftShadows } from '@react-three/drei'
import PrecheckLevel1 from './levels/PrecheckLevel1'
import PrecheckLevel2 from './levels/PrecheckLevel2'
import PrecheckLevel3 from './levels/PrecheckLevel3'
// import ParsaLevel1 from './levels/ParsaLevel1'
// import ParsaLevel2 from './levels/ParsaLevel2'
// import ParsaLevel3 from './levels/ParsaLevel3'
// import ParsaLevel4 from './levels/ParsaLevel4'
// import ParsaLevel5 from './levels/ParsaLevel5'
// import ParsaLevel6 from './levels/ParsaLevel6'
// import ParsaLevel7 from './levels/ParsaLevel7'
// import ParsaLevel8 from './levels/ParsaLevel8'
// import ParsaLevel9 from './levels/ParsaLevel9'
// import ParsaLevel10 from './levels/ParsaLevel10'
// import ParsaLevel11 from './levels/ParsaLevel11'
// import CsrLevel from './levels/CsrLevel'
// import ParsaLevel12 from './levels/ParsaLevel12'
// import Silo from './levels/Silo'
// import Horticulture from './levels/Horticulture'
// import Township from './levels/Township'
import Instructions from './levels/Instructions'
// import Exploration from './levels/Exploration'
// import ParsaConclusion from './levels/ParsaConclusion'
// import KclLevel1 from './levels/KclLevel1'
// import KclLevel2 from './levels/KclLevel2'
// import KclLevel3 from './levels/KclLevel3'
// import KclLevel4 from './levels/KclLevel4'
// import KclLevel5 from './levels/KclLevel5'
// import KclLevel6 from './levels/KclLevel6'
// import KclConclusion from './levels/KclConclusion'
import IrmLevel1 from './levels/IrmLevel1'
import IrmLevel2 from './levels/IrmLevel2'
import IrmLevel3 from './levels/IrmLevel3'
import IrmLevel4 from './levels/IrmLevel4'
import IrmLevel5 from './levels/IrmLevel5'
import IrmLevel6 from './levels/IrmLevel6'
import { Button } from './components/apfel/button';
import { Card } from './components/apfel/card'
// import KclLevelPpe from './levels/KclLevelPpe'
// import IrmLevel from './levels/IrmLevel'
import IrmLevel7 from './levels/IrmLevel7'
import IrmLevel8 from './levels/IrmLevel8'
import IrmConclusion from './levels/IrmConclusion'
// import Bunkering from './levels/Bunkering'
// import BunkeringLevel1 from './levels/BunkeringLevel1'
// import BunkeringLevel2 from './levels/BunkeringLevel2'
// import BunkeringLevel3 from './levels/BunkeringLevel3'
// import BunkeringLevel4 from './levels/BunkeringLevel4'
// import BunkeringLevel5 from './levels/BunkeringLevel5'
// import BargeOperations1 from './levels/BargeOperations1'
// import BargeOperations2 from './levels/BargeOperations2'
// import BargeConclusion from './levels/BargeConclusion'
// import AchLevel1 from './levels/AchLevel1'
// import AchLevel2 from './levels/AchLevel2'
// import AchLevel3 from './levels/AchLevel3'
// import AchLevel4 from './levels/AchLevel4'
// import AchLevel5 from './levels/AchLevel5'
// import AchLevel6 from './levels/AchLevel6'
// import AchLevel7 from './levels/AchLevel7'
// import AchConclusion from './levels/AchConclusion'
// import PasswordUpdate from './levels/PasswordUpdate'




function XRScene() {

    const store = createXRStore()
    // const uiRef = useRef(null);
    const menuRef = useRef(null);

    // const { player } = useXR()
    // const { session, isPresenting } = useXR();

    const [currentLevel, setCurrentLevel] = useState(0)
    const [ , setNotification] = useState("Welcome to Adani training Center")

    useEffect(() => {
        const currentTimestamp = Date.now();
        const twoMinutes = 60 * 24 * 60 * 60 * 1000; // 4 Days

        // Retrieve all stored timestamps from localStorage
        let timestamps = JSON.parse(localStorage.getItem("timestamps") || "[]");

        // If it's the first time, store the initial timestamp
        if (timestamps.length === 0) {
            timestamps.push(currentTimestamp); // First timestamp when the app is loaded
            localStorage.setItem("timestamps", JSON.stringify(timestamps));
            setCurrentLevel(0); // Initial level when the app is first loaded
        } else {
            // Store the new timestamp on each reload
            timestamps.push(currentTimestamp);
            localStorage.setItem("timestamps", JSON.stringify(timestamps));

            // Get the first timestamp (the very first load timestamp)
            const firstTimestamp = timestamps[0];

            // Calculate the time difference between the first and the latest timestamp
            const timeDifference = currentTimestamp - firstTimestamp;

            // If the time difference is more than 2 minutes, set level to 61
            if (timeDifference > twoMinutes) {
                setCurrentLevel(61);
            } else {
                // Keep the level as 0 if the difference is less than 2 minutes
                setCurrentLevel(0);
            }
        }
    }, []);





    

    // useEffect(() => {
    //     console.log(leftController, " LeftController");
    //     console.log(menuRef.current, "menuRef");
    //     if (leftController && menuRef.current && leftController.xrControllerModel) {
    //         leftController.xrControllerModel.add(menuRef.current)
    //     }
    // }, [leftController]);

    const renderLevel = () => {
        switch (currentLevel) {
            case 0:
                return <HomeLevel setCurrentLevel={setCurrentLevel} setNotification={setNotification} />;
            // case 1:
            //     return <PrecheckLevel setCurrentLevel={setCurrentLevel} setNotification={setNotification} />;
            case 1:
                 return <Instructions key={`instructions-${currentLevel}`} setCurrentLevel={setCurrentLevel} setNotification={setNotification} />;
            case 2:
                return <PrecheckLevel1 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />;
            case 3:
                return <PrecheckLevel2 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />;
            case 4:
                return <PrecheckLevel3 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />;
            // case 5:
            //     return <Exploration setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 7:
            //     return <ParsaLevel setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 8:
            //     return <ParsaLevel1 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 9:
            //     return <ParsaLevel2 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 10:
            //     return <ParsaLevel3 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 11:
            //     return <ParsaLevel4 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 12:
            //     return <ParsaLevel5 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 13:
            //     return <ParsaLevel6 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 14:
            //     return <ParsaLevel7 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 15:
            //     return <ParsaLevel8 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 16:
            //     return <ParsaLevel9 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 17:
            //     return <ParsaLevel10 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 18:
            //     return <ParsaLevel11 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 19:
            //     return <ParsaLevel12 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 20:
            //     return <Silo setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 21:
            //     return <Horticulture setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 22:
            //     return <CsrLevel setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 23:
            //     return <Township setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 24:
            //     return <ParsaConclusion setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 25:
            //     return <Instructions key={`instructions-${currentLevel}`} setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 26:
            //     return <KclLevel1 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 27:
            //     return <KclLevel2 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 28:
            //     return <KclLevelPpe setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 29:
            //     return <KclLevel3 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 30:
            //     return <KclLevel4 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 31:
            //     return <KclLevel5 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 32:
            //     return <KclLevel6 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 33:
            //     return <KclConclusion setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 5:
            //     return <IrmLevel setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            case 5:
                return <IrmLevel1 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            case 6:
                return <IrmLevel2 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            case 7:
                return <IrmLevel3 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            case 8:
                return <IrmLevel4 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            case 9:
                return <IrmLevel5 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            case 10:
                return <IrmLevel6 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            case 11:
                return <IrmLevel7 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            case 12:
                return <IrmLevel8 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            case 13:
                return <IrmConclusion setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 44:
            //     return <Bunkering setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 45:
            //     return <BunkeringLevel1 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />  
            // case 46:
            //     return <BunkeringLevel2 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />  
            // case 47:
            //     return <BunkeringLevel3 setCurrentLevel={setCurrentLevel} setNotification={setNotification} /> 
            // case 48:
            //     return <BunkeringLevel4 setCurrentLevel={setCurrentLevel} setNotification={setNotification} /> 
            // case 49:
            //     return <BunkeringLevel5 setCurrentLevel={setCurrentLevel} setNotification={setNotification} /> 
            // case 50:
            //     return <BargeOperations1 setCurrentLevel={setCurrentLevel} setNotification={setNotification} /> 
            // case 51:
            //     return <BargeOperations2 setCurrentLevel={setCurrentLevel} setNotification={setNotification} /> 
            // case 52:
            //     return <BargeConclusion setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 53:
            //     return <AchLevel1 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />  
            // case 54:
            //     return <AchLevel2 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />   
            // case 55:
            //     return <AchLevel3 setCurrentLevel={setCurrentLevel} setNotification={setNotification} /> 
            // case 56:
            //     return <AchLevel4 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />   
            // case 57:
            //     return <AchLevel5 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />  
            // case 58:
            //     return <AchLevel6 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />
            // case 59:
            //     return <AchLevel7 setCurrentLevel={setCurrentLevel} setNotification={setNotification} />  
            // case 60:
            //     return <AchConclusion setCurrentLevel={setCurrentLevel} setNotification={setNotification} />     
            // case 61:
            //     return <PasswordUpdate setCurrentLevel={setCurrentLevel} setNotification={setNotification} />                                
            default:
                return <HomeLevel setCurrentLevel={setCurrentLevel} setNotification={setNotification} />;
        }
    }

    // useEffect(() => {
    //     console.log(player);
    //     if (player) {
    //         // if a child inside player isCamera then attach uiRef.current to the camera as a child
    //         player.children.forEach((child) => {
    //             if ("isCamera" in child && child.isCamera === true && uiRef.current && menuRef.current) {
    //                 console.log("found camera");
    //                 child.add(uiRef.current);

    //                 // temp code for development
    //                 child.add(menuRef.current);
    //                 // @ts-expect-error - attach menu will be removed
    //                 menuRef.current.position.set(0, -3, -5)
    //                 // @ts-expect-error - attach menu will be removed
    //                 menuRef.current.scale.set(1, 1, 1)
    //                 // @ts-expect-error - attach menu will be removed
    //                 menuRef.current.rotation.set(0, 0, 0)
    //                 // @ts-expect-error - attach menu will be removed
    //                 uiRef.current.position.set(0, 3.2, -5)
    //             }
    //         })
    //     }
    // }, [player]);

    useEffect(() => {
        console.log(currentLevel);
    }, [currentLevel])

    return (
        <>



            <XR store={store}>
                {/* <Environment preset='sunset'></Environment> */}

                <directionalLight position={[5, 10, -8]} castShadow intensity={5} shadow-mapSize={2048} shadow-bias={-0.001}>
                    <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10, 0.1, 20]} />
                </directionalLight>
                {currentLevel !== 0 && currentLevel!==61 && (<group ref={menuRef}
                    // visible={isPresenting}
                    scale={[1, 1, 1]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -0.9]}>
                    <Root depthTest={false} sizeX={1.5} sizeY={0.5}>
                        <Card paddingX={18} paddingY={0} borderWidth={2} gapColumn={10}>
                            <Container alignItems={"center"} width={10}></Container>

                            <Container alignItems={"center"}>
                                <HomeIcon width={60} height={60} onPointerUp={(e) => { e.stopPropagation(); setCurrentLevel(0) }} />
                            </Container>
                            <Container alignItems={"center"} width={10}></Container>
                            <Container alignItems={"center"}>
                                <ArrowLeftIcon width={64} height={64} onPointerUp={() => setCurrentLevel(currentLevel - 1)} />
                            </Container>
                            <Container alignItems={"center"}>
                                <ArrowRightIcon width={64} height={64} onPointerUp={() => setCurrentLevel(currentLevel + 1)} />
                            </Container>
                        </Card>
                    </Root>
                </group>)}

                {/* {currentLevel === 0 && ( */}
                    <group position={[-0.8, 3, -3]}>
                    <Root>
                        <Container>
                            <Button variant="icon" onClick={() => store.enterVR()} padding={4}>
                                <PlaySquare width={75} height={75} color={"white"} />
                            </Button>
                        </Container>
                    </Root>
                </group>
            {/* //  )} */}
                {/* {(currentLevel !== 0 || currentLevel !== 6) && (<group ref={uiRef}
                    // visible={isPresenting}
                    position={[0, 1, -5]}>
                    <Root depthTest={false} sizeX={3} sizeY={0.5} flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
                        <Card padding={18} borderWidth={2}>
                            <Text fontWeight="semi-bold" fontSize={14} letterSpacing={-0.5} textAlign="center">
                                {notification}
                            </Text>
                        </Card>
                    </Root>
                </group>)} */}
                <OrbitControls />
                <ambientLight intensity={1} />
                <Tone mapping={'AgX'} exposure={1} />
                {/* <Grid args={[10, 10]} position={[0, 0.001, 0]} infiniteGrid fadeDistance={20} fadeStrength={1} cellColor={"grey"} sectionColor={"white"} sectionSize={1} sectionThickness={0} /> */}
                <SoftShadows />
                {renderLevel()}
            </XR>
        </>
    )
}

export default XRScene