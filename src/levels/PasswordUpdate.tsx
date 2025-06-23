import { LevelProps } from '../interfaces';
import { useEffect, useState } from "react";
import { Container, Root, Text } from "@react-three/uikit";


import { Button } from '../components/apfel/button';

import { Input } from '../components/apfel/input';



export default function PasswordUpdate({ setNotification, setCurrentLevel }: LevelProps) {
  
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const correctPassword = "ADANI2024"

    useEffect(() => {
        // Set notification
        setNotification("Please Enter the Password");
    }, [setNotification]);


    const handlePasswordSubmit = () => {
        if (inputValue === correctPassword) {
            setNotification("Access granted! Moving to the next level.");
            console.log("correct password")
            setCurrentLevel(0);
            // Trigger custom success handler
           
        } else {
            setErrorMessage("Incorrect password. Please try again.");
            console.log("Wrong password")
            
        }
    };

    return (
        <>
           
            <group position={[0, 2, -1]} rotation={[0, 0, 0]}>
                <Root>
                    <Container
                        padding={10}
                        borderWidth={2}
                        borderColor="white"
                        borderRadius={8}
                        backgroundColor="lightgrey"
             
                    >
                        <Container flexDirection="column" alignItems="center" justifyContent="center">
                            <Text fontSize={12} fontWeight="bold">
                                Enter Password
                            </Text>
                            <Input
                                type="password"
                                value={inputValue}
                                placeholder='Password'
                                onValueChange={(value) => setInputValue(value)}
                                marginY={10}
                                borderColor="white"
                                width={200}
                            />
                            {errorMessage && (
                                <Text fontSize={12} color="red" marginY={5}>
                                    {errorMessage}
                                </Text>
                            )}
                            <Button onClick={handlePasswordSubmit} >
                                <Text fontSize={14}>Submit</Text>
                            </Button>

                        </Container>
                    </Container>
                </Root>
            </group>
            <group position={[0, 0, -0.85]} rotation={[-Math.PI / 2, 0, 0]}>
                <Root>
                    <Container
                        padding={15}
                        borderWidth={2}
                        borderColor="white"
                        borderRadius={8}
                        backgroundColor="lightgrey"
                    >
                        <Container flexDirection="column" alignItems="flex-start">
                            <Text fontSize={15} fontWeight="bold">
                                Please Enter the password
                            </Text>
                            <Text fontSize={15} fontWeight="bold">
                                Contact us : hi@fabrik.space for support
                            </Text>
                        </Container>
                    </Container>
                </Root>
            </group>
           
        </>
    );
}
