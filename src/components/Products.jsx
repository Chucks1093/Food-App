import '../styles/products.css';
import menuItems from './menuItems';
import CartModal from './CartModal';
import Menu from './Menu';
import { useState } from 'react';

function Products(props) {
     let [cardDetails, setCardDetails] = useState("");

     const setImage =(e) => {
          let itemImg = e.currentTarget.children[0].children[0].src;
          console.log(itemImg)
          setCardDetails(itemImg);
          props.handleModalState();
     }
     
     // const setImage =(e) => setCardDetails(function(value){
     //      let itemImg = e.currentTarget.children[0].children[0].src;
     //      // console.log(itemImg)
     //      console.log(value)
     //      // const cartModal = e.currentTarget.parentElement.parentElement.children[0];
     //      // props.handleModalState();
     //      return value;
          
     // })
     const openCartModal = (e) => {
          const itemImg = e.currentTarget.children[0].children[0];
          const cartModal = e.currentTarget.parentElement.parentElement.children[0];
          const img = cartModal.children[0].children[0];
          img.src = itemImg.src;
          const modalCover = e.currentTarget.parentElement.parentElement.nextElementSibling;
          cartModal.classList.add('showCart');
          modalCover.classList.remove('hide');
          // console.log(img)
     }
     
     return (
          <main className="products">
               <CartModal modalState={props.modalActive} image={cardDetails} />
               <header>
                    <p className='greetings'>Good Morning, Sebastian!<br/> <span>What delicious meal are you craving for today?</span></p>
                    <img className='user' src="me.jpeg" alt="" ></img>
               </header>
               <section className='menu-container'>
                    {menuItems.map(item=>{
                         return (
                              <Menu handleClick={setImage} 
                                   img={item.img} price={item.price}
                              />
                         )
                    })}
               </section>
          </main>
     )
}

export default Products;