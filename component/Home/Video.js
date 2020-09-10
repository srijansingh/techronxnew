import React,{Component} from 'react';
import Head from "next/head";
import { CardMedia, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import TransitionsModal from '../tools/Modal';
class Video extends Component{
    constructor (props) {
        super(props);
        this.state = {
            isOpen:false
        }
    }

    onPlay = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    render(){
        return(
            <div>
              <Head>
                <meta name="viewport" content="width=device-width,minimum-scale=0.5,initial-scale=1"></meta>
              </Head>
              <TransitionsModal isOpen={this.state.isOpen}>
                  <div >
                      <IconButton size="small" onClick={this.onPlay}>
                          <CloseIcon />
                      </IconButton>
                  </div>
                  <video autoplay="true"  style={{outline:'none'}} width="100%" height="100%" controls>
                    <source src="/service/video.mp4" type="video/mp4" autoplay/>
                    </video>
                    <div >
                  </div>
                 
              </TransitionsModal>
            <div className="familiar">
                <div className="familiar-image" title="Tap to play" onClick={this.onPlay}>
                    <img src="/images/play.png" alt="Let's get acquanted" />
                </div>
                <div className="familiar-intro">
                    <div className="familiar-box">
                        <div className="familiar-head">
                            What we are?
                        </div>
                        <div className="familiar-bio">
                            TechronX is a team of passionate professionals, who love creating
                            beautiful and high-valuable projects. There is nothing better for us
                            than seeing happy people, who enjoy using the products we create.
                            If you would like to learn more about our team, cozy office and 
                            workflow, just follow the link below.
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="border"></div>

            <style jsx>{`
             .border-top{
                border-top: 20vh solid white;
                border-left: 100vw solid rgb(234, 247, 251);
            }
        
            .border{
                border-bottom: 20vh solid white;
                border-right: 100vw solid rgb(234, 247, 251);
            }

            .familiar{
                display:flex;
                flex-direction:row;
                background:rgb(234, 247, 251);
                justify-content: space-between;
                color:black;
                /* height:100vh; */
            }
            .familiar-intro{
                width:100%;
            
                display:flex;
                flex-direction:row;
                justify-content: space-around;
                align-items: center;
                padding:2rem;
            }
            .familiar-box{
                display:flex;
                flex-direction:column;
                flex-wrap: wrap;
                max-width:500px;
                width:100%;
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
               color:black;
            
            }

            .button:hover{
                background:darkblue;
                transition:0.8s ease;
            }
            .familiar-head{
                font-size:2.1rem;
                margin-bottom:1rem;
            }
            .familiar-bio{
                font-size:1rem;
                margin:1rem 0;
                line-height: 1.5;
            }
            .familiar-image{

                width:100%;
                height:70vh;
            
                /* background-image:url('../../images/element3.png');
                background-position:center;
                background-size:100% 100%; */
            }
            .familiar-image img{
                width:100%;
                // height:100%;
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                animation-name:image;
                animation-duration:3s;
                animation-iteration-count:infinite
            }

            @keyframes image{
                0%{
                    transform:scale(0.9)
                }
                70%{
              
                    transform:scale(1)
             
                }

                100%{
                    transform:scale(0.9)
                }
            }


            @media(max-width:800px){
                .familiar{
                    height:100%;
                    flex-wrap: wrap;
                }
                .familiar-image{
                    height:50vh;
                    /* width:100%; */
                }
                /* .intro-description{
                    height:100%;
                    width:100%;
                } */
            
            `}</style>
            </div>
        )
    }
}

export default Video;