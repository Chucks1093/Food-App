import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Form from "../components/Form";
import Footer from "../components/Footer";
import '../styles/landing.css'

function Landing() {
     const fadeOut = (e) => {
          const loader = e.currentTarget.nextElementSibling;
          loader.style.opacity = 0;
     }
     return(
          <div className="landing">
               <Header />
               <Hero  handleLoad={fadeOut} />
               <Main handleLoad={fadeOut} />
               <Form />
               <Footer />
          </div>
     )
}

export default Landing;
