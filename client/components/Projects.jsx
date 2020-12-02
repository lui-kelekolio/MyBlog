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
                <div className="Projects-intro-title">
                    <h1>HERE ARE A FEW OF MY PROJECTS:</h1>
                </div>


                <div className="Fml-container">
                    <h1>Follow My Lead (En Spiral Dev Academy Final Group Project)</h1>
                </div>

                <div className="Spectatingfriends-container">
                    <h1>Spectating Friends Official Website (Personal Project)</h1>
                </div>

                <div className="Udemy-container">
                    <h1>Shopping Website (Udemy Final Project)</h1>
                </div>

                <div className="Minesweeper-container">
                    <h1>Minesweeper (En Spiral Dev Academy JS Project)</h1>
                </div>



            </div>

        )


    }

}

export default Projects