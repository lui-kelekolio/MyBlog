import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'


const App = () => {
  return (
    <Router>
      <Route path="/" component={Nav} />
      <Route path="/" component={Home} />

      <Route path="/" component={Footer} />
    </Router>
  )
}

export default App
