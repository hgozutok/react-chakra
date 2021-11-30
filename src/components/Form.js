import { FormControl,FormLabel,Input } from '@chakra-ui/react'
import React from 'react'

function Form() {
    return (
        <>
            <FormControl id='first-name' isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' />
</FormControl>
        </>
    )
}

export default Form
