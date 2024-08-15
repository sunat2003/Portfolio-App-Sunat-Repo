import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import footerImg from "../../image/logo-no-background.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img data-aos="fade-up" src={footerImg} alt="Uploading" />
                    <p data-aos="fade-up">If you have a website, it might not seem like the page you need to prioritize, but that’s a huge mistake, especially considering that it’s one of the most valuable pages on your website and, typically, one of the most visited site pages.</p>
                </div>
                <div className="footer-top-right">
                    <div data-aos="fade-up" className="footer-email-input">
                    <FontAwesomeIcon icon={faUser} />
                    <input type="email" placeholder="Enter Your Email" />
                    </div>
                    <div data-aos="fade-up" className="footer-subscribe">Suscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p  className="footer-bottom-left">&copy; 2024 Sunat Kumar Das.All right Reserve</p>
                <div className="footer-bottom-right">
                    <p>Term of services</p>
                    <p>Privecy Policy</p>
                    <p> Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;