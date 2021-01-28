import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import About from './About'
import Footer from './Footer'
import Plan from './Plan'
import HomePageProjects from './HomePageProjects'
import Photos from './Photos'
import History from './History'
import Projects from './Projects'
import Contact from './Contact'


const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path='/Photos' component={Photos} />
        <Route exact path='/Plan' component={Plan} />
        <Route exact path='/HomePageProjects' component={HomePageProjects} />
        <Route exact path='/History' component={History} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/Contact' component={Contact} />
        {/* <Route path="/" component={Footer} /> */}
      </React.Fragment>
    </Router>
  )
}

export default App
