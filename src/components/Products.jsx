import '../styles/products.css';
import menuItems from './menuItems';
import CartModal from './CartModal';
import Orders from '../page/Orders';
import Cart from '../page/Cart';
import Menu from './Menu';
import { useState } from 'react';

function Products(props) {
     let [cardDetails, setCardDetails] = useState("");

     const setImage =(e) => {
          let itemImg = e.currentTarget.children[0].children[0].src;
          console.log(itemImg)
          setCardDetails(itemImg);
          props.handleModalState(e);
     }
     
     
     return (
          <main className="products">
               <CartModal 
                    activeModal={props.elementName}
                    image={cardDetails} 
                    handleClick={(e)=>props.handleModalState(e)} 
               />
               <Orders activeModal={props.elementName} />
               <Cart activeModal={props.elementName} />
               <header>
                    <p className='greetings'>Good Morning, Sebastian!<br/> <span>What delicious meal are you craving for today?</span></p>
                    <img className='user' src="p-1.jpg" alt="" ></img>
               </header>
               <section className='menu-container'>
                    {menuItems.map(item=>{
                         return (
                              <Menu  
                                   key={item.img} 
                                   handleClick={setImage} 
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