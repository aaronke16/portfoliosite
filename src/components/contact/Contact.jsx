import "./contact.css";
import React, { useState } from "react";

const Contact = () => {
  const [formResponse, setFormResponse] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      setFormResponse("Please fill out all required fields.");
      return;
    }

    const API_SECRET = process.env.REACT_APP_API_SECRET;
    if (!API_SECRET) {
      setFormResponse("API key is missing. Please check your configuration.");
      return;
    }

    formData.append("access_key", API_SECRET);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();
      if (result.success) {
        setFormResponse("Your message was sent successfully!");
        event.target.reset();
      } else {
        setFormResponse("There was an issue sending your message. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setFormResponse("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="contact container section" id="contact">
      <div className="contact__container grid">
        <div className="contact__info">
          <h2 className="section__title">Get In Touch</h2>
          <p className="contact__details">Let's chat! Send me an email!</p>
        </div>

        <form className="contact__form" onSubmit={onSubmit}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>
            <div className="contact__form-div">
              <input
                type="text"
                name="subject"
                className="contact__form-input"
                placeholder="Insert your subject"
                required
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </div>
        </form>
      </div>

      {formResponse && <p className="form-response">{formResponse}</p>}
    </section>
  );
};

export default Contact;
