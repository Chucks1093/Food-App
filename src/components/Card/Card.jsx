import './card.scss';
import '../../functions/fadeOut';
import fadeOut from '../../functions/fadeOut';

function Card(props) {

     return(
          <div className="card">
               <div  className="img-container">
                    <img onLoad={fadeOut} src={`${props.image}.jpg`} className="food-img" alt={props.name} />
                    <div className="loader" >
                         <img  src="loader.svg" alt="" />    
                    </div> 
               </div>
               <div className="card-details">
                    <h2>{props.name}</h2>
                    <p>Stir fry pasta yada yada because of sasan</p>
                    <div className="card-values">
                         <img src="star-1.svg" alt="" className="card-star" />
                         <p className="star-value">4.8</p>
                         <p className="card-price">$23</p>
                    </div>
               </div>
          </div>
     )
}

export default Card;