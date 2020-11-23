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
  
            {/* <div className="box2">
                <h1 className="logo">Lui Kelekolio</h1>
            </div> */}

            {/* <div className="Login"><h1>Oasis Savon</h1></div> */}


            <div className="Nav-bar">
                <li><Link className="nav-link" to="/login">Say Hi!</Link></li> 
                <li><Link className="nav-link" to="/">More</Link></li>
                <li><Link className="nav-link" to="/about">About</Link></li>
                <li><Link className="nav-link" to="/">Home</Link></li> 
            </div>

            
        </div>

        )


    }

}

export default Nav