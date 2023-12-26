import React from "react";
import {
  Stack,
  Button,
  Box,
  Card,
  StackDivider,
  CardBody,
} from "@chakra-ui/react";
import { MdBackspace } from "react-icons/md";

function KeysComponent({ handleButtonClick }) {
  return (
    <div>
      <Card width={300} height={"auto"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme="teal"
                  variant="solid"
                  rounded={"inherit"}
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("AC")}
                >
                  AC
                </Button>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("clear")}
                >
                  <MdBackspace />
                </Button>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("+/-")}
                >
                  +/-
                </Button>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("C")}
                >
                  /
                </Button>
              </Stack>
            </Box>
            <Box>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("4")}
                >
                  4
                </Button>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("5")}
                >
                  5
                </Button>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("6")}
                >
                  6
                </Button>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("-")}
                >
                  -
                </Button>
              </Stack>
            </Box>
            <Box>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("1")}
                >
                  1
                </Button>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("2")}
                >
                  2
                </Button>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("3")}
                >
                  3
                </Button>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("+")}
                >
                  +
                </Button>
              </Stack>
            </Box>
            <Box>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("1")}
                >
                  %
                </Button>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("2")}
                >
                  0
                </Button>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("3")}
                >
                  .
                </Button>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor="green.500"
                  onClick={() => handleButtonClick("=")}
                >
                  =
                </Button>
              </Stack>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default KeysComponent;
