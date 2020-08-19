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
                    <div>
                        <div className="profile-logo"><img src = "/images/Logo2.png"></img></div>
                        <div className="hero-text"></div>
                        <img className="home-image" src="/images/sidekix-media-g51F6-WYzyU-unsplash.jpg" />
                        <div className="home-page-headline">Oasis Savon</div>
                        <div className="home-page-ptag">Bath products xD</div>

                    </div>


                    <div className="blurb-container">
                        <div className="blurb-headline"></div>
                        <br />
                        <div className="blurb-text">
                        </div>
                    </div>


                </main>

            </>
        )
    }



}




export default Home