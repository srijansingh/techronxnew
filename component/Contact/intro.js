import React, {Component} from "react";
import styles from "./css/intro.module.css";
import IntroComponent from "../tools/IntroComponent"

class Landing extends Component {
    render(){
        return(
           
            <IntroComponent 
                heading="Contact Us"
                title="Contact us today to get your business skyroket today."
                imageUrl="/images/aboutus.png"
                alt="Contact Techronx"
            />
    
          
        )
    }
}

export default Landing;