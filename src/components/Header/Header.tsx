import headerStyle from "./Header.module.css";
import React from "react";
import {DataAuthType} from "../../redux/auth-reducer";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
    data: DataAuthType
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = ({data, isAuth}) => {
    return (<>
            <header className={headerStyle.header}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9Bj04UUgRET0JT4J8kZ3Lq60KlDUrrUAuA&usqp=CAU"
                    alt="logo"/>
                <div className={headerStyle.loginBlock}>
                    {isAuth ? data?.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        </>

    )
}