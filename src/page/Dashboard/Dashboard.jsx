import './dashboard.scss'
import Nav from '../../components/SideBar/SideBar';
import Products from '../../components/Product/Products';
import { useState } from 'react';

function Dashboard() {
     const [isModalActive, setIsModalActive] = useState({state : false, element: ""});
     const setModalState = (e) => {
          console.log(isModalActive)
          const mode = e.currentTarget.classList[0];

          return setIsModalActive((value)=> {
               console.log(mode)
               return {
                    ...value,
                    state : value.element == "checkout-btn"? false : !value.state ,
                    element : mode
               }
          });
         
     } 
     return(
          <div className="dashboard">
               {/* <header>
                    <img src="logo-blue.svg" alt="" />
                    <p className='greetings'>  Good Morning to you ! <span>What delicious meal are you craving for today?</span></p>
                    <img className='user' src="p-1.jpg" alt="" ></img>
               </header> */}
               <Nav 
                    elementName={isModalActive}
                    handleState={(e)=>setModalState(e)}
               />
               <Products 
                    elementName={isModalActive}
                    handleModalState={(e)=>setModalState(e)} 
               />
               <div 
                    onClick={setModalState} 
                    className={`modalOn ${!isModalActive.state ? "hide" : "show-modalOn"}`}>
               </div>
               <div 
                    onClick={setModalState}
                    className={`checkout-cover ${isModalActive.element == "checkout-btn" ? "show-checkout-cover" : "hide" }`}></div>     
          </div>
     )
}

export default Dashboard;