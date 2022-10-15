
import Card from "../Card/Card";
import './main.scss';


function Main(props) {
     return (
          <section className="main">
               <h2>Special Meals of the day.</h2>
               <p>Check our specials of the day and get discount on  all our <br />meals 
               and swift delivery to whatever location you are ! </p>
               <div className="card-container">
                    <Card handleLoad={props.handleLoad} word="Stir fry pizza til because of sasan" starValue="4.3" cardPrice="410" image="show-4"  name="Burger Meal. " />
                    <Card handleLoad={props.handleLoad} image="pic-3"  name="Stir fry Pasta." word="Stir fry pizza til because of sasan" starValue="4.3" cardPrice="410" />
                    <Card handleLoad={props.handleLoad} image="pic-8"  name="Fried Meat." word="Stir fry pizza til because of sasan" starValue="4.3" cardPrice="410" />
               </div>
          </section>
     )
}

export default Main;