import React, {Component} from "react";
import styles from "./css/intro.module.css";

class Landing extends Component {
    render(){
        return(
            <>
            <div className={styles.aboutus}>
                <div className={styles.introdescription}>
                    <div className={styles.introhead}>
                        Contact
                        <div className={styles.introbio}>
                        Get you business skyroket today.
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