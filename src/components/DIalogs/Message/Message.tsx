import dStyle from "./../Dialogs.module.css";
import React from "react";
import {MessagesType} from "../../../redux/store";


export const Message = (props: MessagesType) => {
    return <div className={dStyle.msg} key={props.id}>{props.message}</div>
}