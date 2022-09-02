import "../styles/orders.css";
import Item from "../components/Item";
import { useState, useEffect } from "react";
import getOrderStorage from "../components/getOrderStorage";


function Orders(props) {
     const [orderItems, setOrderItems] = useState(getOrderStorage);
     const deleteItem = (id) => {
          let items = getOrderStorage()
          items = items.filter(item=> {
               if (item.id !== id) {
                    return item;
               }
          })
          setOrderItems(items);
          localStorage.setItem("orders", JSON.stringify(items));
     }

     useEffect(()=>{
          setOrderItems(getOrderStorage)
     }, [props.activeModal.element == "checkout-cover" ? true : false]);

     return (
          <div className={` orders ${props.activeModal.state && props.activeModal.element=="order"? "show-order" : ""}`}>
               <h1>Your Orders.</h1>
               <div className="cart-table">
                    <p>Item</p>
                    <p>Qty</p>
                    <p>Price</p>
                    <p>Status</p>
               </div>
               <div className="contain-items">
                    {orderItems.map((item, i)=>{
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
          </div>
     )
}

export default Orders;