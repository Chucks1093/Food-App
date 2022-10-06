
import './food-card.scss';
import fadeOut from '../../functions/fadeOut';

function FoodCard(props) {
     
     return(
          <div onClick={props.handleClick} className='menu'>
               <div className='menu-img-container'>
                    <img onLoad={fadeOut} className='menu-img' src={`${props.img}.jpg`} alt={props.img} />
                    <div className='menu-image-loader'>
                         <img src="loader.svg" alt="" />
                    </div>
               </div>
               <h2 className='menu-name'>Stir Fry Pasta</h2>
               <p className='menu-info'>The in-house pasta and chicken by chef moose.</p>
               <div className='menu-value'>
                    <p className='menu-price'>{`N ${props.price}`}</p>
                    <button className='menu-cart-btn'>Add <i className="ri-shopping-cart-line"></i></button>
               </div>
          </div>
     )
}

export default FoodCard;