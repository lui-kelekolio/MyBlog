import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (
            <>
                <main>
                    <div className="box1">
                        <h1 className="title">WELCOME TO MY BLOG!!!</h1>
                        <p className="sub-title">by Lui Kelekolio</p>
                    </div>

                    <div className="box2">
                            <div className="image-link1">
                                <img className="home-image" src="/images/nice-view2.jpg" />
                                <p className="text-link">A bit about me</p>
                            </div>
                            <div className="image-link1">
                                <img className="home-image" src="/images/nice-view1.jpg" />
                                <p className="text-link">Hobbies and Interests</p>
                            </div>
                            <div className="image-link1">
                                <img className="home-image" src="/images/Big-Eyes-Post-782x1024.jpg" />
                                <p className="text-link">Family</p>
                            </div>
                        
                    </div>

                </main>

            </>
        )
    }



}




export default Home