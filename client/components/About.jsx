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
                    <p className="about-me-content">I'm a 23 year old Wellingtonian with a newly found passion for coding. Other major interests include gaming, listening to music, playing sports, hanging out with mates and spending time with the fam. I also enjoy the old beer or two on the weekends to celebrate making it through the week.  </p>
                </div>
                <img className="about-me-profile" src="/images/boys2.jpeg" />
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