import React from "react";
import dStyle from './Dialogs.module.css';
import {DialogItem} from "./DIalogsItem/DIalogsItem";
import {Message} from "./Message/Message";
import {DialogsPage} from "../../index";



export const Dialogs: React.FC<DialogsPage> = (props) => {
    return (
        <div className={dStyle.dialogs}>
            <div className={dStyle.dialogsItems}>
                {props.dialogs.map((el) => {
                    return <DialogItem name={el.name} id={el.id}/>
                })}
            </div>
            <div className={dStyle.messages}>
                {props.messages.map(el => <Message message={el.message} id={el.id}/>)}
            </div>
        </div>
    )
}
