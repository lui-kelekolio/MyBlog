import React from 'react'
// import { Link } from 'react-router-dom'


class Home extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (
            <>
                <main>

                    <div className="hero-image">
                        <div className="hero-text"></div>
                        <img className="home-image" src="/images/sidekix-media-g51F6-WYzyU-unsplash.jpg" />
                        <div className="home-page-headline">Oasis Savon</div>
                        <div className="home-page-ptag">Bath products xD</div>

                    </div>


                    <div className="blurb-container">
                        <div className="blurb-headline">Who are we? </div>
                        <br />
                        <div className="blurb-text">We are a group of web development students who all happen to love dogs!
                        We are working together to improve our development skills by creating a platform for dog lovers that can't own dogs and dog owners that don't always have the time to walk them.
                        </div>
                    </div>


                </main>

            </>
        )
    }



}




export default Home