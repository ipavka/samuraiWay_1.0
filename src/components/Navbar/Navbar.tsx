import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {authLogOutThunkCreator, DataAuthType} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";


type NavbarPropsType = {
    data: DataAuthType
    isAuth: boolean
}

export const Navbar: React.FC<NavbarPropsType> = ({data, isAuth}) => {

    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(authLogOutThunkCreator())
    }
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialog'}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div className={s.loginBlockItem}>
                        {data?.login}
                        <button onClick={logOutHandler}>LogOut</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </nav>)
}

