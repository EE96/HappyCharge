import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.jpg';

function NavBar() {
    return (
        <nav className='navbar'>
        <div className="title">
            <h1 className="title--text">HappyCharge</h1>
            <img src={logo} alt="logo" className="logo"></img>
        </div>
            <button className="homebutton"> 
            <span>
                <Link 
                    to="/"
                    className='homelink'>
                    Map
                </Link> 
            </span>
            </button>
            <button className="aboutbutton">
            <span>
          
                <Link 
                    to="/about"
                    className="aboutlink">
                    About
                </Link> 
            </span>
            </button>            
            <button className="profilebutton">
            <span>
                <Link 
                    to="/profile"
                    className="profilelink">
                    User Profile
                </Link>
            </span>
            </button>
        </nav>
    )
}

export default NavBar