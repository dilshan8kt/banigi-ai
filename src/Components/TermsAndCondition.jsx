import React from 'react'
import modalClose from "../assets/modalClose.png"

const TermsAndCondition = ({ closeModal }) => {
  return (
    <>
      <div className="legalModalContainer">

        <div className="legalModalDiv">


          <div className="modalHeader">
            <h3>Term and Conditions</h3>
            <img src={modalClose} alt="" onClick={closeModal} />
          </div>

          <div className="modalText">
            <p>Welcometo BanigiAI, an innovative online platform that harnesses artificial intelligenceto create inspiring ideas for home interiors, exteriors, and landscapes. Byaccessing or using our website, located at www.banigiai.com, you agree toadhere to the following terms and conditions, along with any additionalguidelines and future updates. If you do not agree to these terms, kindlyrefrain from using our website.
            </p>

            <span>PrivacyPolicy</span>

            <p>AtBanigiAI, safeguarding the privacy of our users is paramount. We are dedicatedto protecting personal information. Our privacy policy, which is an integralpart of these terms of service, can be found athttps://banigiai.com/privacy-policy. It outlines the types of information wecollect, how we utilize it, and the measures we take to ensure its security. Byutilizing our website, you acknowledge and consent to our privacy policy.
              FairUsage Policy for PRO Plan Users
              Whileour PRO plan provides users with unlimited design generations, we enforce afair usage policy to maintain the optimal performance of our services andprevent potential abuse. Under this policy, any user exceeding 300 designgenerations within a 24-hour period will face temporary account restrictions.If you believe your account has been restricted in error or wish to discussthis limitation, please contact us at support@panigi.ai. We will conduct athorough investigation to ensure there is no misuse, such as the use of bots orautomated processes, which could overload our servers. Once the investigationconcludes and no misuse is detected, the fair usage restriction will be lifted.We appreciate your cooperation in ensuring a seamless experience for all users.
            </p>

            <span>AILimitations</span>
            <p>TheBanigiAI application employs artificial intelligence to generate home designideas. However, we cannot control the AI output and cannot guarantee itsaccuracy, suitability, or completeness for any specific purpose. The AI outputis provided for informational and creative inspiration only. Users should seekprofessional advice before acting on any information provided by theapplication.
            </p>
            <span>UserContent
            </span>
            <p>You are solely responsible for any content you upload to BanigiAI, includingphotographs, images, and designs. By uploading such content, you affirm thatyou possess the necessary rights and licenses and that it does not infringeupon any intellectual property or other rights of third parties. Furthermore,you agree not to upload any illegal, pornographic, or offensive content.BanigiAI reserves the right to remove any content violating these terms ofservice.
            </p>
            <span>Liability
            </span>
            <p>BanigiAIshall not be held liable for any damages, including direct, indirect,incidental, consequential, or punitive damages, arising from the use of ourwebsite or the AI-generated output. This includes but is not limited to loss ofprofits, business interruption, loss of information, or any other financialloss.
            </p>
            <span>
            Support
            </span>
            <p>Forinquiries or support, please contact us at https://BanigiAI.com. We strive torespond promptly to all inquiries.
            </p>

            <span>Changes to Terms of Service</span>
            <p>BanigiAIretains the right to modify these terms of service at any time without priornotice. By continuing to use our website after such changes, you acknowledgeand agree to be bound by the revised terms. It is your responsibility toperiodically review these terms for updates.</p>
        
          <span>Governing Law</span>
          <p>Theseterms of service and any disputes arising from them shall be governed by thelaws of the country in which BanigiAI is headquartered.</p>
        
          <span>EntireAgreement</span>
          <p>Theseterms of service constitute the entire agreement between you and BanigiAIregarding the use of our website. By using BanigiAI, you acknowledge that youhave read, understood, and agree to be bound by these terms.</p>


          </div>


        </div>

      </div>

    </>
  )
}

export default TermsAndCondition
