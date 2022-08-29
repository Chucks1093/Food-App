import { useNavigate } from "react-router-dom";

function Header() {
     const navigate =useNavigate();
     return(
          <header className="landing-header">
               <div className="landing-logo-container">
                    <img className="landing-logo" src="leaf.png" alt="" />
                    <p className="brand-name">Lilies</p>
               </div>
               <div className="links">
                    <p>Home </p>
                    <p onClick={()=>navigate('/login')}>Login</p>
                    <p onClick={()=>navigate('/register')}>Sign Up</p>
               </div>
          </header>
     )
}
export default Header;