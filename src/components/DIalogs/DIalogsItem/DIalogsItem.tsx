import React from "react";
import dStyle from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../index";


export const DialogItem = (props: DialogsType) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={dStyle.dialog} key={props.id}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}