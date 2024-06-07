import React from "react";
import "./contactUs.css";

export default function contactUs() {
  return (
    <div className="contact">
      contactUs
      <div className="contact-form">
        <div className="contact-us">
          <div className="line">
            <h2>How to reach us</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consetetur.</p>
        </div>
      </div>
      <form className="form">
        <div className="label">
          <div className="label-name">
            <label for="fname">First name *</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="label-lname">
            <label for="lname">Last name *</label>
            <input type="text" id="lname" name="lname" />
          </div>
        </div>
        <div className="input-field">
          <label for="fname">Email *</label>
          <input type="text" id="email" name="email" />
          <div className="telephone">
            <label for="lname">Telephone</label>
            <input type="text" id="telephone" name="telephone" />
          </div>
          <div className="message">
            <label for="lname">Message</label>
            <input type="text" id="message" name="message" />
          </div>
          <span class="required-field">*required field</span>
          <div class="checkbox-container">
            <input type="checkbox" id="terms" name="terms" required />
            <label for="terms">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>
          <div className="submit">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="google-map">
        <iframe
          title="eBEYONDS Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63353.83079651835!2d79.84382727823327!3d6.927078179599667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594ee2b99b07%3A0x282d8a60d021e7d8!2seBEYONDS!5e0!3m2!1sen!2slk!4v1686434309577!5m2!1sen!2slk"
          width="1000"
          height="550"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
