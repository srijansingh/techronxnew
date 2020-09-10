import React, { Component } from 'react';
import Head from "next/head";
import { baseUrl } from '../../config/baseurl';
import 'isomorphic-fetch';
import TransitionsModal from '../tools/Modal';
export default class Contact extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name : '',
            email :'',
            phonenum :'',
            occpation :'',
            isLoading:false,
            isOpen:false
        }
    }
    
    handleClick = () => {
       

       
    }
    handleClick = (e) => {
        e.preventDefault()
        fetch('https://api.techronx.com/user/customer', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(result => {
            result.json().then(response => {
                console.log(response)

                this.setState({
                    isOpen:true
                })

                setTimeout(() => {
                    this.setState({
                        isOpen:false
                    })
                    window.location.reload(false)
                   }, 3000);
               
            })
        }).catch(err => {
            
            this.setState({
                isLoading: false,
                error: err
            });
        });  
    }

    render() {
        return (
            <div>
              <Head>
                <meta name="viewport" content="width=device-width,minimum-scale=0.5,initial-scale=1"></meta>
              </Head>
             
              <div className="contact">
                <div className="contact-box">
                    <div className="heading">Contact Us</div>
                    <div className="form-box">
                    <form className="form" >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" onChange={()=> this.setState({name:event.target.value})} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={()=> this.setState({email:event.target.value})}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="number" onChange={()=> this.setState({phonenum:event.target.value})} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <input type="text" onChange={()=> this.setState({occpation:event.target.value})} />
                        </div>

                        <div className="form-group button-group">
                            {
                                this.state.name !== '' && this.state.email !== '' ? 
                                <div className="button" onClick={this.handleClick}>SEND MESSAGE</div>
                                :
                                <div className="button2">SEND MESSAGE</div>
                            }
                        </div>
                    </form>
                    </div>
                </div>
              </div>
              <TransitionsModal isOpen={this.state.isOpen}>
                 <div style={{display:'flex', flexDirection:'column', width:'100%',height:'300px',justifyContent:'space-around', alignItems:'center'}}>
                    <img src="/images/15.gif" width="300px" alt="Digital Marketing Techronx" />
                    <span style={{color:'#d4d4d4'}}>Message Sent!</span>
                    <span style={{color:'green', fontWeight:'bold'}}>Thank you</span>
                 </div>
              </TransitionsModal>
        <style jsx>{`
            .contact{
                height:90vh;
                padding:1rem 2rem;
                background:rgb(234, 247, 251);
                // display:flex;
                // flex-direction:row;
                // align-teems:center;
                // justify-content:space-around;

            }

            .contact-box{
                position:relative;
                max-width:600px;
                width:100%;
                height:100vh;
                top:0%;
                left:50%;
                transform:translate(-50%,-26%);
                background:white;
                padding:0 1rem;
                box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12)
            }

            .heading{
                height:100px;
                width:100%;
              
                font-size:3rem;
                font-weight:500;
                display:flex;
                align-items:center;
                justify-content:space-around;

            }
            
            .form-box{
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:center;
            }
            .form{
                max-width:450px;
                width:100%;
                height:80vh;
                padding:0 1rem;
                flex-wrap:wrap;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
               

            }

            .form-group{
                display:flex;
                flex-direction:column;
            }
            label{
                font-size:1rem;;
                color:#a6a6a6;
            }
            input{
                border:none;
                outline:none;
                background:white;
                border-bottom:1px solid #a6a6a6;
                padding:0.4rem 0;
                font-size:1rem;
            }
            input:hover{
                border-color:#000;
                transition:1s ease;
            }
            .button-group{
                display:flex;
                align-items:center;
            }
            .button{
               text-align:center;
                width:200px;
                color:black;
                border:2px solid blue;
                background:white;
                padding:1rem;
                outline:none;

                cursor:pointer;
              
            }

            .button2{
                text-align:center;
                 width:200px;
                 color:black;
                 border:2px solid black;
                 background:#f2f2f2;
                 padding:1rem;
                 outline:none;
               
             }
            .button:hover{
                border-color:none;
                background:linear-gradient(to left, blue, purple);
                transition-duration:.3s;
                color:white;
            }
        `}</style>
            </div>
        )
    }
}
