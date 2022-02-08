import React from "react";
import dStyle from './Dialogs.module.css';
import {DialogItem} from "./DIalogsItem/DIalogsItem";
import {Message} from "./Message/Message";


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
