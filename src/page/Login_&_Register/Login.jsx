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
                    <img src='grain.svg' className='login-image-cover' />
                    <img src='grain.svg' className='login-image-cover' />
                    <img onLoad={fadeOut}   className='login-image' src="lily.jpg" alt="" />
                    <div className='login-image-loader'>
                         <img className='logo' src="logo-white.svg" alt="" />
                    </div>
               </div>
               <div className='login-form-container'>
                    <div className='login-form-content'>
                         <h1>Welcome back.</h1>
                         <form onSubmit={(e)=>e.preventDefault()} className='login-form'>
                              <label htmlFor="name">Email</label>
                              <input type="email" required id='name' />
                              <label htmlFor="password">Password</label>
                              <input type={type.input}  id='password'/>
                              <i onClick={tooglePassword} className={`show-btn ${type.visible? "ri-eye-line" : "ri-eye-off-line"}`}></i>
                              <label className='sign-up' htmlFor="">Don't have an account ? <a onClick={()=> navigate("/register")} >Sign Up</a> </label>
                              <button onClick={()=> navigate("/dashboard")} className='login-btn' type="submit">LOGIN</button>
                         </form>
                    </div>
               </div>
          </div>
     )
}

export default Login;