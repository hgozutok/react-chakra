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
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import {  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Form from "./components/Form";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      
        <Routes>
        <Route exact path="/" element={ <Layout>  <Home/>    </Layout>} >
        
        </Route>
        <Route path="/login" element={<LoginPage/>} >
        
        </Route>
        <Route path="/form" element={ <Layout>  <Form/>    </Layout>} >
        
        </Route>
        </Routes>
    
   
    </ChakraProvider>
    // {/* <Route path="/login" element={LoginPage} > */}
          //  {/* <Route index element={<Home />} /> */}
          
          // {/* <Route exact path="/" component={Home} /> */}
          // {/* <Route exact path="/login" component={LoginPage} /> */}
          // {/* </Route> */}
    // <Route exact path='/orders' component={OrdersList} />
    //    <Route exact path='/orders/edit/:id' component={EditOrder} />
    //  <Route exact path='/orders/new/' component={NewOrder} /><Route exact path="/" component={Home} />

    //   <ChakraProvider theme={theme}>
    //     <h1>test</h1>
    //
    // </ChakraProvider>
  );
}

export default App;
