import contactImg from "../../../assets/contactImg.png";
import PrimaryButton from "../../../Components/PrimaryButton";

const ContactUs = () => {
  return (
    <>
    <div className="contactUsContainner" >

    
      <div className="contactUsSection">
        <h3>
          <span>Contact</span> Us
        </h3>

        <div className="contactusDiv"id="contact_us">
          <div className="contactUsLeft">
            <img src={contactImg} alt="" />
            <p>
              Our communication hub awaits! Here, you&#39;ll find various
              channels to connect with us. Whether you have questions, feedback,
              or need assistance, we&#39;re just a message away. Explore our contact
              form and social media links to get in touch. We value your input
              and are here to assist you promptly!
            </p>
          </div>
          <div className="contactUsRight">

            <div className="contactForm">
              <form action="">
                <label htmlFor="email">Email</label>
                <input type="email" />
                <label htmlFor="topic">Topic Title</label>
                <input type="text" />
                <label htmlFor="message">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>

                <button className="submitBtn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactUs;
