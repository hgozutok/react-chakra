import "./App.css";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript, useColorMode, Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import Layout from "./components/Layouts/Layout";

function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
 
     <Layout/>
    </ChakraProvider>

    //   <ChakraProvider theme={theme}>
    //     <h1>test</h1>
    //
    // </ChakraProvider>
  );
}

export default App;
