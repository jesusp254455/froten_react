import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


const url = 'http://localhost:8000/api/'

const list_user = () => {


const {users, setusert} = useState( []);

useEffect ( ()=> {
    get_user()
}, [])

const get_user = async ()=>{
  const response =  await axios.get(`${url}/usuarios`)
  setusert(response.data)
}

const delete_user = async (id)=>{
   await   axios.delete(`${url}/usuario/${id}`)
   get_user();
}

  return (
    <div>
        <div className='d-grid gap-2'>
             
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { users.map( (users) => (
                    <tr key={users.id}>
                        <td> {users.name} </td>    
                        <td> {users.email} </td>    
                        <td> {users.password} </td>    
                        <td>
                            <Link to={`/edit/${users.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>delete_user(users.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>

    </div>
  )
}

export default list_user