import Layout from "../component/Layout";
import Head from "next/head";
import {withRouter} from "next/router";

import { baseUrl } from "../config/baseurl";
import Intro from "../component/Solution/Intro";
import Solutions from "../component/Solution/Solution";
import Contact from "../component/Home/Contact";
const Service = withRouter((props)=> {
    console.log(props.data.intro.data[0].heading)


    const ourservice = props.data.totalRes.data.map((service,index) => {
        return (
           <Solutions thumbnail={service.imageurl} heading={service.heading} content={service.description}  />
        )
     })

     const heading = props.data.intro.data[0].heading;
     const imageurl = props.data.intro.data[0].imageurl;
     const content = props.data.intro.data[0].content;
     const serviceid = props.data.intro.data[0].serviceid;

     const url = "https://techronx.com/"+serviceid
    return (
       

      <Layout>
          <Head>

                <meta name="title" content={title} />
                <meta name="description" content={content} />

               
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={content} />
                <meta property="og:image" content={imageurl} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={url} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={content} />
                <meta property="twitter:image" content={imageurl} />


          </Head>
           <Intro heading={heading} imageurl={imageurl} content={content} />
           <header className="container">
               <div className="grid">{ourservice}</div>
                
            </header>


            <div className="contact">
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
        overflow-x:hidden
      }
    `}</style>


    <style jsx>
        {`
       
            .container{
                
                width:100%;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:center;
                padding:50px 0;
               background:rgb(234, 247, 251)
            }
            
            .grid{
                max-width:1000px;
                width:100%;
                display:grid;
                grid-template-columns:repeat(3, 1fr);
                grid-gap:40px;
            }
            .contact{
                background:rgb(234, 247, 251);
                width:100%;
                height:100vh;
                padding-top:200px;
            }

            @media(max-width:800px){
                .grid{
                    // max-width:800px;
                    width:100%;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                align-items:center;
                    grid-gap:40px;
                    
                align-items:center;
                }
            }
        `}
    </style>
      </Layout>
    )
  })
  
  Service.getInitialProps = async function(context) {
      
  
    const res = await fetch(baseUrl+'/services/'+context.query.id);
    const intro = await fetch(baseUrl+'/serviceintro/'+context.query.id);
     
    const data = {
        totalRes : await res.json(),
        intro : await intro.json()
    }

    
    return {
        data
    }
  
   
}

  export default Service