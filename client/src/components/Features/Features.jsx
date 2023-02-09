import React from "react";
import './Features.css'
import Fade from 'react-reveal/Fade';
const Features = () =>{
    return(
        <div className="container">
                 <h1>Features</h1>
                <div className="timeline">
                    <div className="line">
                    <Fade bottom cascade>
                    <sectiom className="timeline-area">
                        
                        <div className="textarea">
                            <h2>
                                Govt Approved, Tested, and approved in TUV Rhineland, Germany
                            </h2>
                        </div>
                    </sectiom>   

                    <sectiom className="timeline-area">
                        <div className="textarea">
                            <h2>
                                100% recyclable and non-toxic
                            </h2>
                        </div>

                    </sectiom>  

                    <sectiom className="timeline-area">
                        <div className="textarea">
                            <h2>
                                Leak-Proof
                            </h2>
                        </div>
                        
                    </sectiom>
                    
                    <sectiom className="timeline-area"> 
                        <div className="textarea">
                            <h2>
                                Odorless tasteless and doesn’t react with hot beverages
                            </h2>
                        </div>
                    </sectiom>

                    <sectiom className="timeline-area">
                        <div className="textarea">
                            <h2>
                                Lightweight
                            </h2>
                        </div>
                    </sectiom>

                    <sectiom className="timeline-area">
                        <div className="textarea">
                            <h2>
                                Microwavable
                            </h2>
                        </div>
                    </sectiom>
                        </Fade >
                    </div>
                 </div>
        </div>
       
    );
}
export default Features;