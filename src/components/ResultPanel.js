import React from "react";
import { Box, Input } from "@chakra-ui/react";

function ResultPanel({ result, handleExpressionChange }) {
  return (
    <Box width={300} minHeight={50}>
      {/* <p>{result}</p> */}
      <Input
        placeholder="Expression value"
        value={result}
        focusBorderColor="teal.400"
        onChange={(e) => handleExpressionChange(e.target.value)}
      />
    </Box>
  );
}

export default ResultPanel;
