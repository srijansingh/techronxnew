import React, { Component } from 'react';
import Head from "next/head";

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <Head>
                <meta name="viewport" content="width=device-width,minimum-scale=0.5,initial-scale=1"></meta>
              </Head>
              <div className="image">
                  <img src="/images/ayushapp1.jpg" />
              </div>

                
        <style jsx>{`
            .image{
                max-height:4400px;
                height:100%;
                max-width:350px;
                width:100%;
            }
            img{
                height:100%;
                width:100%;
            }
        `}</style>

            </div>
        )
    }
}
