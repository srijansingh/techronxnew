import React, {Component} from "react";
import styles from "./css/intro.module.css";;


class Introduction extends Component{
    render(){
        return(
            <div className={styles.introduction}>
                <div className={styles.introductionbox}>
                    <div className={styles.introductionbio}>
                        <h2>Hi there!</h2>
                        It’s TechronX team, we want to share our story with you. Our company was founded with a mission to help businesses
                        achieve their goals with IT solutions and solve market problems. We are going toward the big goal - build an
                        amazing business backed by future technologies and goal-oriented people to satisfy our customers' expectations.
                    </div>
                    <div className={styles.introductionbiobox}>
                       
                      <div className={styles.introductionbio2}>
                            Our main differentiation is that we are an outsourcing company.
                            which works as a product one. It means that we invest most
                            effort and money into team education and office, to create a
                            rocket-productive team and work on fewer but more
                            challenging projects.
                            Our employees have the best work tools, custom environment, 
                            that were made especially for them, not to mention lessons
                            and places for rest. We hire top performers that love their
                            job and have a fire in the eyes.
                        </div>
                        <div className="introductionbioimage">
                            <img src="/images/aboutus2.png" className={styles.img} alt="Techronx About Us" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Introduction;