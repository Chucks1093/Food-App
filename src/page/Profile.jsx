
import "../styles/profile.css";
import "../styles/cart-modal.css";


function Profile(props) {
     return (
          <div className={`profile-2 ${props.activeModal.state && props.activeModal.element== "profile"  ? "show-profile" : "" }`}>
               <div className='cart-modal-details'>
                    <img className='cart-modal-img' src="me.jpeg" alt="my image" />
                    <h3>Anioke Sebastian</h3>
                    <p className="profile-info">Hey there, I built this Food application to properly master the React javascript framework and also to showcase my skill as a frontend developer. I hope you have great experience as you interact with it ! .</p>
                    <div className='cart-modal-info'>  
                         <div className="profile-skill-img-container"><img className="skill-img" src="sass.svg" alt="" /></div>
                         <div className="profile-skill-img-container"><img className="skill-img" src="react.svg" alt="" /></div>
                         <div className="profile-skill-img-container"><img className="js-skill-img" src="javascript.svg" alt="" /></div>
                    </div>
               </div>
          </div>
     )
}

export default Profile;