import ActiveLink from "./ActiveLink";
import Head from 'next/head'

function Navbar(){
    return (
        <div>
            
        <header className="landing">

          <div className="navbar-header">
            <div className="nav-logo">
              <img src="/images/logo192.png" />
           </div>


           <div className="nav-tool">
             <ActiveLink activeClassName="active" href="/"><a>Home</a></ActiveLink>
             <ActiveLink activeClassName="active" href="/about"><a>About</a></ActiveLink>
             <ActiveLink activeClassName="active" href="/services"><a>Services</a></ActiveLink>
             <ActiveLink activeClassName="active" href="/contact"><a>Contact</a></ActiveLink> 
           </div>
          </div>
         
   
        </header>
        <style jsx>{`
            .landing{
                /* height:105vh; */
            
                width:100%;
                display:flex;
                flex-direction:column;
                flex-wrap: wrap;
                background: #000000;;
                /* border-top:1000px red;
                border-right: 1000px solid white; 
                border-left:1000px solid white; */
            }
            
            .navbar-header{
                height:4rem;
                /* position:absolute; */
                display:flex;
                flex-direction:row;
                align-items: center;
                justify-content: space-between;  
                padding:0rem 3rem;  
            }
            .nav-logo img{
                height:3rem;
                
            }
            
            .nav-tool{
               
                display:flex;
                flex-direction:row;
                justify-content: space-between;  
            }
           
            .nav-icon{
                color:white;
            }

            a{
                text-decoration: none;
                color:white;
                padding:0 1.5rem;
            }
            .active{
               color:blue;
              
            }
            
            .icon-bar{
                display:none;
            }
            
            @media (max-width:800px){
                .nav-tool{
                    display:none;
                }
                .icon-bar{
                    display:block;
                    height:4rem;
                    width:250px;
                    float:right;
                    background:red;
                }
                .navbar-header{
                    padding:0 1rem;
                }
            }
        `}</style>
        </div>
    )
}

export default Navbar;