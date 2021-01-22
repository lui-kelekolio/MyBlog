import React from 'react';

// import { HashRouter as Router, Route } from 'react-router-dom'


function About() {
    return (

        <main>
            <div className="who-am-i-container">
                <img className="whoami-hero-image" />
                <h1 className="whoami-title">About me</h1>
            </div>

            <div className="about-me-container1">
                <h1 className="about-me-title">Hey! I'm Lui Kelekolio</h1>

                <p className="about-me-content">I'm 22 years old and was both born and raised in  Wellington, New Zealand. I am an aspiring front end developer with a passion for I.T. I've always had an interest in computers growing up. Being a gamer I've pretty much grown up using a computer so it felt natural for me to transition into coding. What I like about coding is that you really don't need to be a genius at maths or english or anything like that. The best skill to have in my opinion is the ability to problem solve. If you're good at that then I believe you'd be great at coding, so this is something that drives me to improve my technical skills. I was never the best at maths, same goes for english. But what I am good at is problem solving so with this I believe I am capable of reaching heights I never would have been able to dream of in my career. But for now I'm still only a graduate developer which means I have a lot of work to put in before I'm able to reach my goal. But with the support of friends and family behind me, I'm ready to take on the world of coding!</p>
            </div>
            <div className="about-me-container2">
                <h1 className="about-me-title2">Quick facts about myself</h1>
                <div className="about-me-content2">
                    <ls>
                        <li>Favourite Colour: Blue</li>
                        <li>Favourite Type of Music: Hip Hop/RnB</li>
                        <li>Favourite Food: Mum's Mac n Cheese</li>
                        <li>Favourite Sport: Rugby</li>
                        <li>Favourite Coding Language: Javascript</li>
                        <li>Favourite Video Game: Rocket League</li>
                        <li>Favourite Flavoured Ice-Cream: Cookies n Cream</li>
                        <li>Favourite Fruit: Strawberries</li>
                        <li>Favourite Movie: The Truman Show</li>
                    </ls>
                </div>
            </div>

            <div className="about-me-certs">
                <p>My current skills and certificates include the following:</p>
                <ls>
                    <li>NCEA levels 1,2 and 3 at Newlands College (2013-2015)</li>
                    <li>Work experience/Communications at Capital Training (2016)</li>
                    <li>Level 6 Web UI/UX Design at Yoobee/En Spiral Dev Academy (2018-2020)</li>
                    <li>Basic CPR Training at New World Thorndon (2017)</li>
                    <li>Fire Warden training at New World Churton Park (2020)</li>
                    <li>Forklift training at New World Churton Park (2020)</li>
                    <li>Duty Manager training at New World Churton Park (2020)</li>

                </ls>

                <p>My current work history:</p>
                <ls>
                    <li>Cleaning Assistant at New World Thorndon (2016-2017)</li>
                    <li>Grocery Assistant at New World Thorndon (2017-2018)</li>
                    <li>Grocery Supervisor at New World Thorndon (2018-2020)</li>
                    <li>Duty Manager at Churton Park New World (Present)</li>
                </ls>
            </div>


        </main >


    )
}








export default About;