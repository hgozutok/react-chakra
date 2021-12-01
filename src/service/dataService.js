import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

var user = null
export async function getUser(id) {
    return (
       await axios.get(process.env.REACT_APP_API_URL+id).then(
           (data)=>{user =data;
            //console.log(data)
        return user}
       ).catch(
            {error: 'error occurred'}
        
            
       )
    )
}
export async function getUserList() {
    return (
       // REACT_APP_API_URL
     // `https://jsonplaceholder.typicode.com/todos/`
       //await axios.get(process.env.REACT_APP_API_URL,{
         await axios.get(`https://jsonplaceholder.typicode.com/todos/`,{
        params: {
          _limit: 10
         }
      }).then(
           (data)=>{return data;
           // console.log(data)
  }
       ).catch(
            {error: 'error occurred'}
        
            
       )
    )
}

function dataService(props) {
    return (
        <div>
            
        </div>
    )
}

dataService.propTypes = {

}

export default {dataService, getUser,getUserList}

