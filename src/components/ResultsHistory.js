import React, { useState } from "react";
import {
  Card,
  Text,
  Heading,
  Box,
  Flex,
  Spacer,
  IconButton,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const colorScheme = process.env.REACT_APP_COLOR_SCHEME;
function ResultsHistory({ results }) {
  console.log("results", results);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const toggleConfirmationModal = () => {
    setShowConfirmationModal(!showConfirmationModal);
  };
  const removeHistory = () => {
    localStorage.setItem("calc-history", []);
    toggleConfirmationModal();
  };
  return (
    <div>
      <Card width={300} maxH={250} padding={3} overflowY={"auto"} bg={"gray"}>
        <Flex>
          <Box p="1">
            <Heading size="lg">History</Heading>
          </Box>
          <Spacer />
          <Box p="1">
            <IconButton
              colorScheme={colorScheme}
              aria-label="Toggle confirmation Modal"
              onClick={toggleConfirmationModal}
              icon={<MdOutlineDeleteOutline />}
            />
          </Box>
        </Flex>
        <hr />
        <Box paddingTop={4}>
          {results ? null : <Text>No history</Text>}
          {results &&
            results.length > 0 &&
            results.map((result, index) => {
              return (
                <>
                  <Text>
                    Expression : {result.expression}
                    <br /> Result : {result.value}
                  </Text>
                  {parseInt(results.length) !== parseInt(index + 1) ? (
                    <hr />
                  ) : null}
                </>
              );
            })}
        </Box>
      </Card>
      <Modal isOpen={showConfirmationModal} onClose={toggleConfirmationModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure, want to clear the history?</ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={toggleConfirmationModal}>
              Close
            </Button>
            <Button
              variant="ghost"
              colorScheme="green"
              onClick={() => removeHistory()}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ResultsHistory;
