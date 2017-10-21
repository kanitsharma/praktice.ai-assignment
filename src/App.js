import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Chatpage from './Pages/chatpage'
import Loginpage from './Pages/loginpage'

export default () => (
  <Router history={hashHistory}>
    <Route path='/' component={Chatpage} />
    <Route path='/login' component={Loginpage} />
  </Router>
)
