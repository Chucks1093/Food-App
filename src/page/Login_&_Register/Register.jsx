
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
          <div className="login-page">
               <div className='login'>
                    <div className='login-image-container'>
                         <div className='login-image-cover'></div>
                         <img onLoad={fadeOut} className='login-image' src="reg-img.jpg" alt="" />
                         <div className='login-image-loader'>
                              <img src="loader.svg" alt="" />
                         </div>
                    </div>
                    <div className='login-form-container'>
                         <form onSubmit={(e)=>e.preventDefault()} className='reg-form'>
                              <h1>Welcome to Lilies !</h1>
                              <input type="text" placeholder='Your First Name' />
                              <input type="email" placeholder='Your Email address' />
                              <div className='login-password'>
                                   <input type={type.input} placeholder='Your Password'/>
                                   <button onClick={tooglePassword} className={`show-btn ${type.visible? "ri-eye-line" : "ri-eye-close-line"}`}></button>
                              </div>
                              <button onClick={()=> navigate("/login")} className='login-btn' type="submit">SIGN UP</button>
                              <div className='reg-options'>
                                   <p>Already have an account ? <span onClick={()=> navigate("/login")}>LOGIN</span></p>
                              </div>
                         </form>
                         {/* <img className='login-logo' src="leaf.png" alt="" /> */}
                    </div>
               </div>
          </div>
     )
}

export default Register;