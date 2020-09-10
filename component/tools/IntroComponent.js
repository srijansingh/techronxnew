import React, {Component} from "react";
import styles from "./IntroComponent.module.css";

class IntroComponent extends Component {
    render(){
        return(
            <>
            <div className={styles.aboutus}>
                <div className={styles.introdescription}>
                    <div className={styles.introhead}>
                    {this.props.heading}
                        <div className={styles.introbio}>
                        {this.props.title}
                        </div>
                    </div>
                </div>
                <div className={styles.introimage}>
                    <img src={this.props.imageUrl} alt={this.props.alt}/>
                </div>
            </div>
            <div className={styles.border}></div>
            </>
        )
    }
}

export default IntroComponent;