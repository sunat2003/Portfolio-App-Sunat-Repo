import "./About.css";
import React from 'react';
import aboutImg from "../../image/babul photo.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function About() {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div id="about" className="about">
            <div data-aos="fade-up" className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-section">
                <div data-aos="fade-up" className="about-left">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="about-right">
                    <div data-aos="fade-up" className="about-para">
                        <p>To Utilize My Technical Skills for achieving the target and developing the best performance in the organization. and upgrade my skills so I could participate in the organization’s growth.</p>
                        <p>      Innovative Software Engineer proficient in Python programming, dedicated to leveraging advanced technical skills to drive business success in the Software Engineering field.</p>
                    </div>
                    <div className="about-skills">
                        <div data-aos="fade-up" className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div  data-aos="fade-up" className="about-skill"><p>React Js</p><hr style={{ width: "60%" }} /></div>
                        <div data-aos="fade-up" className="about-skill"><p>Java Script </p><hr style={{ width: "50%" }} /></div>
                        <div data-aos="fade-up" className="about-skill"><p>Python </p><hr style={{ width: "80%" }} /></div>
                        <div data-aos="fade-up" className="about-skill"><p>Java </p><hr style={{ width: "40%" }} /></div>
                        <div data-aos="fade-up" className="about-skill"><p>Django</p><hr style={{ width: "60%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div data-aos="fade-up" className="about-achivement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div data-aos="fade-up" className="about-achivement">
                    <h1>20+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div data-aos="fade-up" className="about-achivement">
                    <h1>15+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    )
}

export default About;