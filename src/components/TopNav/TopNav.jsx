import { useNavigate } from "react-router-dom";
import './nav.scss';
import logo from './leaf.png';

function TopNav() {
     const navigate =useNavigate();

     return(
               <nav className="landing-nav-bar ">
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
                         <div className="menu-btn"><i className="ri-menu-line"></i></div>
               </nav>
     )
}
export default TopNav;