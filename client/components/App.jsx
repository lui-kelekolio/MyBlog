import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import About from './About'
import Footer from './Footer'
import Hobbies from './Hobbies'
import Plan from './Plan'
import Projects from './Projects'


const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path='/Hobbies' component={Hobbies} />
        <Route exact path='/Plan' component={Plan} />
        <Route exact path='/Projects' component={Projects} />
        <Route path="/" component={Footer} />
      </React.Fragment>
    </Router>
  )
}

export default App
