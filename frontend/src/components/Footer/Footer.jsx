import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img src={assets.logo} alt=""/>
              <p>wtf</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className='footer-content-center'>
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
                <div className="footer-content-right">                 
                  <h2>Get in Touch</h2>
                  <ul>
                    <li>016-960 2378</li>
                    <li> onglai0801@gmail.com</li>
                  </ul>
                </div>
            </div>
        <hr/>
        <p className="footer-copyright">no steal bro</p>
    </div>
  )
}
export default Footer