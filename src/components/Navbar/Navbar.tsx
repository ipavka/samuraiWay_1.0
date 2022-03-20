import React from 'react';
import navStyle from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friends";
import {StateAppNavbarType} from "../../redux/store";

export const Navbar:React.FC<StateAppNavbarType> = (props) => {
    return (
        <nav className={navStyle.nav}>
            <div className={navStyle.item}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={'/dialog'}>Messages</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={'/news'}>News</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={'/music'}>Music</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={'/settings'}>Settings</NavLink>
            </div>
            <div className={navStyle.item__friends}>
                <NavLink to={'/friends'}>Friends</NavLink>
                <Friends friends={props.state.friends}/>
            </div>
        </nav>)
}

