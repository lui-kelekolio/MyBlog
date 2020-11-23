import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import About from './About'
import Footer from './Footer'


const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/" component={Footer} />
      </React.Fragment>
    </Router>
  )
}

export default App
