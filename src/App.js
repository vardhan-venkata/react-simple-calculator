import React, { useState } from "react";
import KeysComponent from "./components/KeysComponent";
import ResultPanel from "./components/ResultPanel";
import {
  Card,
  CardBody,
  Heading,
  CardHeader,
  Box,
  Stack,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

function App() {
  const [result, setResult] = useState("");
  const toast = useToast();
  const toastIdRef = React.useRef();

  function handleButtonClick(button) {
    if (button === "=") calculateResult();
    else if (button === "clear") backSpace();
    else if (button === "AC") resetResult();
    else if (button === "+/-") setResult(`-(${result})`);
    else {
      setResult(result + button);
    }
  }
  function handleExpressionChange(expression) {
    const regex = /^[0-9-+/*()]*$/;
    if (regex.test(expression)) {
      console.log("expression putside", expression);
      setResult(expression);
    }
  }
  function backSpace() {
    console.log("result", result);
    setResult(String(result).slice(0, -1));
  }
  function resetResult() {
    setResult("");
  }
  function calculateResult() {
    try {
      //eslint-disable-next-line
      setResult(eval(result));
    } catch (error) {
      console.log("error", error);
      addToast();
    }
  }
  function addToast() {
    toastIdRef.current = toast({
      title: "Please enter valid expression",
      status: "error",
      position: "top-right",
      isClosable: true,
    });
  }
  return (
    <Box
      padding={5}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      alignContent={"center"}
    >
      {" "}
      <Card width={380} height={500}>
        <CardHeader>
          <Heading size="md">Calculator</Heading>
        </CardHeader>

        <CardBody>
          <Stack spacing="3">
            <Box>
              <ResultPanel
                result={result}
                handleExpressionChange={handleExpressionChange}
              />
            </Box>
            <Box>
              <KeysComponent handleButtonClick={handleButtonClick} />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default App;
