import { BrowserRouter,Routes, Route } from "react-router-dom";
import Listuser from "./components/Listuser";
import Register_user from "./components/register_user";
import Update_user from "./components/update_user";
function App() {
  

  return (
       <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Listuser></Listuser>}/>
                <Route path='/Register' element={<Register_user></Register_user>}/>
                <Route path='/edit/:id' element={<Update_user></Update_user>}/>
            </Routes>
        </BrowserRouter>
        </>
  )
}

export default App
