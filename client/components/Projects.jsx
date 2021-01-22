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
                            <div className="fml-image-div">
                                <img className="project-photo" src="/images/ice-dog.jpg" />
                                <div className="div-block-projects">.</div>

                            </div>
                        </div>
                        <div className="div-block-projects-seperate1">.</div>

                        <div className="project-container">
                            <div className="div-block-projects">.</div>
                            <p className="projects-subtitle">Gaming App (Personal Project)</p>
                            <div className="fml-image-div" >
                                <img className="project-photo" src="/images/gaming.jpg" />
                                <div className="div-block-projects">.</div>


                            </div>
                        </div>
                        <div className="div-block-projects-seperate2">.</div>
                    </div>


                    <div className="project-container">
                        <div className="div-block-projects">.</div>
                        <p className="projects-subtitle">Shopping Website (Udemy Final Project)</p>
                        <div className="fml-image-div">
                            <img className="project-photo" src="/images/shopping.jpg" />
                            <div className="div-block-projects">.</div>

                        </div>
                    </div>
                    <div className="div-block-projects-seperate1">.</div>

                    <div className="project-container">
                        <div className="div-block-projects">.</div>
                        <p className="projects-subtitle">Minesweeper (En Spiral Dev Academy JS Project)</p>
                        <div className="fml-image-div">
                            <img className="project-photo" src="/images/minesweep.jpg" />
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