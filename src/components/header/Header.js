import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
// import logo from './logo.png';

// importeren van logo geeft steeds foutmeldingen

function Header() {
    return (
            <nav>
                <div>
                <NavLink className="navlink" to='/'>
                    Home
                </NavLink>
                <NavLink to='/subreddit/:subredditId'>
                    Subreddit
                </NavLink>
                </div>
                {/*<img src={logo} alt='logo' width="400px"/>*/}
            </nav>
    );
}

export default Header;