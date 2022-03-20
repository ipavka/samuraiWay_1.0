import React from "react";
import dStyle from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/store";


export const DialogItem: React.FC<DialogsType> = (props) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={dStyle.dialog} key={props.id}>
            <img src="https://clck.ru/bXfBu" alt="ава"/>
            <div className={dStyle.prev__message}>
                <NavLink to={path}>{props.name}</NavLink>
                <span>Hello friend!</span>
            </div>
        </div>
    )
}