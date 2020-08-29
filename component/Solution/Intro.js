import React, { Component } from 'react'
import styles from "./css/intro.module.css";

export default class Intro extends Component {
    render() {
        return (
            <>
            <div className={styles.solution}>
                <div className={styles.solutiondescription}>
                    <div className={styles.solutionhead}>
                        {this.props.heading}
                        
                        <div  className={styles.solutionbio}>
                        {this.props.content}
                        </div>
                    </div>
                </div>
                <div className={styles.solutionimage}>
                    <img src={this.props.imageurl} alt={this.props.heading + " Techronx"} />
                </div>
            </div>
            <div className={styles.border}></div>
            </>
        )
    }
}
