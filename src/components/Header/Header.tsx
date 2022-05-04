import s from "./Header.module.css";
import React from "react";
import {authLogOutThunkCreator, DataAuthType} from "../../redux/auth-reducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

type HeaderPropsType = {
    data: DataAuthType
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = ({data, isAuth}) => {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(authLogOutThunkCreator())
    }
    return (<>
            <header className={s.header}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9Bj04UUgRET0JT4J8kZ3Lq60KlDUrrUAuA&usqp=CAU"
                    alt="logo"/>
                <div className={s.loginBlock}>
                    {isAuth
                        ? <div className={s.loginBlockItem}>
                            {data?.login}
                            <button onClick={logOutHandler}>LogOut</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        </>

    )
}