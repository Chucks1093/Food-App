
import Card from "../Card/Card";
import './main.scss';


function Main(props) {
     return (
          <section className="main">
               <h2>Special Meals of the day !</h2>
               <p>Check our specials of the day and get discount on all our meals <br />
               and swift delivery to whatever location in ilorin. </p>
               <div className="card-container">
                    <Card handleLoad={props.handleLoad} image="show-5"  name="Stir fry Pasta" />
                    <Card handleLoad={props.handleLoad} image="show-4"  name="Fried Meat" />
                    <Card handleLoad={props.handleLoad} image="show-6"  name="Burger Meal" />
               </div>
          </section>
     )
}

export default Main;