import React from 'react';
import navStyle from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navStyle.nav}>
            <div className={navStyle.item}>
                <a>Profile</a>
            </div>
            <div className={navStyle.item}>
                <a>Messages</a>
            </div>
            <div className={navStyle.item}>
                <a>News</a>
            </div>
            <div className={navStyle.item}>
                <a>Music</a>
            </div>
            <div className={navStyle.item}>
                <a>Settings</a>
            </div>
        </nav>)
}

export default Navbar;