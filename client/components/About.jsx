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
                <img className="about-me-profile" src="/images/profile1.jpg" />
                {/* <h1 className="about-me-title">Hey! I'm Lui Kelekolio</h1> */}
                <p className="about-me-content">I'm a 23 year old Wellingtonian with a newly found passion for coding. Other major interests include gaming, listening to music, playing sports, hanging out with mates and spending time with the fam. I also enjoy the old beer or two on the weekends to celebrate making it through the week.  </p>
            </div>
            <div className="about-me-container2">

                <div className="about-me-content2">
                    <p className="about-me-content">If I'm not coding or hanging out with friends and family I'm usually out and about taking photos. Recently I've taken quite a liking to photography. Something about capturing a single moment in time seems to   </p>
                </div>
                <img className="about-me-profile" src="/images/boys2.jpeg" />
            </div>



        </main >


    )
}








export default About;