import './hero.scss';
import heroImage from './pizza.png';

function Hero(props) {
     return(
          <section className="hero">
               <div className='hero-content'>
                    <h1> <span className='first-word'>O</span>rder food <span className='advantage'>anytime,</span>  <br/> anywhere. </h1>
                    <p className="ad-word">Browse from our list of specials to place your order and have food <br /> delivered to you, in no time. Affordable, tasty and fast ! </p>
                    <div className="btn-container">
                         <div className='apple-btn'>
                              <i className="ri-apple-fill apple"></i>
                              <p className='btn-word'>GET ON</p>
                              <p className='source'>App Store</p>
                         </div>
                         <div className='google-btn'>
                              <img src="google.svg" alt="" />
                              <p className='btn-word'>Download from</p>
                              <p className='source'>Google Play</p>
                         </div>
                    </div>
               </div>
               <div className="hero-img-container">
                    <img className="hero-image" src={heroImage} alt="" />
               </div>
          </section>
     )
}

export default Hero;