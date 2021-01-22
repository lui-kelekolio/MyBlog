import React from 'react'
import { Link } from 'react-router-dom'



class Projects extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (


            <div className="Projects-container">



                <div className="Projects-links-container">

                    <div className="projects-flex-1">
                        <div className="project-container">
                            <div className="div-block-projects">.</div>
                            <p className="projects-subtitle">Follow My Lead (EDA Final Group Project)</p>
                            <div className="project-info-container">
                                <img className="project-photo" src="/images/ice-dog.jpg" />
                                <p className="project-para">This is a website that me and five other developers made during our final week of EDA. We call it Follow My Lead. This web app gives you the opportunity to connect will fellow dog lovers in your area to meet and arrange dog walks with them.</p>
                                <div className="div-block-projects">.</div>

                            </div>
                        </div>
                        <div className="div-block-projects-seperate1">.</div>

                        <div className="project-container">
                            <div className="div-block-projects">.</div>
                            <p className="projects-subtitle">Gaming App (Personal Project)</p>
                            <div className="project-info-container" >
                                <img className="project-photo" src="/images/gaming.jpg" />
                                <p className="project-para">This has been a personal project of my own that I decided to do while studying at EDA, the main purpose of this website is to promote my friend's gaming channel.</p>
                                <div className="div-block-projects">.</div>


                            </div>
                        </div>
                        <div className="div-block-projects-seperate2">.</div>
                    </div>


                    <div className="project-container">
                        <div className="div-block-projects">.</div>
                        <p className="projects-subtitle">Shopping Website (Udemy Final Project)</p>
                        <div className="project-info-container">
                            <img className="project-photo" src="/images/shopping.jpg" />
                            <p className="project-para">This is a web app that I completed while doing my own personal study part time using the Udemy code course on Javascript. </p>
                            <div className="div-block-projects">.</div>

                        </div>
                    </div>
                    <div className="div-block-projects-seperate1">.</div>

                    <div className="project-container">
                        <div className="div-block-projects">.</div>
                        <p className="projects-subtitle">Minesweeper (En Spiral Dev Academy JS Project)</p>
                        <div className="project-info-container">
                            <img className="project-photo" src="/images/minesweep.jpg" />
                            <p className="project-para">This is a simple app that I made during my first week of EDA. A small simple game of minesweeper!</p>
                            <div className="div-block-projects">.</div>

                        </div>
                    </div>
                    <div className="div-block-projects-seperate2">.</div>
                </div >

            </div >





        )


    }

}

export default Projects