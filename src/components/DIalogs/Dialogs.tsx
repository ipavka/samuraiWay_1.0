import React from "react";
import dStyle from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}


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
                <DialogItem name={"Dimon"} id={1}/>
                <DialogItem name={"Andrey"} id={2}/>
                <DialogItem name={"Max"} id={3}/>
                <DialogItem name={"Svetlana"} id={4}/>
                <DialogItem name={"Elena"} id={5}/>
                <DialogItem name={"Pavel"} id={6}/>
            </div>
            <div className={dStyle.messages}>
                <Message message={'Hi!!!'}/>
                <Message message={'Yep!!'}/>
                <Message message={'Goodbye'}/>
            </div>
        </div>
    )
}
