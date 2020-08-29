import Layout from "../component/Layout";
import Head from 'next/head'
import Landing from "../component/Contact/intro";
import Contact from "../component/Home/Contact";

export default function contact() {
    return (
        <Layout>
             <Head>
                <title>Techronx | Contact</title>
            </Head>
        <div>
           <Landing />
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
        </Layout>
    )
}
