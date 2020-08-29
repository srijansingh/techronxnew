import React,{Component} from 'react';
import styles from "./css/service.module.css"




class WorkService extends Component {
    render(){
        return(
            <div className={styles.workservice}>
                <div className={styles.workservicesheading}>
                    
                    How Do We Work?
                    
                    <div className={styles.span}>
                        <span className={styles.span1}></span>
                        <span className={styles.span2}></span>
                    </div>
                </div>
                <section className={styles.workleftalign}>
                    <div className={styles.workservicesintrocontainer}>
                        <div className={styles.workserviceintro}>
                        <div className={styles.workcount}>1</div>
                            <div className={styles.workservicehead}>
                            Hear the client out
                            </div>
                            <div className={styles.workservicebio}>
                            The first stage is estimating our customer's needs. 
                            Here you share your plans and problems with us and 
                            we help you find the best way to realize them. 
                            This is the fundamental part, so we will ask a 
                            lot of questions and dig into the issue you are going to solve.


                            </div>
                           
                        </div>
                    </div>
                    <div className={styles.workserviceimage}>
                        <img src="/service/services1.png" alt="Digital Marketing Techronx" />
                    </div> 
                </section>


                <section className={styles.workrightalign}>
                    <div className={styles.workserviceimage}>
                        <img src="/service/services4.png" alt="Web and Mobile App Development Techronx" />
                    </div>
                    <div className={styles.workservicesintrocontainer}>
                        <div className={styles.workserviceintro}>
                        <div className={styles.workcount}>6</div>
                            <div className={styles.workservicehead}>
                            Assemble the team
                                
                            </div>
                            <div className={styles.workservicebio}>
                            We provide the services of the highest quality, that is why
                            we gather the strongest team of true professionals and enthusiasts to work on your
                            project. The environment inside our IT company keeps them as productive as possible.
                            Our team works according to Agile methodology and connects through top applications
                            like Jira and Slack for uninterrupted communication and smooth workflow.
                                   
                            </div>
                            
                           
                        </div>
                    </div>
                </section>



                <section className={styles.workleftalign}>
                    <div className={styles.workservicesintrocontainer}>
                        <div className={styles.workserviceintro}>
                        <div className={styles.workcount}>7</div>
                            <div className={styles.workservicehead}>
                            Do the paper work
                            </div>
                            <div className={styles.workservicebio}>
                            A stage of planning, scope estimation, and requirements approvement. 
                            Every project should have a technical requirement agreed, as a way of 
                            confirmation that we understood each other. Here we dig into technical
                             details and find the best way to make your idea a reality.


                            </div>
                           
                        </div>
                    </div>
                    <div className={styles.workserviceimage}>
                        <img src="/service/services5.png" alt="Digital Marketing Techronx" />
                    </div> 
                </section>


                <section className={styles.workrightalign}>
                    <div className={styles.workserviceimage}>
                        <img src="/service/services2.png" alt="Web and Mobile App Development Techronx" />
                    </div>
                    <div className={styles.workservicesintrocontainer}>
                        <div className={styles.workserviceintro}>
                        <div className={styles.workcount}>6</div>
                            <div className={styles.workservicehead}>
                                Design & Develop
                            </div>
                            <div className={styles.workservicebio}>
                            This is the part where a project comes to life. Our creative
                            minds design the interface and experience, for your users to adore it. After design,
                            it’s a time of development, where our top technical performers make a project work
                            as planned.
                            </div>
                            
                           
                        </div>
                    </div>
                </section>



                
                <section className={styles.workleftalign}>
                    <div className={styles.workservicesintrocontainer}>
                        <div className={styles.workserviceintro}>
                        <div className={styles.workcount}>7</div>
                            <div className={styles.workservicehead}>
                            Test and iterate
                            </div>
                            <div className={styles.workservicebio}>
                            Check yourself before you wreck yourself. 
                            Testing is critical before release, here we 
                            check our work, to make sure everything works 
                            well and meets our customer’s needs.


                            </div>
                           
                        </div>
                    </div>
                    <div className={styles.workserviceimage}>
                        <img src="/service/services9.png" alt="Digital Marketing Techronx" />
                    </div> 
                </section>


                <section className={styles.workrightalign}>
                    <div className={styles.workserviceimage}>
                        <img src="/service/services0.png" alt="Web and Mobile App Development Techronx" />
                    </div>
                    <div className={styles.workservicesintrocontainer}>
                        <div className={styles.workserviceintro}>
                        <div className={styles.workcount}>6</div>
                            <div className={styles.workservicehead}>
                            Launch the project
                                
                            </div>
                            <div className={styles.workservicebio}>
                            This is the moment it all started for. 
                            It is important to make project launch 
                            successful both from technical and marketing side. 
                            With a help of our specialists, your “ship” will float without any trouble.
                            </div>
                            
                           
                        </div>
                    </div>
                </section>

                <section className={styles.workleftalign}>
                    <div className={styles.workservicesintrocontainer}>
                        <div className={styles.workserviceintro}>
                        <div className={styles.workcount}>7</div>
                            <div className={styles.workservicehead}>
                            Support & Update
                            </div>
                            <div className={styles.workservicebio}>
                            We are more than interested to go with your company into a bright future. 
                            Our IT company will support your project on the go and fix issues ASAP. 
                            If you want to add some new feature - just tell us, we will work on it going 
                            through stages.



                            </div>
                           
                        </div>
                    </div>
                    <div className={styles.workserviceimage}>
                        <img src="/service/services6.png" alt="Digital Marketing Techronx" />
                    </div> 
                </section>
    
   
        </div>
        )
    }
}

export default WorkService;

