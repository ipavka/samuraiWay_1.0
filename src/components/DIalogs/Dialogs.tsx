import React, {ChangeEvent} from "react";
import dStyle from './Dialogs.module.css';
import {DialogItem} from "./DIalogsItem/DIalogsItem";
import {Message} from "./Message/Message";
import {DialogsPage, DispatchActionType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPage
    dispatch: (action: DispatchActionType) => void
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const buttonSendHandler = () => {
        props.dispatch(sendMessageAC())
    }
    const textareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

    return (
        <div className={dStyle.dialogs}>
            <div className={dStyle.dialogsItems}>
                {props.state.dialogs.map((el) => {
                    return <DialogItem key={`${el.id}${el.name}`} name={el.name} id={el.id}/>
                })}
            </div>
            <div className={dStyle.messages}>
                <div>
                    {props.state.messages.map(el => {
                        return <Message key={el.id} message={el.message} id={el.id}/>
                    })}
                </div>
                <div>
                    <div>
                        <textarea value={props.state.newMessagesBody}
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
