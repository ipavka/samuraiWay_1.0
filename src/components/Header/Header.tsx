import s from "./Header.module.css";
import React from "react";
import {DataAuthType} from "../../redux/auth-reducer";
import {Navbar} from "../Navbar/Navbar";

type HeaderPropsType = {
    data: DataAuthType
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = ({data, isAuth}) => {
    return (<>
            <header className={s.header}>
                <Navbar data={data} isAuth={isAuth}/>
            </header>
        </>

    )
}