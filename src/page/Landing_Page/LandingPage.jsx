import TopNav from "../../components/TopNav/TopNav";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import fadeOut from "../../functions/fadeOut"
import './landing__page.scss';

function landingPage() {
     return(
          <div className="landing-page">
               <TopNav />
               <Hero  handleLoad={fadeOut} />
               <Main handleLoad={fadeOut} />
               <Form />
               <Footer />
          </div>
     )
}

export default landingPage;
