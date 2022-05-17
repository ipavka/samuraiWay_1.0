import React from 'react';
import {NavLink} from "react-router-dom";
import {FriendsContainer} from "../Friends/FriendsContainer";
import s from './Navbar.module.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export const NavContainer = () => {
    const authStatus = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    return (
        <>
            {authStatus && <div className={s.mainBlock}>
                <div className={s.mainItem}>
                    <div>
                        <NavLink to={'/news'}>News</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/music'}>Music</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/settings'}>Settings</NavLink>
                    </div>
                </div>
                <div className={s.mainItem}>
                    <NavLink to={'/friends'}>Friends</NavLink>
                    <FriendsContainer/>
                </div>
            </div>}
        </>
    );
};

