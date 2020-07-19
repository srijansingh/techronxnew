import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";

function Landing(props){
    return (
    <div>
        <div className="container">
            <Navbar />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    <style jsx>{`
        .container{
            position:absolute;
            width:100%;
            top:0px;
            left:0px;
            margin:0px;
            display:flex;
            flex-direction:column;
        }
    `}</style>
     
    </div>
    )
}

export default Landing;