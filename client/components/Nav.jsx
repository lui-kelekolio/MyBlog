import React from 'react'
import { Link } from 'react-router-dom'



class Nav extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (


            <div className="nav">

                <div className="logo">
                    <h1>Lui's Portfolio</h1>
                </div>

                <div className="navbar-container">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                    <Link className="nav-link" to="/photos">Photo Gallery</Link>
                    <Link className="nav-link" to="/">Home</Link>
                </div>


            </div>

        )


    }

}

export default Nav