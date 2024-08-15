import "./Hero.css";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import heroImg from "../../image/babul photo.jpg";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Hero() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    function handleResumeClick(){
        window.open("image/resume.jpg","Resume","width:100vh height:100vh")
    }
    return (
        <div id="home" className="hero">
            <img data-aos="fade-up" src={heroImg} alt="" />
            <h1 data-aos="fade-up"><span>I'm Sunat Kumar Das</span>,Web Developer based in India</h1>
            <p data-aos="fade-up">Is web development the career for you? Learn about web developers, common job responsibilities, how much they earn, and what it takes to get started in the field.</p>
            <div data-aos="fade-up" className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
                <div className="hero-resume" onClick={handleResumeClick}>My Resume</div>
            </div>
        </div>
    )
}
export default Hero;
