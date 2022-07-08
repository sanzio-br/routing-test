import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container">
        <div className="navbar-brand">
            Test app
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/routing-test">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/routing-test/about">
                        About
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar