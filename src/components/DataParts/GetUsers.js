import {React , useState,useEffect} from 'react'
import {dataService, getUserList} from '../../service/dataService'


function GetUsers() {
const [users, setUsers] = useState([]);

useEffect(() => {
    getDataList();
}, []);

async function getDataList() {
    let dropl = await getUserList();
    setUsers(dropl.data);
    
  }

    return (
        <div>
            {users.map((user)=>
                    (<li>{user.title}</li>)
                
                
            )}
        </div>
    )
}

export default GetUsers
