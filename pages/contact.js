import Layout from "../component/Layout";
import Head from 'next/head'
import Landing from "../component/Contact/intro";
import Contact from "../component/Home/Contact";

export default function contact() {
    return (
        <Layout>
             <Head>
              <title>Contact</title>
                <meta name="title" content="Contact" />
                <meta name="description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. " />

               
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://techronx.com/contact" />
                <meta property="og:title" content="Techronx IT Solution and Services" />
                <meta property="og:description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. " />
                <meta property="og:image" content="/logo.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://techronx.com/contact" />
                <meta property="twitter:title" content="Contact" />
                <meta property="twitter:description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. " />
                <meta property="twitter:image" content="/logo.png" />
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
