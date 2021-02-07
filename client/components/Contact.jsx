import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'


class Contact extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (

            <div>
                <div className="who-am-i-container">
                    <Nav />
                    <img className="Contact-hero-image" />
                    <h1 className="whoami-title">Contact</h1>
                </div>
                <div className="content">
                    <p className="intro-para">Feel free to contact me through these details if you have anything you'd like to ask, any advice you'd like to give or if you just feel like having a chat. Always keen to meet new people so if you'd like to arrange a get together just let me know. Thank you!</p>

                    <img className="profile-image" src="/images/profile1.jpg" />

                </div>

                <div className="Contact-container">
                    <a href="https://www.facebook.com/lui.kelekolio.5/" ><img className="Contact-logo" src="/images/fb.webp" /></a>
                    <a href="https://www.instagram.com/looooowaay/"><img className="Contact-logo" src="/images/insta.webp" /></a>
                    <a href="https://github.com/lui-kelekolio"><img className="Contact-logo" src="/images/github.png" /></a>
                    <a href="https://www.linkedin.com/in/lui-kelekolio-b43b541a4/" ><img className="Contact-logo" src="/images/linkedin.png" /></a>
                    <img className="Contact-logo" src="/images/gmail.jpg" />

                </div >
            </div>

        )


    }

}

export default Contact