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
                                <div className="hero-page-headline">
                                    <h1 className="hero-title">Welcome to Oasis Savon</h1>
                                    <h3 className="hero-title2">testing testing 1 2 3</h3>
                                </div>
                                
                        </div>

                     


                    <div className="blurb-container">
                        <div className="blurb-headline"></div>
                        <br />
                        <div className="blurb-text"><p>This helps explain what we meant in the previous section when we said that racket provides require and the function-calling syntax. Libraries are not restricted to exporting values, such as functions; they can also define new syntactic forms.<br></br><br></br> In this sense, Racket isn’t exactly a language at all; it’s more of an idea for how to structure a language so that you can extend it or create entirely new languages.</p>

                        </div>
                    </div>


                </main>

            </>
        )
    }



}




export default Home