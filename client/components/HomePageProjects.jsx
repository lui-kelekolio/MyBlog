import React from 'react'
import { Link } from 'react-router-dom'



class HomePageProjects extends React.Component {
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
                            <img className="project-photo" src="/images/udemy4.jpg" />
                            <p className="project-para">This is a web app that I completed while doing my own personal study part time using the Udemy code course on Javascript. <br></br><br></br>
                                <Link className="Projects-redirect" to="/Projects">Check out more projects I've made right here!</Link></p>

                            <div className="div-block-projects">.</div>
                        </div>
                    </div>

                    <div className="div-block-projects-seperate1"></div>



                </div >


            </div >





        )


    }

}

export default HomePageProjects