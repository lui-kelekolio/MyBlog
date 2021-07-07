import React from 'react'
import { Link } from 'react-router-dom'
import Projects from './HomePageProjects'
import Nav from './Nav'
class Home extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (
            <>
                <main>

                    <div className="Home-Hero-div">
                        <h1 className="Hero-title">Welcome To My Portfolio </h1>
                        <div className="Hero-image-container">
                            <img className="Hero-image" src="/images/kahu1.jpg" />
                        </div>
                        <div className="Toggle-background">
                            <span className="Toggle-background-color"></span>
                        </div>
                    </div>



                    <div className="content">
                        <p className="intro-para">Hey! My name is Lui. Nice to meet you!
                            I am a graduate web designer with a strong desire to become an outstanding front end developer. This portfolio will display all my web applications that I've made/assisted in making. If you have any questions feel free to contact me. Hope you enjoy! </p>

                        <img className="profile-image" src="/images/profile1.jpg" />

                    </div>

                    <div className="main-container">


                        <div className="hobbies-container">
                            <div className="about-title">
                                <h1>What is this?</h1>
                            </div>
                            <div className="hobbies-image-div">
                                {/* <Link to='/Hobbies'><img className="hobbies-image" src="/images/received_474066093286936.jpeg" /></Link> */}
                            </div>
                            <div>
                                <p className="content-para">This here is my current portfolio. The main purpose of this portfolio is to put myself out there and give you a brief introduction of myself. I will also be displaying all of the applications I've developed to show you the technical level I am currently at. I am always willing to accept feedback and advice to further improve my skills so please let me know through my contact details what it is I can work on, thanks in advance! In short I suppose this is a digital copy of my C.V.</p>
                            </div>


                        </div>

                        <div className="about-me-container">
                            <div className="about-title">
                                <h1>A bit about me</h1>
                            </div>
                            <div className="about-image-div">
                                {/* <Link to='/About'><img className="about-image" src=" /images/profile1.jpg" /></Link> */}
                            </div>
                            <div>
                                <p className="content-para">My name is Lui Kelekolio. I'm 23 years old and come from both Tokelau and Samoa but was born and raised in Wellington, New Zealand. I have been coding for a little under two years and have been loving it ever since. I've seen some amazing web creations from people over the world and I believe this is one of the main reasons why my dream is to become an outstanding front end developer. Outside of coding I love listening to music, gaming and hanging out with friends and family. </p>
                            </div>
                        </div>

                        <div className="plan-container">
                            <div className="about-title">
                                <h1>Future plans</h1>
                            </div>
                            <div className="plan-image-div">
                                {/* <Link to='/Plan'><img className="plan-image" src="/images/kahu1.jpg" /></Link> */}
                            </div>
                            <div>
                                <p className="content-para">I have a few goals that I am aiming to achieve throughout my life. One major career goal for me is to work as a front end developer. I am currently working as a freelancer, developing my technical skills in order to get closer to this goal. By putting the time in to practice I believe I'll be able to achieve this goal very soon. A personal goal of mine would be to travel around the world, however with what's going on right now I doubt I'll be able to achieve this goal for quite some time.</p>
                            </div>

                        </div>
                        <div className="projects-main-container">
                            <div className="Projects-title-container">
                                <h1 className="projects-title">Here are a few of my projects:</h1>
                            </div>
                        </div>
                    </div>

                    <Projects />
                    {/* 
                    <div className="photo-content">
                        <div className="content2">
                            <img className="profile-image" src="/images/photographer1.jpg" />
                            <div className="Projects-title-container">
                                <p className="intro-para">Outside of coding I have a strong passion for photography. This hobby of mine is fairly new so I'm unfortunately not too skilled when it comes to capturing the perfect moment in time but I find a lot of peace and enjoyment out of taking photos, so much that I've decided to post some of my best pictures (in my own opinion) on my portfolio. If there are any professional photographers here checking out my photos please let me know what I can do to improve! Always looking to get better in anything I do.</p>

                                <br></br>
                                <Link className="photos-redirect" to="/Photos">Click here to view all photos</Link>


                            </div>

                        </div>

                    </div> */}

                </main>

            </>
        )
    }



}




export default Home