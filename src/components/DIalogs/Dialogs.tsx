import React, {ChangeEvent} from "react";
import dStyle from './Dialogs.module.css';
import {DialogItem} from "./DIalogsItem/DIalogsItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {MyButton} from "../common/SuperButton";
import {Redirect} from "react-router-dom";

export const Dialogs: React.FC<DialogsPropsType> = props => {

    const buttonSendHandler = () => props.buttonSend()
    const textareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.textareaChange(e.currentTarget.value)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

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
                        <MyButton onClick={buttonSendHandler}>Send</MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
