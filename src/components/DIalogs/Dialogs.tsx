import React, {ChangeEvent} from "react";
import dStyle from './Dialogs.module.css';
import {DialogItem} from "./DIalogsItem/DIalogsItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/store";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessagesBody: string
    buttonSend: () => void
    textareaChange: (value: string) => void
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const buttonSendHandler = () => props.buttonSend()
    const textareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.textareaChange(e.currentTarget.value)
    }

    return (
        <div className={dStyle.dialogs}>
            <div className={dStyle.dialogsItems}>
                {props.dialogs.map((el) => {
                    return <DialogItem key={`${el.id}${el.name}`} name={el.name} id={el.id}/>
                })}
            </div>
            <div className={dStyle.messages}>
                <div>
                    {props.messages.map(el => {
                        return <Message key={el.id} message={el.message} id={el.id}/>
                    })}
                </div>
                <div>
                    <div>
                        <textarea value={props.newMessagesBody}
                                  onChange={textareaChangeHandler}
                                  placeholder={"Enter your messages..."}/>
                    </div>
                    <div>
                        <button onClick={buttonSendHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
