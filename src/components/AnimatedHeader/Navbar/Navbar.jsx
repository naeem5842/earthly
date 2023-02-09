import React, {useState} from "react";
import "./Navbar.css"


const Navbar = () =>{
    const [navbar, setNavbar] = useState(false);

    const changeBg = () => {
        if(window.scrollY >= 300){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBg);
    
    return(
        

        
        <nav className={navbar && 'active '} >
            <h2 className="logo">Earthly</h2>
            <ul>
                <li><a href="https://www.earthly.ie/">Home</a></li>
                <li><a href="https://www.earthly.ie/">About</a></li>
                <li><a href="https://www.earthly.ie/">Services</a></li>
                <li><a href="https://www.earthly.ie/">Contact us</a></li>
               
            </ul>
        </nav>
       
    );

}

export default Navbar;