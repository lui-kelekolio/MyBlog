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
                    <h1>Lui's Blog</h1>
                </div>

                <div className="navbar-container">
                    <Link className="nav-link" to="/login">Say Hi!</Link>
                    <Link className="nav-link" to="/">More</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/">Home</Link>
                </div>


            </div>

        )


    }

}

export default Nav