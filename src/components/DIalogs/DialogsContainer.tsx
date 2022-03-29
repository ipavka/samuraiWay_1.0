import React from "react";
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {store: StoreType }
export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const state = props.store.getState();
    const buttonSendHandler = () => {
        props.store.dispatch(sendMessageAC())
    }
    const textareaChangeHandler = (value: string) => {
        props.store.dispatch(updateNewMessageBodyAC(value))
    }

    return (
        <Dialogs dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessagesBody={state.dialogsPage.newMessagesBody}
                 buttonSend={buttonSendHandler}
                 textareaChange={textareaChangeHandler}

        />
    )
}
