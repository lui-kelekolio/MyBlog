import React from 'react'
import { Link } from 'react-router-dom'


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
                        <h1 className="title">WELCOME TO MY BLOG</h1>
                        <p className="sub-title">made by Lui Kelekolio</p>
                    </div>


                    <div className="content">
                        <p className="intro-para">Hey you, yeah you. What are you doing here? I wasn't expecting anyone. Well, since you're here, my name is Lui. Nice to meet you!
                        I am a graduate web designer and a huuuugee fan of video games. What you have stumbled upon is my attempt at a blog that I will keep up to date with
                            all the latest news going on with my life. Hope you enjoy! </p>

                        <img className="profile-image" src="/images/profile2.jpeg" />
                    </div>

                    <div className="box2">

                        <div className="about-me-container">
                            <div className="home-image-div">
                                <Link to='/About'><img className="about-image" src=" /images/profile1.jpg" /></Link>
                            </div>
                            <div className="about-intro-div">
                                <p className="about-me-para">Hi! My name is Lui Kelekolio. I'm 22 years old and was both born and raised in  Wellington New Zealand. I am an aspiring front end developer with a diploma in level 6 UI/UX Web design. I've studied at places such as Yoobee's School of design and En Spiral Dev Academy so I have experience when it comes to maintaining a functionally, aesthetically pleasing website.</p>
                            </div>
                        </div>


                        <div className="hobbies-container">
                            <div className="hobbies-intro-div">
                                <p className="hobbies-para">Outside of coding I very much enjoy sports, playing video games and spending time with friends and family. At the moment my favourite game would have to be Rocket League.<br></br> Add me! Would be cool to play some time!<br></br><br></br><a className="steam-link" href="https://steamcommunity.com/profiles/76561198179209627/">Mr.Loooooway</a></p>
                            </div>
                            <div className="hobbies-image-div">
                                <Link to='/Life'><img className="hobbies-image" src="/images/received_332924380699747.jpeg" /></Link>
                            </div>

                        </div>
                        {/* <div className="image-link3">
                            <Link to='/Family'><img className="home-image" src="/images/Big-Eyes-Post-782x1024.jpg" /></Link>
                            <Link to='/Family'><p className="text-link">Family</p></Link>
                        </div> */}

                    </div>

                </main>

            </>
        )
    }



}




export default Home