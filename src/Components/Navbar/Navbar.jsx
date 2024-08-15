import React, { useState,useRef } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import  logoImg from "../../image/logo-no-background.png";

function Navbar(){
    const [menu,setmenu]=useState("home");
    const menuRef=useRef();
    function handleOpenClick(){
        menuRef.current.style.left="0";
    }
    function handleCloseClick(){
        menuRef.current.style.left="-800px";
    }
    return(
        <div className="navbar">
            <img src={logoImg} alt="Uploading" width="60px" height="60px" />
            <div className="toggle-button" onClick={handleOpenClick}><FontAwesomeIcon icon={faBars}  /></div>
            <ul ref={menuRef} className="nav-menu">
                <div className="close-nav" onClick={handleCloseClick} ><FontAwesomeIcon icon={faXmark}/></div>
                <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<hr />:""}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setmenu("about")}>About Me</p></AnchorLink>{menu==="about"?<hr />:""}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setmenu("services")}>Services</p></AnchorLink>{menu==="services"?<hr />:""}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setmenu("portfolio")}>Protfolio</p></AnchorLink>{menu==="portfolio"?<hr />:""}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<hr />:""}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
        </div>
    )
}
export default Navbar;