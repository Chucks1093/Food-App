import '../styles/cart.css';
import '../styles/orders.css';
import Item from '../components/Item';
import getLocalStorage from '../components/getLocalStorage';
import { useState, useEffect } from 'react';

function Cart(props) {
     const [cartItems, setCartItems] = useState(getLocalStorage);
     const [totalItemsPrice, setTotalItemsPrice] = useState(0)

     const deleteItem = (id) => {
          let items = getLocalStorage();
          items = items.filter(item=> {
               if (item.id !== id) {
                    return item;
               }
          })
          setCartItems(items);
          setTotalItemsPrice(()=>{
               let initial = 0;
               items.forEach((item) => {
                    initial += (item.price * item.amount);
               })
               return initial;
          })
          localStorage.setItem("items", JSON.stringify(items));
     }


     useEffect(()=>{
          setCartItems(getLocalStorage)
          setTotalItemsPrice(()=>{
               let initial = 0;
               cartItems.forEach((item) => {
                    initial += (item.price * item.amount);
               })
               return initial;
          })
     }, [props.activeModal.element == "btn" || props.activeModal.element=="checkout-cover"? true : false])

     
     return(
          <div className={`cart-page ${props.activeModal.state && props.activeModal.element=="cart"? "show-cart" : ""}`}>
               <h1>Your Cart</h1>
               <div className="cart-table">
                    <p>Item</p>
                    <p>Qty</p>
                    <p>Unit Price</p>
                    <p>Sub-total</p>
               </div>
               <div className="contain-items">
                    {cartItems.map((item, i)=>{
                         return <Item 
                                   key={i} 
                                   handleClick={deleteItem} 
                                   id={item.id} 
                                   price={item.price} 
                                   amount={item.amount} 
                                   image={item.image} 
                              />
                    })}
               </div>
               <div className='total-section'>
                    <p className='total-word'>Total : </p>
                    <p className='total-value'>NGN {totalItemsPrice}</p>
               </div>
               <button 
                    onClick={(e)=>props.handleClick(e)} 
                    className={`checkout-btn ${!totalItemsPrice ? "hide-checkout-btn" : "" }`}>Checkout</button>
          </div>
     )
}

export default Cart;