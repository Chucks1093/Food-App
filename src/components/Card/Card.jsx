import './card.scss';
import '../../functions/fadeOut';
import fadeOut from '../../functions/fadeOut';
import '../Food__Card/food-card.scss';

function Card(props) {

     return(
          <div className="card  ">
               <div  className="img-container">
                    <img onLoad={fadeOut} src={`${props.image}.jpg`} className="food-img" alt={props.name} />
                    {/* <div className="loader" >
                         <img  src="loader.svg" alt="" />    
                    </div>  */}
               </div>
               <div className="card-details">
                    <h2>{props.name}</h2>
                    <p>{props.word}.</p>
                    <div className="card-values">
                         <img src="star-1.svg" alt={props.image} className="card-star" />
                         <p className="star-value">{props.starValue}</p>
                         <p className="card-price">${props.cardPrice}</p>
                    </div>
               </div>
          </div>
     )
}

export default Card;