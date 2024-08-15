import React, { useEffect, useState } from "react";
import "./Services.css";
import axios from "axios";
import servImg from "../../image/next.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Services(){

    const [services_Data,set_serviceData]=useState([]);
     useEffect(()=>{
        axios.get("Apis/services.js").then((res)=>{
            set_serviceData(
                res.data
            )
        })

        Aos.init({duration:2000})

     })
    
    return(
        <div id="services" className="services">
              <div data-aos="fade-up" className="services-title">
                <h1>My Services</h1>
              </div>
              <div className="services-container">
               {
                services_Data.map((service,index)=>
                    <div data-aos="fade-up" key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="service-readmore">
                            <p>Read More</p>
                           <img src={servImg} alt=""/>
                        </div>
                    </div>
                )
               }
              </div>
        </div>
    )
}
export default Services;