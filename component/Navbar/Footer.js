import React from 'react';
import ActiveLink from "./ActiveLink";
import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon
  } from "react-share";

export default function Footer() {
    return (
        <div>
            <div className="border-top"></div>
            <div className="footer">
                <div className="footer-main">
                    <div className="footer-name">
                        <img src="/images/logofooter.png" width="150"/>
                    </div>
                    <div className="footer-nav">
                    <ActiveLink activeClassName="active" href="/"><a className="footer-navlink">Home</a></ActiveLink>
                    <ActiveLink activeClassName="active" href="/about"><a className="footer-navlink">About</a></ActiveLink>
                    <ActiveLink activeClassName="active" href="/services"><a className="footer-navlink">Services</a></ActiveLink>
                    <ActiveLink activeClassName="active" href="/contact"><a className="footer-navlink">Contact</a></ActiveLink> 
                    </div>
                    <div className="footer-community">
                        <div className="comm-head">Join the Community</div>
                          <div className="social-media">
                           <a href="https://www.facebook.com/techronx"  target="blank"><FacebookIcon size={24} round={true} /></a>
                            <a href="https://www.twitter.com/mytechronx" target="blank"><TwitterIcon size={24} round={true} /></a>
                            <a href="https://www.linkedin.com/company/techronx" target="blank"><LinkedinIcon size={24} round={true}/></a>
                            <a href="https://api.whatsapp.com/send?phone=7289991556" target="blank"><WhatsappIcon size={24} round={true} /></a>
                        </div>
                    </div>
                    <div className="footer-community">
                        <div className="comm-head">Email Us</div>
                          <div className="social-media">
                            <a className="support" href="mailto:support@techronx.com" target="blank" >support@techronx.com</a>
                            
                        </div>
                    </div>
                    
                </div>

                <div className="footer-serv">
                    <div className="footer-policy">Copyright 2020</div>
                    <ActiveLink activeClassName="active" href="/privacypolicy"><a className="footer-policy">Privacy Policy</a></ActiveLink>
                    <ActiveLink activeClassName="active" href="/tandc"><a className="footer-policy">Terms & Condition</a></ActiveLink> 
                </div>
            </div>
            

    <style jsx>{`
     .border-top{
        border-top: 20vh solid rgb(234, 247, 251);
        border-left: 100vw solid #000;
    }

    .border{
        border-bottom: 20vh solid white;
        border-right: 100vw solid #000;
    }
        .footer{
            display:flex;
            flex-direction: column;
            background:#000000;
            width:100%;
            align-items: center;
            padding-bottom:2rem;
        }
        .footer-main{
            display:flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
            max-width:1000px;
            width:100%;
            padding:2rem 0;
           
        }
        .footer-name,
        .comm-head{
            font-size:1rem;
            color:white;
        }
        .footer-nav{
            display: flex;
            flex-direction: column;
        }
        .footer-navlink{
            text-decoration: none;
            color: #8d8989;
            padding:0.2rem;
            font-size:0.9rem;
        }
        
        .active{
            color:white
        }
        .social-media{
            width:150px;
            display:flex;
            flex-direction: row;
            align-items:center;
            justify-content: space-between;
            font-size: 1rem;
            padding:0.5rem 0
        
        }
        .support{
            text-decoration:none; 
            color:#a6a6a6
        }
        
        
        
        .f-icon{
            font-size:1.5rem;
            color:white;
        }
        
        .footer-serv{
            display:flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            max-width:800px;
            width:100%;
            font-size:1rem;
            color:rgb(163, 159, 159);
        }
        .footer-policy{
            text-decoration: none;
            color:#a6a6a6
        }
        @media(max-width:600px){
            .footer-main{
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                height:400px;
            }
            .footer-serv{
                flex-direction: column;
            }
        }
    `}</style>

        </div>
    )
}
