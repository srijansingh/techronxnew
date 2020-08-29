import Layout from "../component/Layout";
import Head from 'next/head';
import Landing from "../component/About/landing";
import Introduction from "../component/About/introduction";
import Contact from "../component/Home/Contact";

export default function about() {
    return (
        <Layout>
            <Head>
            <title>About Techronx</title>
                <meta name="title" content="About Techronx" />
                <meta name="description" content="It’s TechronX team, we want to share our story with you. Our company was founded with a mission to help businesses
                        achieve their goals with IT solutions and solve market problems." />

               
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://techronx.com/about" />
                <meta property="og:title" content="About Techronx" />
                <meta property="og:description" content="It’s TechronX team, we want to share our story with you. Our company was founded with a mission to help businesses
                        achieve their goals with IT solutions and solve market problems." />
                <meta property="og:image" content="/logo.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://techronx.com/about" />
                <meta property="twitter:title" content="About Techronx" />
                <meta property="twitter:description" content="It’s TechronX team, we want to share our story with you. Our company was founded with a mission to help businesses
                        achieve their goals with IT solutions and solve market problems." />
                <meta property="twitter:image" content="/logo.png" />
            </Head>
        <div>
           <Landing />
           <Introduction />
        </div>

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
        
        .contact{
            background:rgb(234, 247, 251);
            width:100%;
            height:100vh;
            padding-top:200px;
        }`}
    </style>
        </Layout>
    )
}
