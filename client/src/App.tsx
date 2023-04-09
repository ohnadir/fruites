import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Login from "./Page/Login"

function App() {

  return (
    <div>
      <Navbar/>
      {/* <Header/> */}
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </div>
  )
}

export default App
