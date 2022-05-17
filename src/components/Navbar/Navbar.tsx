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
            <div className={s.logo}>
                <img src="/img/mongo.png"/>
            </div>
            {isAuth
                ? <>
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
                        <div className={s.loginBlockItem}>
                            {data?.login}
                            <button onClick={logOutHandler}>LogOut</button>
                        </div>
                    </div>
                </>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </nav>)
}

