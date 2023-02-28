import React , {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const url = 'http://localhost:8000/api/usuario/';
const Update_user = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const {id} = useParams()
 
  const navigate = useNavigate()
  const update = async (e)=>{
    e.preventDefault()
    await axios.put(`${url}${id}`,{
      name:name,email:email
    })
    navigate('/')
  }
  useEffect ( ()=>{
    getusersByid()
}, [])
  const getusersByid = async () =>{
    const response = await  axios.get(`${url}${id}`)
    setname(response.data.name);
    setemail(response.data.email)
   }


  return (
   <>
      <div className="container">
      <form className="row g-3" onSubmit={update}>
                <div className="mb-3 row mt-3">
                  <label for="inputNombre" class="col-sm-2 col-form-label">Nombre</label>
                  <div className="col-sm-10">
                    <input onChange={(e) => setname(e.target.value)} type="text" className="form-control" id="Nombre" value={name} />
                  </div>
                </div>
                <div className="mb-3 row mt-3">
                  <label for="email" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input onChange={(e) => setemail(e.target.value)} type="email" className="form-control" id="email" value={email} />
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit"  className="btn btn-primary">Guardar</button>
                </div>
              </form>
      </div>
   </>
  )
}

export default Update_user