import React from 'react'
import modalClose from "../assets/modalClose.png"

const PrivacyPolicy = ({ closeModal }) => {
  return (
    <>
      <div className="legalModalContainer">

        <div className="legalModalDiv">


          <div className="modalHeader">
            <h3>Privacy and Policy</h3>
            <img src={modalClose} alt="" onClick={closeModal} />
          </div>

          <div className="modalText">
            <p>At BanigiAI, protecting our users privacy is a top priority. We are committed to ensuring the confidentiality and security of your personal information. This privacy policy outlines our practices concerning the collection, use, and sharing of personal information through our website and mobile application.
              Information We Collect
            </p>

            <span className='policySubHeading'>Use of Personal Information</span>

            <p>We utilize the personal information we collect to maintain and enhance our website and services. We may also use it to send you promotional materials or updates.
              Sharing of Personal Information
              We may share your personal information with third parties, such as service providers, to facilitate our services or as required by law.
            </p>

            <span className='policySubHeading'>Security of Personal Information</span>
            <p>We employ reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, we cannot guarantee absolute security.
              Cookies and Other Technologies
              We utilize cookies and similar technologies to enhance your browsing experience and gather information about website usage.
            </p>
            <span className='policySubHeading'>Links to Other Websites
            </span>
            <p>Our website may contain links to third-party websites, whose privacy practices may differ from ours. This privacy policy applies solely to information collected by our website.
            </p>
            <span className='policySubHeading'>Changes to this Privacy Policy
            </span>
            <p>We may update this privacy policy periodically. Any changes will be communicated by posting the revised policy on our website.
            </p>
            <span className='policySubHeading'>
              Contact Us
            </span>
            <p>If you have any questions or concerns regarding our privacy policy, please contact us at https://BanigiAI.reamaze.com.
            </p>
          </div>


        </div>

      </div>

    </>
  )
}

export default PrivacyPolicy
