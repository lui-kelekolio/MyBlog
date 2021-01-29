import React from 'react'
import { Link } from 'react-router-dom'
import Projects from './HomePageProjects'

class Home extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (
            <>
                <main>

                    <div className="Hero-content">
                        <img className="Nav-hero-image" />
                        <h1 className="title">Welcome To My Portfolio </h1>





                        <div className="content">
                            <div className="div-block">.</div>
                            <p className="intro-para">Hey! My name is Lui. Nice to meet you!
                            I am a graduate web designer with a strong desire to become an outstanding front end developer. This portfolio will display all my web applications that I've made/assisted in making. If you have any questions feel free to contact me through my email address. Hope you enjoy! </p>

                            <img className="profile-image" src="/images/profile1.jpg" />
                            <div className="div-block2">.</div>
                        </div>

                        <div className="main-container">


                            <div className="hobbies-container">
                                <div className="about-title">
                                    <h1>Hobbies/Interests</h1>
                                </div>
                                <div className="hobbies-image-div">
                                    {/* <Link to='/Hobbies'><img className="hobbies-image" src="/images/received_474066093286936.jpeg" /></Link> */}
                                </div>
                                <div>
                                    <p className="hobbies-para">Outside of coding I very much enjoy sports, listening to music, playing video games and spending time with friends and family. At the moment my favourite game would have to be Rocket League.<br></br> Add me! Would be cool to play some time!<br></br><br></br><a className="steam-link" href="https://steamcommunity.com/profiles/76561198179209627/">Steam Profile click here!</a></p>
                                </div>


                            </div>

                            <div className="about-me-container">
                                <div className="about-title">
                                    <h1>About Me</h1>
                                </div>
                                <div className="about-image-div">
                                    {/* <Link to='/About'><img className="about-image" src=" /images/profile1.jpg" /></Link> */}
                                </div>
                                <div>
                                    <p className="about-me-para">My name is Lui Kelekolio. I'm 23 years old and was both born and raised in  Wellington New Zealand. I am an aspiring front end developer with a diploma in level 6 UI/UX Web design. I've studied at places such as Yoobee's School of design and En Spiral Dev Academy so I have experience when it comes to maintaining a functionally, aesthetically pleasing website.</p>
                                </div>
                            </div>

                            <div className="plan-container">
                                <div className="about-title">
                                    <h1>Future Plans</h1>
                                </div>
                                <div className="plan-image-div">
                                    {/* <Link to='/Plan'><img className="plan-image" src="/images/kahu1.jpg" /></Link> */}
                                </div>
                                <div>
                                    <p className="plan-para">My goal is to become an efficient front end developer. I still have a lot to do to achieve this goal but I have never been more motivated to give this my all. I plan on further improving my knowledge and technical skills to help me achieve this goal.</p>
                                </div>

                            </div>

                        </div>
                        <div className="projects-main-container">
                            <div className="Projects-title-container">
                                <h1 className="projects-title">Here are a few of my projects:</h1>
                            </div>
                        </div>
                        <Projects />
                    </div>
                </main>

            </>
        )
    }



}




export default Home