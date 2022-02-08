import React from "react";
import dStyle from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


export type DialogsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogsType) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={dStyle.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}