import '../styles/cart.css';
import '../styles/orders.css';
import Item from '../components/Item';
import menuItems from '../components/menuItems';
import { useState } from 'react';

function Cart(props) {
     const [sum, setSum] = useState(0);
     const getSum = (initial) => {
          menuItems.forEach(item => {
               console.log(item.price)
               initial += item.price * 2;
          })
          setSum(initial);
     }
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
                    {menuItems.map((item)=>{
                         return <Item price={item.price} amount={2} image="card-1" isOrder={true} />
                    })}
               </div>
               <p>{sum}</p>
          </div>
     )
}

export default Cart;