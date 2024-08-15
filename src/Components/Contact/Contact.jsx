
import React, { useEffect, useState } from "react";
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
    const [msg,setmsg]=useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "df4903a9-5235-47f0-a343-e74b55c9d2bc");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Request Submitted")
        }

        setmsg("Your request Submitted Successfully");
    }

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div id="contact" className="contact">
            <div data-aos="fade-up" className="contact-title">
                <h1>Contact Form</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1 data-aos="fade-up">Let's talk</h1>
                    <p data-aos="fade-up"> If you have a website, it might not seem like the page you need to prioritize, but that’s a huge mistake, especially considering that it’s one of the most valuable pages on your website and, typically, one of the most visited site pages.</p>
                    <div className="contact-details">
                        <div data-aos="fade-up" className="contact-datail">
                            <FontAwesomeIcon icon={faEnvelope} /><p>sunatkumar516@gmail.com</p>
                        </div>
                        <div data-aos="fade-up" className="contact-datail">
                            <FontAwesomeIcon icon={faPhone} /><p>+91-6370822753</p>
                        </div>
                        <div data-aos="fade-up" className="contact-datail">
                            <FontAwesomeIcon icon={faLocationDot} /><p>Bhubaneswer</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <p data-aos="fade-up" style={{color:"green"}}>{msg}</p>
                    <label data-aos="fade-up">Your Name</label>
                    <input data-aos="fade-up" type="text" placeholder="Enter Your Name" name="name"/>
                    <label data-aos="fade-up">Your Email</label>
                    <input data-aos="fade-up" type="email" placeholder="Enter Your Email" name="email" />
                    <label data-aos="fade-up">Write Your message here</label>
                    <textarea data-aos="fade-up" name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button data-aos="fade-up" type="submit" className="contact-submit">Submit Now</button>
                </form>
            </div>

        </div>
    )
}

export default Contact;