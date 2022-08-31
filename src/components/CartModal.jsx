import '../styles/cart-modal.css';
import {useState} from "react";

function CartModal(props) {
     const [quantity, setQuantity] = useState(0);
     

     const increaseQuantity = () => setQuantity((value)=>value+1);

     const decreaseQuantity = () => setQuantity((value)=>value <= 0? 0 : value - 1);
     
     return (
          <div  className={`cart-modal ${props.activeModal.state && props.activeModal.element== "menu"  ? "showCart" : "" }`}>
               <div className='cart-modal-details'>
                    <img className='cart-modal-img' src={props.image} alt="" />
                    <h3>Baby Pepper</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur recusandae quos porro a fuga dicta deleniti dolore eveniet aperiam iusto aliquid repudiandae consequuntur cum sed, adipisci quia. Dicta, facilis quidem? Perspiciatis, deleniti non voluptatem fuga labore beatae ipsa velit. Possimus.</p>
                    <div className='cart-modal-info'>
                         <p>NGN 2000.00</p>
                         <p>10 - 20 Mins</p>
                         <p>10 Pcs Avail</p>
                    </div>
                    <div className="cart-modal-btns">
                         <div className='quantity-btns'>
                              <i onClick={increaseQuantity} className="ri-add-fill"></i>
                              <p>{quantity}</p>
                              <i onClick={decreaseQuantity} className="ri-subtract-fill"></i>
                         </div>
                         <button className='btn' onClick={(e)=>props.handleClick(e)}>Add to Cart</button>
                    </div>
               </div>
          </div>
     )
}

export default CartModal;