import Layout from "../component/Layout";
import Head from 'next/head';
import Landing from "../component/Service/intro"
import WorkService from "../component/Service/service";
import WorkWithus from "../component/Service/work";
import Contact from "../component/Home/Contact";

export default function services() {
    return (
        <Layout>
             <Head>
             <title>Techronx Services</title>
                <meta name="title" content="Techronx Services" />
                <meta name="description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. " />

               
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://techronx.com/services" />
                <meta property="og:title" content="Techronx Services" />
                <meta property="og:description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. " />
                <meta property="og:image" content="/logo.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://techronx.com/services" />
                <meta property="twitter:title" content="Techronx Services" />
                <meta property="twitter:description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. " />
                <meta property="twitter:image" content="/logo.png" />
            </Head>
        <div>
            <Landing />
            <WorkService />
            <div className="border-top"></div>
            <WorkWithus />
            <div className="border"></div>
            <div className="contact">
                    <Contact />
            </div>
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
        .border-top{
            border-top: 20vh solid rgb(234, 247, 251);
            border-left: 100vw solid #000;
        }
    
        .border{
            border-bottom: 20vh solid rgb(234, 247, 251);
            border-right: 100vw solid #000;
        }
        .contact{
            background:rgb(234, 247, 251);
            width:100%;
            height:100vh;
            
        }`}
    </style>
        </Layout>
    )
}
