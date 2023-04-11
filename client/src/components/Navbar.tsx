import "../StyleSheet/Navbar.scss";
import { useNavigate } from "react-router-dom"
import { GrMenu, GrFormClose } from "react-icons/gr"
import { useState } from "react";
const Navbar = () => {
  const [Open, setOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="navbar relative">
      <div className="py-[25px] max-w-7xl mx-auto px-10 lg:px-0">
        <div className="navbar-container">
          <div className="nav-logo">
            <img src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/bangladesh-railway.png" alt="" />
            <p>Bangladesh <br /> Railway</p>
          </div>
          <div className="md:hidden ">
            {
              Open
              ?
              <GrFormClose onClick={()=>setOpen(!Open)} size={22} style={{color:"#089d49"}}/>
              :
              <GrMenu onClick={()=>setOpen(!Open)} size={22} style={{color:"#089d49"}}/>
            }
          </div>
          <div className="nav-route hidden md:block">
            <ul>
              <li onClick={()=>navigate('/')} className="active">Home</li>
              <li onClick={()=>navigate('/login')}>Login</li>
              <li onClick={()=>navigate('/register')}>Register</li>
              <li onClick={()=>navigate('/train_info')}>Train Information</li>
              <li onClick={()=>navigate('/contact')}>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      {
        Open
        ?
        <div className="nav-dropdown" data-aos="fade-down">
          <div className="mobile-menu md:hidden max-w-7xl mx-auto px-10 lg:px-0">
            <ul className="flex flex-col gap-5">
              <li onClick={()=>navigate('/')} className="active">Home</li>
              <li onClick={()=>navigate('/login')}>Login</li>
              <li onClick={()=>navigate('/register')}>Register</li>
              <li onClick={()=>navigate('/train_info')}>Train Information</li>
              <li onClick={()=>navigate('/contact')}>Contact Us</li>
            </ul>
          </div>
        </div>
        : null
      }
      
    </div>
  )
}

export default Navbar