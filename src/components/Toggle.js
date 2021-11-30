import React from "react";
import { Flex, Button, useColorMode, Switch } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import * as Icons from "@chakra-ui/icons";

export default function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex>
      <IconButton
      margin={'20px'}
        size="sm"
        colorScheme="blue"
        onClick={() => toggleColorMode()}
        icon={colorMode === "dark" ? <Icons.MoonIcon /> : <Icons.SunIcon />}
      />
      {/* <Switch colorScheme='red' size="lg" onChange={() => toggleColorMode()}>
         Toggle Mode {colorMode}
        </Switch> */}
    </Flex>
  );
}
