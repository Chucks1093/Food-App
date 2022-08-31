import { useState } from "react";

function Item(props) {
     let [itemStatus, setItemStatus] = useState("Cooking...");
     if (props.isOrder) {
          itemStatus = props.amount * props.price;
     } 
     setTimeout(() => {
          if (!props.isOrder) {
               setItemStatus("Delivered");
          }
     }, 20000);
     return (
          <div className="item">
               <div className="item-status-container">
                    <img src={`${props.image}.jpg`} alt="" />
                    <div>
                         <h3 className="item-name">Stir Fry Pasta</h3>
                         <button>Remove</button>
                    </div>
               </div>
               <p className="item-quantity">{props.amount}</p>
               <p className="item-price">N {props.price}</p>
               <p  className={`${props.isOrder? "item-price" : "item-status"}  ${itemStatus=="Delivered"? "done" : "progress"}` }>{itemStatus}</p>
          </div>
     )
}

export default Item;