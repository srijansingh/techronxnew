import Layout from "../component/Layout";
import Head from 'next/head';
import IntroPage from "../component/Home/Intro";
import Ourservice from "../component/Home/Ourservice";
import Familiar from "../component/Home/Familiar";
import Contact from "../component/Home/Contact";
import fetch from "isomorphic-unfetch";
import Video from "../component/Home/Video";
import Portfolio from "../component/Home/Portfolio";


function HomePage(props) {

    

    let portfolio;
    portfolio =  <Portfolio />
   

    // const ourservice = props.data.data.map((service,index) => {
    //    return <Ourservice  key={index} image={service.imageurl}  index={index}  description={service.content} heading={service.heading} id={service.id}/>
    // })




    return (
        <Layout>
            <Head>
                <title>Techronx IT Solution and Services</title>
                <meta name="viewport" content="width=device-width,minimum-scale=0.5,initial-scale=1"></meta>
            </Head>
            <div>
                <IntroPage />
                <Video />
                {/* <div className="our-services-heading">
                  Our Services
            
                  <div className="span">
                    <span className="span-1"></span>
                    <span className="span-2"></span>
                 </div>
               </div> */}
                {/* {ourservice} */}

                {/* Portfolio Section */}
                <div className="portfolio-border-top"></div>
                <div className="main-container">
                    <div className="our-services-heading right">
                            Our Portfolio
                        
                            {/* <div className="span right">
                                <span className="span-1"></span>
                                <span className="span-2"></span>
                            </div> */}
                    </div>
                <div className="portfolio">
                    <div className="container">
                       {portfolio}
                       {portfolio}
                       {portfolio}
                       {portfolio}
                       {portfolio}
                       {portfolio}
                       {portfolio}
                       {portfolio}
                    </div>
                </div>
                </div>

                {/* Portfolio Section */}

                
                <Familiar />
                <Contact />
            </div>


    <style jsx global>{`
       body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}</style>

    <style jsx>{`
    .main-container{
        background:rgb(234, 247, 251)
    }
        .portfolio{
           
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
            background:rgb(234, 247, 251);
            padding:2rem;

        }
        .container{
            max-width:1000px;
            width:100%;
            display:grid;
            grid-template-columns:repeat(3, 1fr);
            grid-gap:40px;
           
        }
        .portfolio-border-top{
            border-top: 20vh solid #fff;
            border-right: 100vw solid rgb(234, 247, 251);
        }
    
        .portfolio-border{
            border-bottom: 20vh solid rgb(234, 247, 251);
            border-right: 100vw solid #000;
        }

       .our-services-heading{
          
        font-size:3.5rem;
        word-spacing: 15px;
        letter-spacing:0.1rem;
        font-weight:bold;
        padding: 0 1rem;
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
    .right{
        text-align:right;
    }
 .span .span-1{
        width:100%;
        height:100%;
        background:pink;
        border-radius:5px 0 0 5px;
    }
    .span .span-2{
        width:100%;
        height:100%;
        background:purple;
        border-radius:0 5px 5px 0;
    }
    `}</style>
        </Layout>
    )
  }

//   HomePage.getInitialProps = async function() {
//     const res = await fetch('https://backend.techronx.com/api/service');
//     const data = await res.json();
//     return {
//         data
//     }
// }
  
export default HomePage;