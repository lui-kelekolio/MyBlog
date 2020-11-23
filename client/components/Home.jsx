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
                        <h1 className="title">WELCOME TO MY BLOG!!!</h1>
                        <p className="sub-title">by Lui Kelekolio</p>
                    </div>


                    <div className="content">
                        <p className="intro-para">Hey you, yeah you. What are you doing here? I wasn't expecting anyone. Well, since you're here, my name is Lui. Nice to meet you! 
                            I am a graduate web designer and a huuuugee fan of video games. What you have stumbled upon is my attempt at a blog that I will keep up to date with 
                            all the latest news going on with my life. Hope you enjoy! </p>

                            <img className="profile-image" src="/images/nice-view2.jpg" />
                    </div>

                    <div className="box2">
                                <div className="image-link1">
                                    <Link to='/About'><img className="home-image" src="/images/nice-view2.jpg" /></Link>
                                    <Link to='/About'><p className="text-link">A bit about me</p></Link>
                                </div>
                                <div className="image-link1">
                                    <Link to ='/Life'><img className="home-image" src="/images/nice-view1.jpg" /></Link>
                                    <Link to ='/Life'><p className="text-link">What am I doing with my life?</p></Link>
                                </div>
                                <div className="image-link1">
                                    <Link to ='/Family'><img className="home-image" src="/images/Big-Eyes-Post-782x1024.jpg" /></Link>
                                    <Link to ='/Family'><p className="text-link">Family</p></Link>
                                </div>
                           
                    </div>

                </main>

            </>
        )
    }



}




export default Home