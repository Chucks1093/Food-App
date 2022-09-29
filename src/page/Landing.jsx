import Header from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main";
import Form from "../components/Form";
import Footer from "../components/Footer";
import fadeOut from "../components/fadeOut"
import '../styles/landing.scss'

function Landing() {
     return(
          <div className="landing">
               <Header />
               <Hero  handleLoad={fadeOut} />
               {/* <Main handleLoad={fadeOut} /> */}
               {/* <Form /> */}
               {/* <Footer /> */}
          </div>
     )
}

export default Landing;
