import React, { Component } from 'react'
import { MemoryRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <MemoryRouter>
    <div>
      <ul>
        <li><Link to='/'><button>Home</button></Link></li>
        <li><Link to='/about'><button>About</button></Link></li>
        <li><Link to='/friends'><button>Friends</button></Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </div>
  </MemoryRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>Aboutページです</p>
  </div>
)
const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>Friendsページです</p>
  </div>
)

export default App