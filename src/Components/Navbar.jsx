import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar-items">
                <div className="navbar-item"> Home </div>
                <div className="navbar-item">F&Q </div>
                <div className="navbar-item" onClick={ () => window.open('https://github.com/chandankumarm55') }>Github </div>
                <div className="navbar-item">Contact </div>

            </div>
        </div>
    )
}

export default Navbar
