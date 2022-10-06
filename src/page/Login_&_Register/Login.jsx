import { useNavigate } from 'react-router-dom';
import './login.scss';
import fadeOut from '../../functions/fadeOut';
import { useState } from 'react';

function Login() {
     const navigate = useNavigate();
     const [type , setType] = useState({visible: false, input:"password"});
     function tooglePassword() {
          setType((value)=>{
               return {
                    ...value,
                    visible : !value.visible,
                    input : !value.visible ? "text" : "password"
               }
          })
     }
     return (
          <div className='login-page'>
               <div className='login-image-container'>
                    <img className='logo' src="logo-white.svg" alt="" />
                    <img src='grain.svg' className='login-image-cover' />
                    <img  className='login-image' src="lily.jpg" alt="" />
                    <div className='login-image-loader'>
                         {/* <img src="loader.svg" alt="" /> */}
                    </div>
               </div>
               <div className='login-form-container'>
                    <img className='logo top' src="pic-3.jpg" alt="" />
                    {/* <img className='logo bottom' src="show-6.jpg" alt="" /> */}
                    <form onSubmit={(e)=>e.preventDefault()} className='login-form'>
                         <h1>Welcome Back !</h1>
                         <input type="email" required placeholder='Your Email address' />
                         <div className='login-password'>
                              <input type={type.input} placeholder='Your Password'/>
                              <button onClick={tooglePassword} className={`show-btn ${type.visible? "ri-eye-line" : "ri-eye-off-line"}`}></button>
                         </div>
                         <button onClick={()=> navigate("/dashboard")} className='login-btn' type="submit">LOGIN</button>
                         <div className='options'>
                              <p onClick={()=> navigate("/register")}>Create Account</p>
                              <p>Forgot Password</p>
                         </div>
                         <img className='logo' src="leaf-svg.svg" alt="" />
                    </form>
               </div>
          </div>
     )
}

export default Login;