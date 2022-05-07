import {v1} from "uuid";
import {Dispatch} from "redux";

export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

const initialState = {
    dialogs: [
        {id: 1, name: "Dimon"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Max"},
    ] as DialogsType[],
    messages: [
        {id: v1(), message: "Hi!!!"},
        {id: v1(), message: "Yep!!"},
        {id: v1(), message: "Goodbye"},
        {id: v1(), message: "error"},
    ] as MessagesType[],
}

export type DialogsInitialStateType = typeof initialState

export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: DialogsDispatchType): DialogsInitialStateType => {
    switch (action.type) {
        case "SEND_MESSAGE":
            let newMessage = {id: v1(), message: action.message};
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

export type DialogsDispatchType =
    ReturnType<typeof sendMessageAC>

export const sendMessageAC = (message: string) => ({type: "SEND_MESSAGE", message} as const)

export const buttonSendThunkCreator = (message: string) => {
    return (dispatch: Dispatch) => {
        dispatch(sendMessageAC(message))
    }
}
