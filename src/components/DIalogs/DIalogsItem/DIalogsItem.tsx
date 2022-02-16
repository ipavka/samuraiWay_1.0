import React from "react";
import dStyle from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/state";


export const DialogItem: React.FC<DialogsType> = (props) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={dStyle.dialog} key={props.id}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}