import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Login from "./Page/Login"
import Register from "./Page/Register"
import TrainInfo from "./Page/TrainInfo"

function App() {

  return (
    <div>
      <Navbar/>
      {/* <Header/> */}
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/train-info" element={<TrainInfo/>}/>
      </Routes>

    </div>
  )
}

export default App
