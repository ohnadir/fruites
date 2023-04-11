import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./Page/Login"
import Register from "./Page/Register"
import TrainInfo from "./Page/TrainInfo"
import 'aos/dist/aos.css';
import AOS from 'aos';
import Home from "./Page/Home"
import NotFoundPage from "./Page/NotFoundPage"

function App() {
  AOS.init({ duration : 1000});
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/train-info" element={<TrainInfo/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}

export default App
