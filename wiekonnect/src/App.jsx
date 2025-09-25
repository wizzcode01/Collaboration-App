import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Pages/Login'
import Registration from './Pages/Registration'

function App() {

  return (
    <>
    <Router>
      <Routes> 
         <Route path="/" element={<Login/>}/>
         {/* <Route path="/Registration" element={<Registration/>}/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
