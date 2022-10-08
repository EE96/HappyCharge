import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../images/logo2.jpg';
import { logout } from '../../firebaseAuth';
import styles  from './Layout.module.css'


function NavBar() {
    return (
        <nav className={ styles.navbar }>
            <div className= { styles.title }>
                <h1 className={ styles.titletext }>HappyCharge</h1>
                <img src={logo} alt="logo" className={ styles.logo }></img>
            </div>
            <button className={ styles.homebutton }>
                <span>
                    <Link
                        to="/map"
                        className={ styles.homelink }>
                        Map
                    </Link>
                </span>
            </button>
            <button className={ styles.aboutbutton }>
                <span>

                    <Link
                        to="/about"
                        className={ styles.aboutlink }>
                        About
                    </Link>
                </span>
            </button>
            <button className={ styles.signoutbutton } onClick={logout}>
                <span>
                        Sign Out
                </span>
            </button>
        </nav>
    )
}

export default NavBar