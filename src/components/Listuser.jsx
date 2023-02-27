import React, { useEffect, useState } from "react"
import axios from "axios"

import { Link } from "react-router-dom"

const Listuser = () => {
  const url = 'http://localhost:8000/api';
  const [users,setusers] = useState( [] )

  useEffect ( ()=>{
      getuser()
  }, [])
  const getuser = async ()=>{
     const response = await axios.get(`${url}/usuarios`)
     setusers(response.data);
  
     
  }

  const delete_user = async (id)=>{
     await axios.delete(`${url}/usuario/${id}`)
      getuser()
  }
  return (
    <>
    <div className="d-flex justify-content-center align-item-center mt-2">
      
    <Link to="/Register" className="btn btn-success ">Crear Usuario</Link>
    </div>
     <div class="container">
        <table class="table mt-3 table-bordered">
          <thead>
            <tr className="text-center">
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((u) => (
                <tr key={u.id} className="text-center">
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td> <Link to={`/edit/${u.id}`} className="btn btn-outline-success">Editar</Link> &nbsp;&nbsp;
                    <button type="button" className="btn btn-outline-danger" onClick={()=>delete_user(u.id)}>Eliminar</button> </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>


      
    </>
  )
}

export default Listuser