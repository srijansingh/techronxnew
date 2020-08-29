import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Head from "next/head";
import styles from "./css/intro.module.css";
class IntroPage extends Component{
    render(){
        return (
            <div>
              <Head>
                <meta name="viewport" content="width=device-width,minimum-scale=0.5,initial-scale=1"></meta>
              </Head>
            <div className={styles.aboutus}>
                <div className={styles.introdescription}>
                    <div className={styles.introhead}>
                        TechronX - IT Solutions <br />
                        and Services.

                        <div className={styles.introbio}>
                        TechronX constantly advances to provide innovative IT solutions in
                        order to make better future by improving your business.
                        </div>
                    </div>
                    <a href="/contact" className={styles.button} >
                        Contact Us
                    </a>
                    
                </div>
                <div className={styles.intrimage}>
                    
                        <img src="/images/intro.gif" alt="techronx" />
                </div>
            </div>
            <div className={styles.border}></div>

        
            </div>
        )
    }
}

export default IntroPage;