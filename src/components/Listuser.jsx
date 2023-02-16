import React, { useEffect, useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { mostrar_alerta } from "./funciones"

const Listuser = () => {
  const url = 'http://localhost:8000/api/usuarios';
  const [users, setusers] = useState([]);
  const [id, setid] = useState('')
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [consulta, setconsulta] = useState('')
  const [title, settitle] = useState('')

  useEffect(() => {
    getusers();
  }, [])

  const getusers = async () => {
    const respuesta = await axios.get(url);
    setusers(respuesta.data);
  }

  const modal = (op, id, name, email) => {
    setname('')
    setid('')
    setemail('')
    setconsulta(op)
    if (op === 1) {
      settitle('Registrar usuario');
    } else if(op === 2) {
      settitle('actualizar informacion')
      setname(name)
      setid(id)
      setemail(email)
    }
    
  }
  
  return (
    <>
      <div class="d-grid gap-2 col-6 mx-auto mt-4">
        <button class="btn btn-outline-warning" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>modal(1)}>Registrar</button>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">{title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <form class="row g-3">
                <div class="mb-3 row mt-3">
                  <label for="inputNombre" class="col-sm-2 col-form-label">Nombre</label>
                  <div class="col-sm-10">
                    <input onChange={(e) => setname(e.target.value)} type="text" class="form-control" id="Nombre" value={name} />
                  </div>
                </div>
                <div class="mb-3 row mt-3">
                  <label for="email" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input onChange={(e) => setemail(e.target.value)} type="email" class="form-control" id="email" value={email} />
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
              users.map((u, i) => (
                <tr key={u.id} className="text-center">
                  
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td><button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>modal(2,u.id,u.name,u.email)}>Editar</button>&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-danger" >Eliminar</button> </td>
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