import React, {Component} from "react";
import styles from "./css/intro.module.css";
import IntroComponent from "../tools/IntroComponent"

class Intro extends Component {
    render(){
        return(
           
            <IntroComponent 
                heading="Carrers"
                title="We are looking for you!
                        Join us and build an outstanding career with a team of young and passionate professionals."
                imageUrl="/service/services2.png"
                alt="Carrer at Techronx"
            />
    
          
        )
    }
}

export default Intro;