import { useNavigate } from 'react-router-dom';
import '../styles/nav.css'
function Nav(props) {
     const navigate  = useNavigate();

     return (
          <nav className='nav-bar'>
               <div className='nav-top'>
                    <div className='nav-logo-container'>
                         <img onClick={()=> navigate("/")} src="leaf.png" alt="" />
                         <p>Lilies</p>
                    </div>
               </div>
               <div>
                    <div onClick={(e)=>props.handleState(e)} className={`nav-option ${props.elementName.state? "inactive" : "active"}`}><i className="ri-home-4-fill"></i><h3>Dashboard</h3></div>
                    <div onClick={(e)=>props.handleState(e)} className={`profile nav-option ${props.elementName.element == "profile"? "active" : "inactive"}`}><i className="ri-user-3-fill"></i><h3>Profile</h3></div>
                    <div onClick={(e)=>props.handleState(e)} className={`order nav-option ${props.elementName.element == "order"? "active" : "inactive"}`}><i className="ri-calendar-fill"></i><h3>Orders <span className='order-no'>3</span></h3></div>
                    <div onClick={(e)=>props.handleState(e)} className={`cart nav-option ${props.elementName.element == "cart" ? "active" : "inactive"} `}><i className="ri-bookmark-fill"></i><h3>Your Cart <span className='cart-no'>4</span></h3></div>
               </div>
          </nav>
     )
}

export default Nav;