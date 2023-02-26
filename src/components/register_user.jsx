import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register_user = () => {
  const url = 'http://localhost:8000/api/usuario';
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate()
  const registrar = async (e)=>{
      await  e.preventDefault()
        axios.post(url, {name:name,email:email,password:password});
        navigate('/')
  }
  return (
  <>  
  <div className="d-flex justify-content-center align-item-center mt-2">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Registrar Usuario
</button>
</div>
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Registrar Usuarios</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <form class="row g-3" onSubmit={registrar}>
                <div class="mb-3 row mt-3">
                  <label for="inputNombre" class="col-sm-2 col-form-label">Nombre</label>
                  <div class="col-sm-10">
                    <input onChange={(e) => setname(e.target.value)} type="text" class="form-control" id="Nombre"  />
                  </div>
                </div>
                <div class="mb-3 row mt-3">
                  <label for="email" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input onChange={(e) => setemail(e.target.value)} type="email" class="form-control" id="email" />
                  </div>
                </div>
                <div class="mb-3 row mt-3">
                  <label for="email" class="col-sm-2 col-form-label">Password</label>
                  <div class="col-sm-10">
                    <input onChange={(e) => setpassword(e.target.value)} type="password" class="form-control" id="password" />
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" id="btn-cerrar" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="submit"  class="btn btn-primary">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

  </>
    
  )
}

export default Register_user