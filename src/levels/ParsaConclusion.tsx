import { Root, Text, Container } from "@react-three/uikit";
import { LevelProps } from "../interfaces";
import Model from "../Model";
import { useState, useEffect } from "react";
import { Button } from "../components/apfel/button";
import { DoorOpen } from "@react-three/uikit-lucide";
import { Input } from '../components/apfel/input';

interface Question {
  question: string;
  options: string[];
  values: number[]; // Array holding 0 or 1 for each option
}

export default function ParsaConclusion({ setNotification, setCurrentLevel }: LevelProps) {
  const [bgColor, setBgColor] = useState("lightgrey");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [parsaId, setParsaId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isIdSubmitted, setIsIdSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const questions: Question[] = [
    {
      question: "After the open pit operations coal is sent to?",
      options: ["Washery", "Silo", "Refinary", "stockyard"],
      values: [0, 0, 0, 1],
    },
    {
      question: "Which vehicle is used for the cleaning and leveling process to clear the site after the blasting process?",
      options: ["Grader", "Pulveriser", "Dumper", "Excavator"],
      values: [1, 0, 0, 0],
    },
    {
      question: "Which of these are not classified as an HEMM (Heavy Equipment Moving Machinery)?",
      options: ["Grader", "Conveyor belt", "Dumper", "Excavator"],
      values: [0, 1, 0, 0],
    },
    {
      question: "Which of these is not classified as a PPE kit which you should mandatorily wear before going into the site?",
      options: ["Helmet", "Gloves", "N95 Masks", "Harness"],
      values: [0, 0, 1, 0],
    },
  ];

  useEffect(() => {
    setNotification("This marks the end of KCL module. Please enter your ID to begin.");
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    setSelectedQuestions(shuffledQuestions.slice(0, 2));
  }, [setNotification]);

  const handleIdSubmit = () => {
    if (inputValue.trim() === "") {
      setErrorMessage("ID cannot be empty. Please enter a valid ID.");
      return;
    }
    setParsaId(inputValue);
    setIsIdSubmitted(true);
    setErrorMessage("");
  };

  const handleOptionClick = (index: number) => {
    const isCorrect = selectedQuestions[currentQuestionIndex].values[index] === 1;

    // Store the result in localStorage with ParsaId
    localStorage.setItem(`PARSA-${parsaId}-question${currentQuestionIndex + 1}`, isCorrect ? "1" : "0");

    // Update background color based on the answer
    setBgColor(isCorrect ? "green" : "red");

    // Move to the next question or mark as completed
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  if (!isIdSubmitted) {
    return (
      <group position={[0, 2.5, -2]}>
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
                Enter your ID to proceed:
              </Text>
              <Text fontSize={12} fontWeight="bold">
                Skipping this wont register your score
              </Text>
              <Input
                type="text"
                value={inputValue}
                placeholder="Enter ID"
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
              <Button onClick={handleIdSubmit}>
                <Text fontSize={14}>Submit</Text>
              </Button>
            </Container>
          </Container>
        </Root>
      </group>
    );
  }

  if (selectedQuestions.length === 0) {
    return null; // Wait until questions are selected
  }

  return (
    <>
      <Model
        url="/assets/parsa-studio-office.glb"
        position={[0, 0, 0]}
        scale={[2, 2, 2]}
        rotation={[0, Math.PI, 0]}
      />
      {isCompleted ? (
        <group position={[0, 2.5, -2]}>
          <Root>
            <Container
              padding={10}
              borderWidth={2}
              borderColor="white"
              borderRadius={8}
              backgroundColor={bgColor}
            >
              <Container flexDirection="column" alignItems="flex-start">
                <Text fontSize={12} fontWeight="bold">
                  You have answered the questions on the P.E.K.B module. Please click on the button to continue.
                </Text>
                <Text fontSize={12} fontWeight="bold">
                  If the container is red, rewatch the P.E.K.B module. If it's green, proceed to the next module.
                </Text>
              </Container>
            </Container>
          </Root>
          <group position={[0, -1, 0]}>
            <Root>
              <Container>
                <Button variant="icon" onClick={() => setCurrentLevel(0)} padding={4}>
                  <DoorOpen width={75} height={75} color={"white"} />
                </Button>
              </Container>
            </Root>
          </group>
        </group>
      ) : (
        <>
          <group position={[0, 3, -3]} rotation={[0, 0, 0]}>
            <Root>
              <Container
                padding={10}
                borderWidth={2}
                borderColor="white"
                borderRadius={8}
                backgroundColor={bgColor}
              >
                <Container flexDirection="column" alignItems="flex-start">
                  <Text fontSize={12} fontWeight="bold">
                    {selectedQuestions[currentQuestionIndex].question}
                  </Text>
                </Container>
              </Container>
            </Root>
          </group>
          <group position={[0, 1.5, -3]}>
            <Root>
              <Container flexDirection="column" alignItems="flex-start">
                {selectedQuestions[currentQuestionIndex].options.map((option, index) => (
                  <Button
                    key={index}
                    marginY={3}
                    borderWidth={1}
                    borderColor="white"
                    borderRadius={8}
                    backgroundColor="lightgrey"
                    onClick={() => handleOptionClick(index)}
                  >
                    <Text fontSize={10} fontWeight="bold" lineHeight={0.5} padding={0} margin={0}>
                      {option}
                    </Text>
                  </Button>
                ))}
              </Container>
            </Root>
          </group>
            <group position={[0, 0.09, -0.85]} rotation={[-Math.PI / 2, 0, 0]}>
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
                      Please Answer the questions to proceed
                    </Text>
                    <Text fontSize={15} fontWeight="bold">
                      Exit VR mode and reload to the browser to restart the experience
                    </Text>
                  </Container>
                </Container>
              </Root>
            </group>
        </>
      )}
    </>
  );
}
