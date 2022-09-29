import { useNavigate } from "react-router-dom";
import './nav.scss';
import logo from './leaf.png';

function Nav() {
     const navigate =useNavigate();
     return(
          <nav className="landing-nav-bar">
               <div className="landing-logo-container">
                    <img className="landing-logo" src={logo} alt="" />
                    <p className="brand-name">Lilies</p>
               </div>
               <div className="links">
                    <a className="reg-login-btn" onClick={()=>navigate('/login')}>Login</a>
                    <a className="sign-btn" onClick={()=>navigate('/register')}>Sign Up</a>
               </div>
          </nav>
     )
}
export default Nav;