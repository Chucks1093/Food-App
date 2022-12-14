import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './side-bar.scss';
import getLocalStorage from '../../functions/getLocalStorage';
import getOrderStorage from '../../functions/getOrderStorage';

function Nav(props) {
     const navigate  = useNavigate();
     const [foodNo, setFoodNo] = useState({cartNo : getLocalStorage(), orderNo : getOrderStorage() });

     useEffect(()=>{
          setFoodNo((value)=>{
               return {
                    ...value,
                    cartNo: getLocalStorage(),
                    orderNo : getOrderStorage()
               }
          })
     }, [props.elementName.element == "btn" || props.elementName.element == "checkout-cover" || props.elementName.element == "modalOn" ? true : false])

     return (
          <nav className='nav-bar'>
               <div className='nav-top'>
                    <div className='nav-logo-container'>
                         <img onClick={()=> navigate("/")} src="logo-blue.svg" alt="" />
                         <p>Lilies</p>
                    </div>
               </div>
               <div>
                    <div  className={`nav-option ${props.elementName.state? "inactive" : "active"}`}><i className="ri-home-4-line"></i><h3>Dashboard</h3></div>
                    <div onClick={(e)=>props.handleState(e)} className={`profile nav-option ${props.elementName.element == "profile"? "active" : "inactive"}`}><i className="ri-user-line"></i><h3>Profile</h3></div>
                    <div onClick={(e)=>props.handleState(e)} className={`order nav-option ${props.elementName.element == "order"? "active" : "inactive"}`}><i className="ri-calendar-line"></i><h3>Orders <span className='order-no'>{foodNo.orderNo.length}</span></h3></div>
                    <div onClick={(e)=>props.handleState(e)} className={`cart nav-option ${props.elementName.element == "cart" ? "active" : "inactive"} `}><i className="ri-bookmark-line"></i><h3>Your Cart <span className='cart-no'>{foodNo.cartNo.length}</span></h3></div>
                    <div onClick={(e)=>props.handleState(e)} className="nav-option log-out inactive"><i className="ri-logout-box-line"></i><h3>Log Out</h3></div>
               </div>
          </nav>
     )
}

export default Nav;