import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../images/logo2.jpg';
import { logout } from '../../firebaseAuth';


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
                        to="/map"
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
            <button className="signoutbutton" onClick={logout}>
                <span>
                        Sign Out
                </span>
            </button>
        </nav>
    )
}

export default NavBar