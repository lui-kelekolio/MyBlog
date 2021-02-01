import React from 'react'
import { Link } from 'react-router-dom'



class Projects extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (

            <div>
                <div className="who-am-i-container">
                    <img className="projects-hero-image" />
                    <h1 className="whoami-title">My Projects</h1>
                </div>

                {/* 
                <div className="Website-intro-container">
                    <div className="div-block">.</div>
                    <p className="Website-intro-para">Here are all the web applications I've made/assisted in making up to date. I've put in a lot of time to make these web apps so I hope you like them! Feel free to share some feedback so I know what I can do to improve them. Plenty more to come of course! </p>

                </div> */}


                <div className="Website-container">
                    <div id="slider">
                        <input type="radio" name="slider" id="slide1" defaultChecked></input>
                        <input type="radio" name="slider" id="slide2" ></input>
                        <input type="radio" name="slider" id="slide3" ></input>
                        <input type="radio" name="slider" id="slide4" ></input>
                        <div id="slides">
                            <div id="overflow">
                                <div class="inner">
                                    <div class="slide slide_1">
                                        <div class="slide-content">
                                            <h1 className="Website-title">Follow My Lead</h1>
                                            <p className="Website-subtitle">Enspiral Dev Academy Final Group Project</p>
                                        </div>
                                    </div>
                                    <div class="slide slide_2">
                                        <div class="slide-content">
                                            <h1 className="Website-title">Gaming App</h1>
                                            <p className="Website-subtitle">Personal Project</p>
                                        </div>
                                    </div>
                                    <div class="slide slide_3">
                                        <div class="slide-content">
                                            <h1 className="Website-title">Shopping App</h1>
                                            <p className="Website-subtitle">Udemy JS Course Final Exercise</p>
                                        </div>
                                    </div>
                                    <div class="slide slide_4">
                                        <div class="slide-content">
                                            <h1 className="Website-title">Minesweeper</h1>
                                            <p className="Website-subtitle">Enspiral Dev Academy JS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="controls">
                            <label htmlFor="slide1"></label>
                            <label htmlFor="slide2"></label>
                            <label htmlFor="slide3"></label>
                            <label htmlFor="slide4"></label>
                        </div>
                    </div >
                    <img className="Website-intro-clipart" src="/images/presenting1.jpg" />
                </div>

            </div>

        )


    }

}

export default Projects