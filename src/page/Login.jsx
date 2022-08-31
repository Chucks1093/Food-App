import { useNavigate } from 'react-router-dom';
import '../styles/login.css'
import fadeOut from '../components/fadeOut';
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
          <div className="login-page">
               <div className='login'>
                    <div className='login-image-container'>
                         <div className='login-image-cover'></div>
                         <img onLoad={fadeOut} className='login-image' src="lily.jpg" alt="" />
                         <div className='login-image-loader'>
                              <img src="loader.svg" alt="" />
                         </div>
                    </div>
                    <div className='login-form-container'>
                         <form onSubmit={(e)=>e.preventDefault()} className='login-form'>
                              <h1>Welcome Back !</h1>
                              <input type="text" placeholder='Your Email address' />
                              <div className='login-password'>
                                   <input type={type.input} placeholder='Your Password'/>
                                   <button onClick={tooglePassword} className='show-btn'>Show</button>
                              </div>
                              <button onClick={()=> navigate("/dashboard")} className='login-btn' type="submit">LOGIN</button>
                              <div className='options'>
                                   <p onClick={()=> navigate("/register")}>Create Account</p>
                                   <p>Forgot Password</p>
                              </div>
                         </form>
                         {/* <img className='login-logo' src="leaf.png" alt="" /> */}
                    </div>
               </div>
          </div>
     )
}

export default Login;