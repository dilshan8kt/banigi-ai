import React, { useState } from 'react'
import footerLogo from "../assets/logo.png"
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import PrivacyPolicy from '../Components/PrivacyPolicy'
import TermsAndCondition from '../Components/TermsAndCondition'
import RefundPolicy from '../Components/RefundPolicy'
const Footer = () => {
  const [showPP ,setShowPP]=useState(false);
  const [showTC ,setShowTC]=useState(false);
  const [showRP ,setShowRP]=useState(false);

  const closeModal=()=>{
    setShowPP(false);
    setShowRP(false);
    setShowTC(false);
  };
  return (
    <>

      <div className="footer_Section">
        <div className="footer_div">

        
        <div className="footer_left">
          <img src={footerLogo} alt="Banigi Ai" />

          <p>Transform your home effortlessly with AI at Banigi AI. Elevate interiors, exteriors, and landscapes seamlessly. Personalized creativity meets efficient custom design. Redefine your space.</p>
          <div className="footer_social_link">

            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>

        <div className="footer_right">
            <div className="footer_quick_lnks">
              <h5>Quick Links</h5>
              <ul>
              <a href="#main_banner"><li>Home</li></a>
              <a href="#pricing"><li>Pricing</li></a>
              <a href="#faq"><li>Faq</li></a>
              <a href="#feedback"><li>Feedback</li></a>
              <a href="#contact_us"><li>Contact Us</li></a> 
              </ul>
            </div>
            <div className="footer_design_types">
                <h5>Design Types</h5>
                <ul>
                  <li>Interior Design</li>
                  <li>Exterior Design</li>
                  <li>Landscape Design</li>
                  <li>Custom Design</li>
                </ul>
            </div>
            <div className="footer_legal">
              <h5>Legal</h5>
              <ul>

                <li onClick={()=>{setShowPP(!showPP)}}>Privacy & Policy</li>
                {showPP && <PrivacyPolicy closeModal={closeModal}/>}
                <li onClick={()=>{setShowTC(!showTC)}}>Terms & Conditions</li>
                {showTC && <TermsAndCondition closeModal={closeModal}/>}
                <li onClick={()=>{setShowRP(!showRP)}}>Refund Policy</li>
                {showRP && <RefundPolicy closeModal={closeModal}/>}
              </ul>
            </div>
        </div>
      </div>
      </div>
      <div className="copyright_div">
        <h5>Copyright 2024 Banigi AI All rights reserved.</h5>
      </div>

    </>
  )
}

export default Footer
