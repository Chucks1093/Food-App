import '../styles/dashboard.css'
import Nav from '../components/Nav';
import Products from '../components/Products';
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
                    state : !value.state,
                    element : mode
               }
          });
         
     } 
     return(
          <div className="dashboard">
               <Nav 
                    elementName={isModalActive}
                    handleState={(e)=>setModalState(e)}
                    
               />
               <Products 
                    elementName={isModalActive}
                    handleModalState={(e)=>setModalState(e)} 
               />
               <div onClick={setModalState} 
                    className={`modalOn ${!isModalActive.state? "hide" : " "}`}>
               </div>
               
          </div>
     )
}

export default Dashboard;