import React from "react";
import './Products.css'
import Card from './Card/Card'
import Fade from 'react-reveal/Fade';
const Products = () => {
    return(
        <div className="products">
            <h1>What you will get </h1>
            
            <div className="cards">
            <Fade left >
                <Card  
                    src={"https://static.wixstatic.com/media/ead566_e1b6fd66a76d448286cc3562f6a4d290~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_e1b6fd66a76d448286cc3562f6a4d290~mv2.webp"}
                    title = {"Plant Based Reusable Cups"}
                    desc = {"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nisi est reprehenderit nemo sint odio sequi libero cumque architecto adipisci!"}
                />
                <Card  
                    src={"https://static.wixstatic.com/media/ead566_1e4ebac233ca43019bafaa65d0a4eeb1~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_1e4ebac233ca43019bafaa65d0a4eeb1~mv2.webp"}
                    title = {"2 Bamboo Straws"}
                    desc = {"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nisi est reprehenderit nemo sint odio sequi libero cumque architecto adipisci!"}
                />
                <Card  
                    src={"https://static.wixstatic.com/media/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.webp"}
                    title = {"1 box of 50 Bamboo Cotton Eartips"}
                    desc = {"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nisi est reprehenderit nemo sint odio sequi libero cumque architecto adipisci!"}
                />
                <Card  
                    src={"https://static.wixstatic.com/media/ead566_621d6a0ac1514a7892713f2aec051f51~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_621d6a0ac1514a7892713f2aec051f51~mv2.webp"}
                    title = {"1 Bamboo Toothbrush"}
                    desc = {"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nisi est reprehenderit nemo sint odio sequi libero cumque architecto adipisci!"}
                />
                 
                 </Fade>
                 
            </div>

            <h2 className="text">AND A HEALTHY EARTH !</h2>
            
        </div>
    );
}
export default Products;