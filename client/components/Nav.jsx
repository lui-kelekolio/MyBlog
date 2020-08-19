import React from 'react'
// import { Link } from 'react-router-dom'



class Nav extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (


        <div className="nav">

            <div className="Nav-bar">
                <li className="nav-link" to='/Home'>Home</li>
                <li className="nav-link" to='/about'>About</li>
                <li className="nav-link" to='/shop'>Shop</li>    
            </div>
                
                
            <div className="box2"><img className="logo" src="/images/Logo2.png"></img></div>
         

            <div className="Login"><li className="nav-link2" to='/Login'>Login/Register</li></div>
        </div>

        )


    }

}

export default Nav