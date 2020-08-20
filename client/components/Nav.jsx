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
  
            <div className="box2"><img className="logo" src="/images/Logo2 - Copy.png"></img></div>

            {/* <div className="Login"><h1>Oasis Savon</h1></div> */}


            <div className="Nav-bar">
                <li><Link className="nav-link" to="/login">Login/Register</Link></li> 
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/about">About</Link></li>
                <li><Link className="nav-link" to="/shop">Shop</Link></li> 
                  
            </div>

            
        </div>

        )


    }

}

export default Nav