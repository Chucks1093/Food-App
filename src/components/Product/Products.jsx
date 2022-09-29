import './product.scss';
import menuItems from '../../functions/menuItems';
import CartModal from '../Modals/CartModal';
import Orders from '../../page/Cart_&_Orders/Orders';
import Cart from '../../page/Cart_&_Orders/Cart';
import CheckOut from '../CheckOut/CheckOut';
import Profile from '../../page/Profile/Profile';
import Menu from '../Food__Card/FoodCard';
import { useState } from 'react';

function Products(props) {
     let [cardDetails, setCardDetails] = useState({image:"", price: "", name: "", id: 0});

     const changeModalDetails =(e) => {
          const itemImg = e.currentTarget.children[0].children[0].src;
          const itemId = new Date().getTime().toString();
          const itemPrice = e.currentTarget.children[3].children[0].textContent.slice(1);
          const itemName = e.currentTarget.children[1].textContent;
          
          setCardDetails(item=> {
               return {
                    ...item,
                    image : itemImg,
                    price : itemPrice,
                    name : itemName,
                    id : itemId
               }
          });
          props.handleModalState(e);
     }
     
     
     return (
          <main className="products">
               <CartModal 
                    activeModal={props.elementName}
                    details={cardDetails} 
                    handleClick={(e)=>props.handleModalState(e)} 
               />
               <Orders activeModal={props.elementName} />
               <Cart 
                    handleClick={(e)=>props.handleModalState(e)}
                    activeModal={props.elementName} 
               />
               <CheckOut 
                    activeModal={props.elementName}  
               />
               <Profile activeModal={props.elementName} />
               <header>
                    <p className='greetings'>Good Morning, Sebastian!<br/> <span>What delicious meal are you craving for today?</span></p>
                    <img className='user' src="p-1.jpg" alt="" ></img>
               </header>
               <section className='menu-container'>
                    {menuItems.map((item , i)=>{
                         return (
                              <Menu  
                                   key={i} 
                                   handleClick={changeModalDetails} 
                                   img={item.img} 
                                   price={item.price}
                              />
                         )
                    })}
               </section>
          </main>
     )
}

export default Products;