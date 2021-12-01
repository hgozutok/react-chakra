import React from 'react'
import GetUsers from '../DataParts/GetUsers'

import Form from '../Form'
import AppBarChakra from './AppBarChakra'
import Footer from './Footer'


function Layout() {
    return (
        <div>
            <AppBarChakra/>
            <Form/>
            <GetUsers/>
   <Footer/>
        </div>
    )
}

export default Layout
