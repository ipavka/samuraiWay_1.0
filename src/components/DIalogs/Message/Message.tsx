import dStyle from "./../Dialogs.module.css";
import React from "react";


export type MessageType = {
    id: number
    message: string
}

export const Message = (props: MessageType) => {
    return <div className={dStyle.msg}>{props.message}</div>
}