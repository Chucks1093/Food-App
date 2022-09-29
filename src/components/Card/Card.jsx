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
               <h2>{props.name}</h2>
               <p>Stir fry pasta yada yada yada <br />
               because of Sasan.</p>
          </div>
     )
}

export default Card;