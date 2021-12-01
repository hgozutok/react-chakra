import { FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react";
import React from "react";

function Form() {
  return (
    <>
    <Flex direction={"column"} >
      <FormControl id="first-name" isRequired mt={4}>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name"  />
      </FormControl>
      <FormControl isRequired mt={4}>
        <FormLabel>Last name</FormLabel>
        <Input placeholder="Last name" />
      </FormControl>
      <FormControl  mt={4}>
      <Button colorScheme="blue" mr={3}>
        Save
      </Button>
      </FormControl>
      </Flex>
    </>
  );
}

export default Form;
