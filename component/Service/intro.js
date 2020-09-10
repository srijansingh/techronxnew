import React, {Component} from "react";
import IntroComponent from "../tools/IntroComponent"
class Landing extends Component {
    render(){
        return(
            <>
            <IntroComponent
                heading='TechronX - IT Services'
                title='From start to finish, we offer excellent product solutions.'
                imageUrl='/service/services8.png'
                alt="service techronx"
            />
            {/* <div className={styles.aboutus}>
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
            <div className={styles.border}></div> */}
            </>
        )
    }
}

export default Landing;