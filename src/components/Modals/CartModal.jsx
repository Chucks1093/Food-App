import './cart-modal.scss';
import { useState} from "react";
import getLocalStorage from '../../functions/getLocalStorage';

function CartModal(props) {
     const [quantity, setQuantity] = useState(0);
     
     const addToLocalStorage = (e) => {
          props.handleClick(e)  
          const foodInfo = {
               image: props.details.image,
               name : props.details.name,
               price : props.details.price,
               amount : quantity,
               id : props.details.id
          }
          let items = getLocalStorage();
          items.push(foodInfo);
          console.log(items)
          localStorage.setItem("items", JSON.stringify(items))
          setQuantity(0)
     }

     const alertUser=(e)=> {
          const element = e.currentTarget.previousElementSibling.children[1];
          console.log(element)
          element.classList.add('wrong');
          setTimeout(()=>{
               element.classList.remove('wrong');
          }, 1200)
     }

     const increaseQuantity = () => setQuantity((value)=>value+1);

     const decreaseQuantity = () => setQuantity((value)=>value <= 0? 0 : value - 1);
     
     return (
          <div  className={`cart-modal ${props.activeModal.state && props.activeModal.element== "menu"  ? "showCart" : "" }`}>
               <div className='cart-modal-details'>
                    <img className='cart-modal-img' src={props.details.image} alt={props.details.image} />
                    <h3>{props.details.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur recusandae quos porro a fuga dicta deleniti dolore eveniet aperiam iusto aliquid repudiandae consequuntur cum sed, adipisci quia. Dicta, facilis quidem? Perspiciatis, deleniti non voluptatem fuga labore beatae ipsa velit. Possimus.</p>
                    <div className='cart-modal-info'>
                         <p>NGN {props.details.price}</p>
                         <p>10 - 20 Mins</p>
                         <p>10 Pcs Avail</p>
                    </div>
                    <div className="cart-modal-btns">
                         <div className='quantity-btns'>
                              <i onClick={increaseQuantity} className="ri-add-fill"></i>
                              <p>{quantity}</p>
                              <i onClick={decreaseQuantity} className="ri-subtract-fill"></i>
                         </div>
                         <button className='btn' onClick={quantity ==0 ? alertUser : addToLocalStorage}>Add to Cart</button>
                    </div>
               </div>
          </div>
     )
}

export default CartModal;