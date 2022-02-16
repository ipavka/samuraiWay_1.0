import React from "react";
import dStyle from './Dialogs.module.css';
import {DialogItem} from "./DIalogsItem/DIalogsItem";
import {Message} from "./Message/Message";
import {StateAppDialogsType} from "../../redux/state";


export const Dialogs: React.FC<StateAppDialogsType> = (props) => {
    return (
        <div className={dStyle.dialogs}>
            <div className={dStyle.dialogsItems}>
                {props.state.dialogs.map((el) => {
                    return <DialogItem key={`${el.id}${el.name}`} name={el.name} id={el.id}/>
                })}
            </div>
            <div className={dStyle.messages}>
                {props.state.messages.map(el => {
                    return <Message key={el.id} message={el.message} id={el.id}/>
                })}
            </div>
        </div>
    )
}
