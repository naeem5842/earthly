import React from "react";
import './Footer.css'

const Footer = () => {
    return(
        <div className="footer-container">
        <footer>
            <div className="row">
                <div className="col">
                    <h3 className="logo2">Earthly</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non autem est nostrum vel soluta facere labore quibusdam tenetur tempore vitae.</p>
                </div>
                <div className="col">
                    <h3>Office</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa animi saepe repellat vero voluptatem, odit sit porro accusantium eum.</p>
                    <p>Karnataka</p>
                    <p className="email-id">ABCD@gmail.com</p>
                    <h4>+91 0134242323</h4>
                </div>
                <div className="col">
                    <h3>Quick Links</h3>
                    <ul>
                     <li><a href =" ">Home</a></li>
                     <li><a href =" ">sevices</a></li>
                     <li><a href =" ">About</a></li>
                     <li><a href =" ">contact</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Newsletter</h3>
                    <form>
                        <input type="email" placeholder="Enter your email" required/>
                        <button type="submit">Submit</button>
                    </form>
                   
                </div>
            </div>
        </footer>
        </div>
    );


}

export default Footer;