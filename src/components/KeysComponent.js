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
const colorScheme = process.env.REACT_APP_COLOR_SCHEME;

function KeysComponent({ handleButtonClick }) {
  return (
    <div>
      <Card width={300} height={"auto"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="solid"
                  rounded={"inherit"}
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("AC")}
                >
                  AC
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("clear")}
                >
                  <MdBackspace />
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("*")}
                >
                  *
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("/")}
                >
                  /
                </Button>
              </Stack>
            </Box>
            <Box>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("4")}
                >
                  4
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("5")}
                >
                  5
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("6")}
                >
                  6
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("-")}
                >
                  -
                </Button>
              </Stack>
            </Box>
            <Box>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("1")}
                >
                  1
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("2")}
                >
                  2
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("3")}
                >
                  3
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("+")}
                >
                  +
                </Button>
              </Stack>
            </Box>
            <Box>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("%")}
                >
                  %
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick("0")}
                >
                  0
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="ghost"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
                  onClick={() => handleButtonClick(".")}
                >
                  .
                </Button>
                <Button
                  colorScheme={colorScheme ? colorScheme : "blue"}
                  variant="solid"
                  size="md"
                  height="48px"
                  width="50px"
                  border="2px"
                  borderRadius={"5px"}
                  borderColor={`${colorScheme ? colorScheme : "blue"}.500`}
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
