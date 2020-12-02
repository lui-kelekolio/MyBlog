import React from 'react'
import { Link } from 'react-router-dom'
import Projects from './Projects'


class Home extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (
            <>
                <main>
                    <div className="box1">
                        <h1 className="title">WELCOME TO MY BLOG </h1>
                        <p className="sub-title">made by Lui Kelekolio</p>
                    </div>


                    <div className="content">
                        <p className="intro-para">Hey you, yeah you. What are you doing here? I wasn't expecting anyone. Well, since you're here, my name is Lui. Nice to meet you!
                        I am a graduate web designer and a huuuugee fan of video games. What you have stumbled upon is my attempt at a blog that I will keep up to date with
                            all the latest news going on with my life. Hope you enjoy! </p>

                        <img className="profile-image" src="/images/profile2.jpg" />
                    </div>

                    <div>

                        <div className="about-me-container">
                            <div className="about-image-div">
                                <Link to='/About'><img className="about-image" src=" /images/profile1.jpg" /></Link>
                            </div>
                            <div className="about-intro-div">
                                <p className="about-me-para">Hi! My name is Lui Kelekolio. I'm 22 years old and was both born and raised in  Wellington New Zealand. I am an aspiring front end developer with a diploma in level 6 UI/UX Web design. I've studied at places such as Yoobee's School of design and En Spiral Dev Academy so I have experience when it comes to maintaining a functionally, aesthetically pleasing website.</p>
                            </div>
                        </div>


                        <div className="hobbies-container">
                            <div className="hobbies-intro-div">
                                <p className="hobbies-para">Outside of coding I very much enjoy sports, listening to music, playing video games and spending time with friends and family. At the moment my favourite game would have to be Rocket League.<br></br> Add me! Would be cool to play some time!<br></br><br></br><a className="steam-link" href="https://steamcommunity.com/profiles/76561198179209627/">Steam Profile click here!</a></p>
                            </div>
                            <div className="hobbies-image-div">
                                <Link to='/Hobbies'><img className="hobbies-image" src="/images/received_474066093286936.jpeg" /></Link>
                            </div>

                        </div>
                        <div className="plan-container">
                            <div className="plan-image-div">
                                <Link to='/Plan'><img className="plan-image" src="/images/kahu1.jpg" /></Link>
                            </div>
                            <div className="plan-intro-div">
                                <p className="plan-para">My goal is to become an efficient front end developer. I still have a lot to do to achieve this goal but I have never been more motivated to give this my all. I plan on further improving my knowledge and technical skills to help me achieve this goal.</p>
                            </div>

                        </div>

                    </div>

                    <Projects />

                </main>

            </>
        )
    }



}




export default Home