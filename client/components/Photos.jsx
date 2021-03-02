import React from 'react';
import Nav from './Nav'
// import { HashRouter as Router, Route } from 'react-router-dom'


function Photos() {
    return (

        <main>

            <div className="who-am-i-container">
                <Nav />
                <img className="photos-hero-image" />
                <h1 className="whoami-title">Photo Gallery</h1>
            </div>
            <div className="History-container">
                <div className="History-flex-container">
                    <div className="History-work-container">
                        <h1 className="History-title">Work History</h1>
                        <p className="History-subtitle">Since leaving college I've worked for a few different places, these include:</p>
                        <div className="History-list">
                            <ul>
                                <li>Cleaning Assistant at New World Thorndon (September 2016 - January 2017)</li>
                                <li>Grocery Assistant at New World Thorndon (January 2017 - January 2018)</li>
                                <li>Grocery Supervisor at New World Thorndon (January 2018 - December 2019, March 2020 - July 2020)</li>
                                <li>Trainee Duty Manager at New World Churton Park (September 2020 - October 2020)</li>
                                <li>Duty Manager at New World Churton Park (October 2020 - Present)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="History-education-container">
                        <h1 className="History-title">Education</h1>
                        <p className="History-subtitle">These are the following certifications I've received up to this date:</p>
                        <div className="History-list">
                            <ul>
                                <li>NCEA levels 1, 2 and 3 (completed at Newlands College 2013-2015)</li>
                                <li>Basic First aid training (completed at New World Thorndon)</li>
                                <li>Fire Warden Training and Safety Training(completed at New World Churton Park)</li>
                                <li>Enpiral Dev Academy Web Development Training Scheme: NZQA level 6 with 72 credits (completed at Enspiral Dev Academy)</li>
                            </ul>
                        </div>
                    </div>

                </div>



            </div >







        </main >


    )
}








export default Photos;