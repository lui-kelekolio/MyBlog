import React from 'react'
import { Link } from 'react-router-dom'
// import ScriptTag from 'react-script-tag';

// const Demo = props => (<ScriptTag type="text/javascript" src="/path/to/resource.js" />)


class Nav extends React.Component {
    componentDidMount() {

        const toggleButton = document.getElementsByClassName("Toggle-button")[0]
        const navBarLinks = document.getElementsByClassName("Navbar-links")[0]

        toggleButton.addEventListener('click', () => {
            navBarLinks.classList.toggle('active')
        })

    }


    render() {
        return (


            <div className="Navbarcontainer">

                <div className="Navbar-logo">Lui's Portfolio</div>
                <a className="Toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className="Navbar-links">
                    <ul>
                        <li><Link className="Navbar-button" to="/contact">Contact</Link></li>
                        <li><Link className="Navbar-button" to="/about">About Me</Link></li>
                        <li><Link className="Navbar-button" to="/projects">Projects</Link></li>
                        {/* <li><Link className="Navbar-button" to="/photos">Photo Gallery</Link></li> */}
                        <li><Link className="Navbar-button" to="/">Home</Link></li>
                    </ul>
                </div>


            </div >

        )


    }

}

export default Nav