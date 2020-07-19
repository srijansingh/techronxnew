import React,{Component} from 'react';
import Head from "next/head";
import Link from "next/link";



class Ourservice extends Component {
    render(){
        return(
            <div>
                 <Head>
                <meta name="viewport" content="width=device-width,minimum-scale=0.5,initial-scale=1"></meta>
              </Head>
                <div className="our-service" >
                
                    <section className={this.props.index % 2 === 0 ? 'left-align' : 'right-align'}>
                        <div className="service-image">
                            <img src={this.props.image} alt={this.props.heading + ' TechronX'} />
                        </div>
                        <div className="services-intro-container">
                            <div className="service-intro">
                                <div className="service-head">
                                    {this.props.heading}
                                </div>
                                <div className="service-bio">
                                    {this.props.description}
                                </div>
                                
                                <Link  as={"/service/"+this.props.id} href={"/?service="+this.props.id} ><a  className="button">View Solution</a></Link>
                            </div>
                        </div>
                    </section>
                    {/* <div className={this.props.index % 2 === 0 ? 'border-top' : 'border'}></div> */}

                 </div> 

    <style jsx>{`
     .border-top{
        border-top: 20vh solid white;
        border-left: 100vw solid #f1f1f1;
    }

    .border{
        border-bottom: 20vh solid white;
        border-right: 100vw solid #f1f1f1;
    }
        
        .our-service{
            width:100%;
        
         display:flex;
         flex-direction:column;
         align-items:center;
         justify-content:space-around;
     }
    
     .our-services-heading{
         font-size:3.5rem;
         word-spacing: 15px;
         letter-spacing:0.1rem;
         font-weight:bold;
         padding:  1rem;
         margin:0 2rem;
         color:#000000;
         text-align:left;
         display:flex;
         flex-direction: column;
         justify-content: space-around;
         
         
     }
     .span{
         align-items:center;
         height:0.2rem;
         width:250px;
         display:flex;
         flex-direction: row;
         transition:2s ease;
     }
    .span-1{
         width:100%;
         height:100%;
         background:pink;
         border-radius:5px 0 0 5px;
     }
     .span-2{
         width:100%;
         height:100%;
         background:purple;
         border-radius:0 5px 5px 0;
     }
     section{
         max-width:1000px;
         width:100%;
        display:flex;
         flex-direction:row;
         justify-content: space-between;
        //   padding:0 5rem;
          
     
     }
    .right-align{
         display:flex;
         flex-direction:row-reverse;
         justify-content: space-between;
         /* height:350px; */
        //  padding:0 5rem;
       
         /* margin:2rem 0; */
        

     
     }
     .left-align{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        /* height:350px; */
        // padding:0 5rem;
       
        /* margin:2rem 0; */
        

    
    }
     .services-intro-container{
         width:100%;
         /* background:green; */
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         /* align-items:center; */
         padding:0 3rem;
     }
     
     .service-intro{
         display:flex;
         flex-direction:column;
         flex-wrap: wrap;
         /* align-items: center; */
         /* background:blue; */
         text-align: left;
         
     }
     .service-head{
         font-size:2rem;
         color:#000000;
         padding-bottom:1rem;
     }
.service-bio{
         font-size: 1rem;
         color:#666666;
         padding:1rem 0;
         line-height: 1.2;
         display:flex;
     }
     
 .button{
         width:150px;
         margin-top:1rem;;
         color:rgb(184, 59, 216);
         cursor: pointer;
         text-align:left; 
         border:none;
         background:transparent;
         outline:none;
         font-size: 1rem;
         text-decoration: none;
     }
     
 .button:visited {
          color:purple;  
          
     }
     
      .button:focus {
         color:purple;  
        
     }
     
     .service-image{
        width:100%;
        /* background:red; */
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        align-items: center; 
     }
     .service-image img{
         
         
         /* background:black; */
         height:450px;
     }
     
     @media(max-width:800px){
         .left-align{
             flex-wrap:wrap-reverse;
         }
         .right-align{
             flex-wrap: wrap-reverse;
         }
     }
     
     `}</style>

            </div>
        )
    }
}

export default Ourservice;