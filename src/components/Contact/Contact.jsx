import React from "react";
import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <div className={styles.contact_Wrapper}>


    
    <div className={styles.contact_container}>
      <div className={styles.contact_info}>
        <h4>Get in touch</h4>
        <p className={styles.contact_Desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in
          optio architecto expedita amet possimus laudantium. Magni eaque soluta
          voluptas.
        </p>
        <p className={styles.contact_Address}>
          123 Main Street <br></br> 
          Bangkok, Thailand
        </p>
        <p className={styles.contact_InfoDetails}>
          <FaPhone /> (+66) 0888229655
        </p>
        <p className={styles.contact_InfoDetails}>
          <FaEnvelope />  noy186@gmail.com
        </p>
      </div>
      <div className={styles.contact_form}>
        <form action="">
          <div className={styles.input_group}>
            <div>
              <label htmlFor="first name">First name</label>
              <input type="text" placeholder="eg. noy" />
            </div>
            <div>
              <label htmlFor="last name">Last name</label>
              <input type="text" placeholder="eg. Potijinda" />
            </div>
          </div>

          <label htmlFor="Email address">Email Address</label>
          <input type="email" placeholder="eg. noy186@gmail.com" />
          <label htmlFor="message">Your message</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Type here"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;
