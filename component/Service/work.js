import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import style from "./css/work.module.css";



class WorkWithus extends Component{

    
    

    render(){
        return(
            <div className={style.workwithus}>
                <div className={style.workwithusintro}>
                    <div className={style.workwithusbox}>

                        <div className={style.workwithushead}>
                            Start working with Us. 
                        </div>
                        
                        <div className={style.workwithusbio}>
                            Our team of professionals with deep knowledge of above-mentioned technologies 
                            loves helping companies improve their business through tech solutions.
                            Constantly improving our skills, we follow modern approaches to development.
                            Contact us to discuss how we can help you.
                        </div>
                       
                      
                        <Button  className={style.workbutton} variant="contained" color="primary" href="/contact">
                            Contact Us
                        </Button>
                    </div>
                </div>
                <div className={style.workwithusimage}>
                    <img src="/images/element31.png" alt="Let's get acquanted" />
                </div>
            </div>
        )
    }
}

export default WorkWithus;