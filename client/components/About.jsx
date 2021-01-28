import React from 'react';
import History from './History'

// import { HashRouter as Router, Route } from 'react-router-dom'


function About() {
    return (

        <main>
            <div className="who-am-i-container">
                <img className="whoami-hero-image" />
                <h1 className="whoami-title">About me</h1>
            </div>

            <div className="about-me-container1">
                <img className="about-me-profile" src="/images/profile2.jpg" />
                {/* <h1 className="about-me-title">Hey! I'm Lui Kelekolio</h1> */}
                <p className="about-me-content">I'm a 23 year old Wellingtonian with a newly found passion for coding. Other major interests include gaming, listening to music, playing sports, hanging out with mates and spending time with the fam. I also enjoy the old beer or two on the weekends to celebrate making it through the week.  </p>
            </div>
            <div className="about-me-container2">

                <div className="about-me-content2">
                    <p className="about-me-content">If I'm not coding or hanging out with friends and family I'm usually out and about taking photos. Recently I've taken quite a liking to photography, there seems to be something about capturing a single moment in time that has me hooked.  </p>
                </div>
                <img className="about-me-profile" src="/images/boys2.jpeg" />
            </div>
            <div className="about-me-container1">
                <img className="about-me-profile" src="/images/boys.jpg" />
                {/* <h1 className="about-me-title">Hey! I'm Lui Kelekolio</h1> */}
                <p className="about-me-content">My dream is to become an outstanding front end developer, with this in mind I've dedicated most of my time to improving my technical skills. I've still got a long way to go before I can say that I've achieved this dream but I'm looking forward to the journey ahead. </p>
            </div>

            <History />


            {/* <div className="" */}

        </main >


    )
}








export default About;