import React, { useState } from "react";
import "./contactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    telephone: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.fname.trim()) errors.fname = "First name is required";
    if (!formData.lname.trim()) errors.lname = "Last name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    if (!formData.terms)
      errors.terms = "You must agree to the terms and conditions";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", formData);
    }
  };

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
      <form className="form" onSubmit={handleSubmit}>
        <div className="label">
          <div className="label-name">
            <label for="fname">First name *</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="label-lname">
            <label for="lname">Last name *</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-field">
          <label for="fname">Email *</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <div className="telephone">
            <label for="lname">Telephone</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>
          <div className="message">
            <label for="lname">Message</label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <span class="required-field">*required field</span>
          <div class="checkbox-container">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <label for="terms">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
            {errors.terms && <span className="error">{errors.terms}</span>}
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
