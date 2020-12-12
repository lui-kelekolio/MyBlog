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

                    <div className="projects-line1">
                        <div className="Fml-container">
                            <p className="projects-subtitle">Follow My Lead (En Spiral Dev Academy Final Group Project)</p>
                            <div className="fml-image-div">
                                <Link to='/Hobbies'><img className="fml-image" src="/images/ice-dog.jpg" /></Link>
                            </div>
                        </div>


                        <div className="Fml-container">
                            <p className="projects-subtitle">Gaming App (Personal Project)</p>
                            <div className="fml-image-div">
                                <Link to='/Hobbies'><img className="fml-image" src="/images/gaming.jpg" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="projects-line1">
                        <div className="Fml-container">
                            <p className="projects-subtitle">Shopping Website (Udemy Final Project)</p>
                            <div className="fml-image-div">
                                <Link to='/Hobbies'><img className="fml-image" src="/images/ice-dog.jpg" /></Link>
                            </div>
                        </div>


                        <div className="Fml-container">
                            <p className="projects-subtitle">Minesweeper (En Spiral Dev Academy JS Project)</p>
                            <div className="fml-image-div">
                                <Link to='/Hobbies'><img className="fml-image" src="/images/ice-dog.jpg" /></Link>
                            </div>
                        </div>
                    </div>

                </div>



            </div>

        )


    }

}

export default Projects