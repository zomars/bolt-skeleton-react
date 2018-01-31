import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <h2><Link to="/">{process.env.REACT_APP_SITENAME}</Link></h2>
    <p>{process.env.REACT_APP_PAYOFF}</p>
    <hr />
  </header>
)

export default Header
