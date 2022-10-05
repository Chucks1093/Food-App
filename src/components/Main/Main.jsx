
import Card from "../Card/Card";
import './main.scss';


function Main(props) {
     return (
          <section className="main">
               <h2>Special Meals of the day.</h2>
               <p>Check our specials of the day and get discount on  all our <br />meals 
               and swift delivery to whatever location you are ! </p>
               <div className="card-container">
                    <Card handleLoad={props.handleLoad} image="show-4"  name="Burger Meal." />
                    <Card handleLoad={props.handleLoad} image="pic-3"  name="Stir fry Pasta." />
                    <Card handleLoad={props.handleLoad} image="pic-8"  name="Fried Meat." />
               </div>
          </section>
     )
}

export default Main;