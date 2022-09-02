import { useEffect, useState } from 'react';
import getLocalStorage from './getLocalStorage';
import getOrderStorage from './getOrderStorage';
import '../styles/check-out.css';

function CheckOut(props) {
     const [word, setWord] = useState({text :"Make payment", mode: "" });

     const changeWord =() => {
          setWord((value)=> {
               return {
                    ...value,
                    text : "Making payment",
                    mode : "paying"
               }
          });

          setTimeout(()=> {
               setWord((value)=> {
                    return {
                         ...value,
                         text : "Payment made",
                         mode : "paid"
                    }
               });
          }, 4000);
          const checkouts = getLocalStorage();
          let orders = getOrderStorage();
          orders = [...orders, ...checkouts];
          localStorage.setItem("orders", JSON.stringify(orders));
          localStorage.removeItem('items');
     }

     useEffect(()=>{
          console.log("resetting payment")
          setWord((value)=> {
               return {
                    ...value,
                    text : "Make payment",
                    mode : ""
               }
          });
     }, [props.activeModal.element == "checkout-cover" ? true : false])
     
     return(
          <div className={`checkout-page ${props.activeModal.element=="checkout-btn" ? "show-checkOut" : ""}`}>
               <div className="checkout-details">
                    <h1>Checkout</h1>
                    <form onClick={(e)=>e.preventDefault()} className='checkout-form'>
                         <input type="number" placeholder='Card Number' />
                         <input className='date-input' type="date" placeholder='Exp Date' />
                         <div className='card-identity'>
                                   <input type="number" placeholder='CVV/CVV2'/>
                                   <img className='card-sign' src="master-card.svg" alt="master-card-sign" />
                              </div>
                         <input type="password" placeholder='Card Pin'/>
                         <div className='action-btn-container'>
                              <button onClick={ word.mode == "paid" ? undefined :changeWord} className='pay-btn'>{word.text}<i className={`ri-checkbox-circle-fill ${word.mode=="paid"? "show-logo" : "hide-logo"}`}></i>
                              <img className={`checkout-loader  ${word.mode=="paying"? "show-logo" : "hide-logo"}`} src="ring.svg" alt="" />
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     )
}

export default CheckOut;