import React from "react";
import { Flex, Spacer, Box, Heading,Text  } from "@chakra-ui/react";
import Toggle from "../Toggle";

function TopNavigation() {
  return (
    <Flex>
      <Box p="4" >
      
      </Box>
      <Box p="4" >
        <Text fontSize='3xl'>Logo </Text>
      </Box>
      <Box p="4" >
       <Heading as='h1'>Hugo App</Heading> 
      </Box>
      <Spacer />
      <Box p="4" >
        <Toggle/>
      </Box>
    </Flex>
  );
}

export default TopNavigation;
