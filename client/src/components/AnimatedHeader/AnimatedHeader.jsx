import React from "react";
import Navbar from "./Navbar/Navbar";
import './AnimatedHeader.css'

import video from '../../images/Nature.mp4';
const AnimatedHeader = ()=>{
    return(
        <div className="hero">
            <video autoPlay loop muted playsInline className="back-video">
                <source src={video} type="video/mp4"></source>
            </video>
            <Navbar />
            <div className="content">
                <h1>The Sustainable Kit</h1>
                <a href="#"> BUY NOW</a>
            </div>
            
        </div>







    );
}

export default AnimatedHeader;