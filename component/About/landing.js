import React, {Component} from "react";
import styles from "./css/landing.module.css";
import IntroComponent from "../tools/IntroComponent"

class Landing extends Component {
    render(){
        return(
            <IntroComponent 
                heading='About Us'
                title='A quick overview of who we are.'
                imageUrl='/images/aboutus.png'
                alt="About Techronx"
            
            />
        )
    }
}

export default Landing;