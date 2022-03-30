import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
            <nav>
                <div>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/subreddit/:subredditId'>
                    Subreddit
                </NavLink>
                </div>
            </nav>
    );
};

export default Header;