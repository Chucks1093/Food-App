import '../styles/dashboard.css'
import Nav from '../components/Nav';
import Products from '../components/Products';
import { useState } from 'react';

function Dashboard() {
     const [isModalActive, setIsModalActive] = useState(false);
     const setModalState = () => setIsModalActive((value)=> !value);
     return(
          <div className="dashboard">
               <Nav />
               <Products modalActive={isModalActive} handleModalState={setModalState} />
               <div onClick={setModalState} 
                    className={`modalOn ${isModalActive? "" : "hide"}`}>
               </div>
          </div>
     )
}

export default Dashboard;