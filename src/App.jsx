

import './App.css'

import List_user from './components/List_user'
import { BrowserRouter } from 'react-router-dom'
function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List_user></List_user>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
