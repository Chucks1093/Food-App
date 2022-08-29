
function Footer() {
     return (
          <footer className="footer">
               <div className="company-info">
                    <div className="column">
                         <h3>Company</h3>
                         <p>About Us</p>
                         <p>Careeres</p>
                         <p>Contact Us</p>
                    </div>
                    <div className="column">
                         <h3>Support</h3>
                         <p>Help Center</p>
                         <p>Safety Center</p>
                    </div>
                    <div className="column">
                         <h3>Legal</h3>
                         <p>Cookies Policy</p>
                         <p>Privacy Policy</p>
                         <p>Terms Of Service</p>
                    </div>
                    <div>
                         <h3>Install App</h3>
                         <div className="install-container">
                              <div>
                                   <i className="ri-apple-fill apple"></i>
                                   <div>
                                        <p>GET ON</p>
                                        <p className="app-name">App Store</p>
                                   </div>
                              </div>
                              <div>
                                   <img src="google.svg" alt="" />
                                   <div>
                                        <p>Download from</p>
                                        <p className="app-name">Google Play</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <hr />
               <div className="company-sign">
                    <p>{`© ${new Date().getFullYear()} Lilies. All rights reserved`}</p>
                    <div className="social-icons">
                         <i className="ri-instagram-line"></i>
                         <i className="ri-twitter-fill"></i>
                         <i className="ri-youtube-fill"></i>
                    </div>
               </div>

          </footer>
     )
}

export default Footer;