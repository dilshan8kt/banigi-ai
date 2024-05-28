import React from 'react'
import modalClose from "../assets/modalClose.png"

const RefundPolicy = ({closeModal}) => {
  return (
    <>
      <div className="legalModalContainer">

        <div className="legalModalDiv">


          <div className="modalHeader">
            <h3>Refund Policy</h3>
            <img src={modalClose} alt="" onClick={closeModal} />
          </div>

          <div className="modalText">
            <p>At BanigiAI, we are dedicated to providing exceptional service. However, we understand that refunds may be necessary in certain circumstances. Our refund policy is as follows:
              Process
              To request a refund, please contact our customer support team at https://BanigiAI.com. Our team will review your request and provide instructions for the refund process. Refunds will be issued to the original payment method within a reasonable timeframe.

            </p>

            <span className='policySubHeading'>Exceptions
            </span>

            <p>Refunds may not be provided if more than 7 days have passed since the purchase, if the service has been extensively used (over 100 designs generated), if proof of purchase is unavailable, or if the customer violates our terms of service.

            </p>

            <span className='policySubHeading'>Changes to this Refund Policy

            </span>
            <p>This refund policy is subject to change without notice.
By using BanigiAIs services, you acknowledge that you have read, understood, and agreed to be bound by this refund policy. For any inquiries regarding our refund policy, please contact our customer support team.

            </p>
           
          </div>


        </div>

      </div>

    </>
  )
}

export default RefundPolicy
