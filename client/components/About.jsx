import React from 'react';

// import { HashRouter as Router, Route } from 'react-router-dom'


function About() {
    return (

        <main>
            <div className="who-am-i-container">
                <img className="whoami-hero-image" src="/images/profile1.jpg" />
                <h1 className="whoami-title">Who am I?</h1>
            </div>

            <div className="about-me-container2">
                <h1 className="about-me-title">Hey! I'm Lui Kelekolio</h1>
                <p>I'm 22 years old and was both born and raised in  Wellington, New Zealand. I am an aspiring front end developer with a passion for I.T. I've always had an interest in computers since I was young. Being a gamer myself I've found </p>
            </div>
            <p>My current skills and certificates include the following:</p>
            <ls>
                <li>NCEA levels 1,2 and 3 at Newlands College (2013-2015)</li>
                <li>Work experience/Communications at Capital Training (2016)</li>
                <li>Level 6 Web UI/UX Design (2018-2020)</li>
                <li>Basic CPR Training at New World Thorndon (2017)</li>
                <li>Fire Warden training at New World Churton Park (2020)</li>
                <li>Duty Manager training at New World Churton Park (2020)</li>

            </ls>

            <p>My current work history:</p>
            <ls>
                <li>Cleaning Assistant at New World Thorndon (2016-2017)</li>
                <li>Grocery Assistant at New World Thorndon (2017-2018)</li>
                <li>Grocery Supervisor at New World Thorndon (2018-2020)</li>
                <li>Duty Manager at Churton Park New World (Present)</li>
            </ls>



        </main >


    )
}








export default About;