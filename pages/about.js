import Layout from "../component/Layout";
import Head from 'next/head';
import Landing from "../component/About/landing";
import Introduction from "../component/About/introduction";
import Contact from "../component/Home/Contact";

export default function about() {
    return (
        <Layout>
            <Head>
                <title>Techronx |  About</title>
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
