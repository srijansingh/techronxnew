import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Head from "next/head";
import styles from "./css/intro.module.css";
import TransitionsModal from '../tools/Modal';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';



class IntroPage extends Component{
    constructor (props) {
        super(props);
        this.state = {
            isOpen:false
        }
    }

    componentDidMount(){

        const visited = localStorage.getItem('visited');
        if(visited){
            this.setState({
                isOpen:false
            })
        }
        else{

           const timer =  setInterval(() => {
                this.setState({
                    isOpen:true
                })
            }, 20000)

            setTimeout(() => {
                clearInterval(timer);
            },20000);
     
            
                
           
            
            localStorage.setItem('visited', true);
          


        }


        
    }

    handleFollow = () => {
        this.setState({
            isOpen:false
        })
    }
  
    render(){
        return (
            <div>
              <Head>
                <meta name="viewport" content="width=device-width,minimum-scale=0.5,initial-scale=1"></meta>
              </Head>
              <TransitionsModal isOpen={this.state.isOpen}>
                  <div className={styles.close}>
                      <IconButton size="small" onClick={this.handleFollow}>
                          <CloseIcon />
                      </IconButton>
                  </div>
                 <div className={styles.modal}>
                     <img src="/apple-icon-72x72.png" />
                    <span className={styles.followTitle}>Follow us on Linkedin</span>
                    <span style={{maxWidth:'300px'}}>To get tips, latest trends and best practices in software development.</span>
                    <a href="https://www.linkedin.com/company/techronx" target="_blank" onClick={this.handleFollow} className={styles.followLink}>Follow</a>
                 </div>
              </TransitionsModal>
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