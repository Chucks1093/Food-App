import { useState } from "react";
import '../styles/item.css';


function Item(props) {
     let [itemStatus, setItemStatus] = useState(!props.isOrder? props.amount * props.price : "Cooking..." );
     
     setTimeout(() => {
          if (props.isOrder) {
               setItemStatus("Delivered");
          }
     }, 20000);

     return (
          <div className="item">
               <div className="item-status-container">
                    <img src={`${props.image}`} alt="" />
                    <div>
                         <h3 className="item-name">Stir Fry Pasta</h3>
                         <button 
                              className="remove-cart-btn" 
                              onClick={()=>props.handleClick(props.id)}>Remove</button>
                    </div>
               </div>
               <p className="item-quantity">{props.amount}</p>
               <p className="item-price">{props.price}</p>
               <p  className={`${!props.isOrder? "item-price" : "item-status"}  ${itemStatus=="Delivered"? "done" : "progress"}` }>{itemStatus}</p>
          </div>
     )
}

export default Item;