import React from 'react'
import GetUsers from '../DataParts/GetUsers'
import { Container } from "@chakra-ui/react";
import Form from '../Form'
import AppBarChakra from './AppBarChakra'
import Footer from './Footer'


const Layout=props=> {
    return (
        <div>
            <AppBarChakra/>
            <Container>   
                 {props.children} 
            </Container>
    
   <Footer/>
        </div>
    )
}

export default Layout
