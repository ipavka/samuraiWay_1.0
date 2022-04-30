import React from "react";
import {
    DialogsType,
    MessagesType,
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessagesBody: string
}
type MapDispatchPropsType = {
    buttonSend: () => void
    textareaChange: (value: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newMessagesBody: state.dialogsPage.newMessagesBody,
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        buttonSend: () => {
            dispatch(sendMessageAC())
        },
        textareaChange: (value: string) => {
            dispatch(updateNewMessageBodyAC(value))
        }
    }
}
export const DialogsContainer = WithAuthRedirect(connect (mapStateToProps, mapDispatchToProps)(Dialogs))