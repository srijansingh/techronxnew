import React, {Component} from "react";
import styles from "./css/landing.module.css";

class Landing extends Component {
    render(){
        return(
            <>
            <div className={styles.aboutus}>
                <div className={styles.introdescription}>
                    <div className={styles.introhead}>
                        About Us
                        <div className={styles.introbio}>
                         A quick overview of who we are.
                        </div>
                    </div>
                </div>
                <div className={styles.introimage}>
                    <img src="/images/aboutus.png" alt="techronx" />
                </div>
            </div>
            <div className={styles.border}></div>
            </>
        )
    }
}

export default Landing;