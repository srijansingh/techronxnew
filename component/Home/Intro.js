import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Head from "next/head";

class IntroPage extends Component{
    render(){
        return (
            <div>
              <Head>
                <meta name="viewport" content="width=device-width,minimum-scale=0.5,initial-scale=1"></meta>
              </Head>
            <div className="intro-box">
                <div className="intro-description">
                    <div className="intro-head">
                        TechronX - IT Solutions <br />
                        and Services.

                        <div className="intro-bio">
                        TechronX constantly advances to provide innovative IT solutions in
                        order to make better future by improving your business.
                        </div>
                    </div>
                    <a href="/contact" className="button" >
                        Contact Us
                    </a>
                    
                </div>
                <div className="intro-image">
                    <div></div>
                        <img src="/images/intro.gif" alt="techronx" />
                </div>
            </div>
            <div className="border"></div>

        <style jsx>{`
            .intro-box{
                
                display:flex;
                flex-direction:row;
                justify-content: space-between;
                background:#000000;
                /* height:105vh; */
                /* display:grid;
                grid-template-columns: repeat(2,1fr); */
                color:white;
            }
            .border{
                border-bottom: 20vh solid rgb(234, 247, 251);
                border-right: 100vw solid black;
            }
         .intro-description{
               height:90vh;
              
                width:100%;
                
                padding:2rem;
                display:flex;
                flex-direction: column;
                justify-content: space-evenly; 
            }
            .intro-bio{
                font-size: 1rem;
                padding:1rem 0;
                line-height: 1.6;
                
            }
            .intro-head{
                font-size:2.5rem;
                font-weight:bold;
            }
            .intro-image{
                width:100%;
                height:90vh;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:space-between;
                // background-image:url('/images/element1.png');
                background-position:center;
                background-size:100% 100%;
                /* background:red;*/
            } 
            img{
                width:80%;
                height:80%;
            }
            .button{
                text-decoration:none;
                text-align:center;
                font-weight:bold;
                width:180px;
                padding:0.5rem 0;
               cursor: pointer;
               background:blue;
               outline:none;
               border:none;
               color:white;
            
            }

            .button:hover{
                background:darkblue;
                transition:0.8s ease;
            }
            
            
            
            @media(max-width:800px){
                .intro-box{
                    height:100%;
                    flex-direction:column
                }
                .intro-image{
                    height:50vh;
                    /* width:100%; */
                }
              .intro-description{
                    height:100%;
                    width:100%;
                }
            }
            
        `}</style>
            </div>
        )
    }
}

export default IntroPage;