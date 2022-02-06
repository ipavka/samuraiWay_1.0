import React from "react";
import dStyle from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}


const dialogsData = [
    {id: 1, name: "Dimon"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Max"},
    {id: 4, name: "Svetlana"},
    {id: 5, name: "Elena"},
    {id: 6, name: "Pavel"},
]

const messagesData = [
    {id: 1, message: "Hi!!!"},
    {id: 2, message: "Yep!!"},
    {id: 3, message: "Goodbye"},
]

const DialogItem = (props: DialogsType) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={dStyle.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props: MessageType) => {
    return <div className={dStyle.msg}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={dStyle.dialogs}>
            <div className={dStyle.dialogsItems}>
                {dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)}
            </div>
            <div className={dStyle.messages}>
                {messagesData.map(el => <Message message={el.message} id={el.id}/>)}
            </div>
        </div>
    )
}
