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
                
                                                                        
                        <div className="hero-image-container">
                            
                                <img className="hero-image" src="/images/sidekix-media-g51F6-WYzyU-unsplash.jpg" />
                                <div className="hero-page-headline"><h1 className="hero-title">Welcome to Oasis Savon</h1></div>
                    
                            </div>

                     


                    <div className="blurb-container">
                        <div className="blurb-headline"></div>
                        <br />
                        <div className="blurb-text"><p>Hello and welcome to Oasis Savon. Here we sell exotic soaps and bath accessories for your liking.</p>
                        </div>
                    </div>


                </main>

            </>
        )
    }



}




export default Home