import "../styles/orders.css";
import Item from "../components/Item";
function Orders(props) {
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
                    <Item price={2500} amount={2} image="card-1" />
                    <Item price={2500} amount={2} image="card-1" />
                    <Item price={2500} amount={2} image="card-1" />
               </div>
          </div>
     )
}

export default Orders;