
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './login.scss'
import './reg.scss'
import fadeOut from '../../functions/fadeOut';

function Register() {
     let navigate = useNavigate();
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
                    <img onLoad={fadeOut}   className='login-image' src="lily-2.jpg" alt="" />
                    <div className='login-image-loader'>
                         <img className='logo' src="logo-white.svg" alt="" />
                    </div>
               </div>
               <div className='login-form-container'>
                    <div className='login-form-content'>
                         <h1>Sign Up.</h1>
                         <form onSubmit={(e)=>e.preventDefault()} className='login-form'>
                              <label htmlFor="name">Name</label>
                              <input type="text" required id='name' />
                              <label htmlFor="password">Email</label>
                              <input type="email"  id='password'/>
                              <label className='sign-up' htmlFor="">Already have an account ? <a onClick={()=> navigate("/login")} >Log in</a> </label>
                              <button className='login-btn' type="submit">Continue</button>
                         </form>
                    </div>
                    <div className='login-form-content opacity '>
                         <h1>Set Password. </h1>
                         <form onSubmit={(e)=>e.preventDefault()} className='login-form'>
                              <label htmlFor="password">Password</label>
                              <input type="password" required id='password' />
                              <label htmlFor="password">Re-enter Password</label>
                              <input type="email"  id='password'/>
                              <i onClick={tooglePassword} className={`show-btn shift-show-btn ${type.visible? "ri-eye-line" : "ri-eye-off-line"}`}></i>
                              <input type="radio" className='policy'  id='password'/>
                              <label className='policy-label' htmlFor="">By opening an account you agree to the terms and conditions of our <a>privacy policy</a> </label>
                              <button onClick={()=> navigate("/dashboard")} className='login-btn' type="submit">Sign up</button>
                         </form>
                    </div>
               </div>
          </div>
     )
}

export default Register;