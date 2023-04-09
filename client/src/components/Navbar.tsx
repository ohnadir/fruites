import "../StyleSheet/Navbar.scss";
import { useNavigate } from "react-router-dom"
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="py-[25px] max-w-7xl mx-auto px-10 lg:px-0">
        <div className="navbar-container">
          <div className="nav-logo">
            <img src="https://d19qjkjk65tfln.cloudfront.net/v2/assets/img/home/bangladesh-railway.png" alt="" />
            <p>Bangladesh <br /> Railway</p>
          </div>
          <div className="nav-route">
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
    </div>
  )
}

export default Navbar