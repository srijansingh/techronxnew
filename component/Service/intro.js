import React, {Component} from "react";
import styles from "./css/intro.module.css";

class Landing extends Component {
    render(){
        return(
            <>
            <div className={styles.aboutus}>
                <div className={styles.introdescription}>
                    <div className={styles.introhead}>
                    TechronX - IT Services
                        <div className={styles.introbio}>
                        From start to finish, we offer excellent product solutions.
                        </div>
                    </div>
                </div>
                <div className={styles.introimage}>
                    <img src="/service/services8.png" alt="service techronx" />
                </div>
            </div>
            <div className={styles.border}></div>
            </>
        )
    }
}

export default Landing;