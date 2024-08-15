import React from "react";
import "./MyWork.css";
import myWorkImg1 from "../../image/My-work-1.jpg"
import myWorkImg2 from "../../image/My-work-2.jpg"
import myWorkImg3 from "../../image/My-work-3.jpg"
import myWorkImg4 from "../../image/My-work-4.jpg"
import myWorkImg5 from "../../image/My-work-5.jpg"
import myWorkImg6 from "../../image/My-work-6.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function MyWork(){
   useEffect(()=>{
     Aos.init({duration:2000})
   },[])
    return(
        <div id="work" className="mywork">
            <div data-aos="fade-up" className="mywork-title">
                <h1>My Work</h1>
            </div>
            <div className="mywork-container">
                <img data-aos="fade-up" src={myWorkImg1} alt="" />
                <img data-aos="fade-up" src={myWorkImg2} alt="" />
                <img data-aos="fade-up" src={myWorkImg3} alt="" />
                <img data-aos="fade-up" src={myWorkImg4} alt="" />
                <img data-aos="fade-up" src={myWorkImg5} alt="" />
                <img data-aos="fade-up" src={myWorkImg6} alt="" />
            </div>
            <div data-aos="fade-up" className="mywork-showmore">
                <p>Show More &rarr;</p>
            </div>
        </div>
    )
}
export default MyWork