import React from "react";
import './Card.css'


const Card = (props) => {
    return(
        <div className="card">
             
               <div className="imgbox">
                    <img src={props.src} 
                         alt={props.alt} /> 
                </div>
                 
                <div className="content">

               <h2>{props.title}</h2>
               <p>{props.desc}</p>
             </div>
        </div>
        


    );
}

export default Card;