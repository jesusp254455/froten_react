import { BrowserRouter,Routes, Route } from "react-router-dom";
import Listuser from "./components/Listuser";
function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Listuser></Listuser>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
