import React from 'react';
import History from './History'
import Nav from './Nav'
// import { HashRouter as Router, Route } from 'react-router-dom'


function About() {
    return (

        <main>
            < Nav />
            <div className="who-am-i-container">
                <img className="whoami-hero-image" />
                <h1 className="whoami-title">About me</h1>
            </div>

            <div className="about-me-container1">
                <img className="about-me-profile" src="/images/profile2.jpg" />
                {/* <h1 className="about-me-title">Hey! I'm Lui Kelekolio</h1> */}
                <p className="about-me-content">I'm a 23 year old Wellingtonian with about two years of coding experience under my belt. Other major interests include gaming, listening to music, playing sports, hanging out with mates and spending time with the fam. I also enjoy the odd beer or two on the weekends to celebrate making it through the week.  </p>
            </div>
            <div className="about-me-container2">

                <div className="about-me-content2">
                    <p className="about-me-content">I was first introduced to coding through my best friend who had previously studied at Whitecliff. He convinced me to attend a bootcamp style course known as Enspiral Dev Academy. Through this course I was able to build a newly found passion for coding. I was also granted the opportunity to meet and work with some amazing young developers like myself!</p>
                </div>
                <img className="about-me-profile" src="/images/kahu7.jpg" />
            </div>
            <div className="about-me-container1">
                <img className="about-me-profile" src="/images/boys2.jpeg" />
                {/* <h1 className="about-me-title">Hey! I'm Lui Kelekolio</h1> */}
                <p className="about-me-content">My dream is to become an outstanding front end developer, with this in mind I've dedicated most of my time to improving my technical skills. I've still got a long way to go before I can say that I've achieved this dream but I'm looking forward to the journey ahead. </p>
            </div>

            <History />

            <div className="Steam-container">
                <div className="about-me-container1">

                    {/* <h1 className="about-me-title">Hey! I'm Lui Kelekolio</h1> */}
                    <p className="about-me-content">My dream is to become an outstanding front end developer, with this in mind I've dedicated most of my time to improving my technical skills. I've still got a long way to go before I can say that I've achieved this dream but I'm looking forward to the journey ahead. </p>
                    <img className="about-me-profile1" src="/images/steam.png" />
                </div>
            </div>


            {/* <div className="" */}

        </main >


    )
}








export default About;