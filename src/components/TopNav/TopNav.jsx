import { useNavigate } from "react-router-dom";
import './nav.scss';
import logo from './leaf.png';
import { useState } from "react";

function TopNav() {
     const navigate =useNavigate();
     const [menuState, setMenuState] = useState(false)

     const showMenu = ()=>setMenuState((value)=>!value) 


     return(
          <nav className={`landing-nav-bar fixed ${menuState? "menu-active" : ""}`}>
                    <div className="landing-logo-container" >
                         <img className="landing-logo" src={logo} alt="" />
                         <p className="brand-name">Lilies</p>
                    </div>
                    <ul className="links">
                         <li><a href="#">Home</a></li>
                         <li><a className="reg-login-btn" onClick={()=>navigate('/login')}>Login</a></li>
                         <li><a className="sign-btn" onClick={()=>navigate('/register')}>Sign Up</a></li>
                    </ul>
                    <div className="glass"></div>
                    <div onClick={showMenu} className="menu-btn"><i className={`${menuState? "ri-close-line" : "ri-menu-line"}`}></i></div>
          </nav>
     )
}
export default TopNav;