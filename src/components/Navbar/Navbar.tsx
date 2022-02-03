import React from 'react';
import navStyle from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={navStyle.nav}>
            <div className={navStyle.item}>
                <a href={'/profile'}>Profile</a>
            </div>
            <div className={`${navStyle.item} ${navStyle.gold}`}>
                <a href={'/dialog'}>Messages</a>
            </div>
            <div className={navStyle.item}>
                <a href={'/news'}>News</a>
            </div>
            <div className={navStyle.item}>
                <a href={'/music'}>Music</a>
            </div>
            <div className={navStyle.item}>
                <a href={'/settings'}>Settings</a>
            </div>
        </nav>)
}

