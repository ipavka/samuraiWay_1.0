import {v1} from "uuid";
import {DialogsPage} from "./store";

const initialState = {
    dialogs: [
        {id: 1, name: "Dimon"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Max"},
    ],
    messages: [
        {id: v1(), message: "Hi!!!"},
        {id: v1(), message: "Yep!!"},
        {id: v1(), message: "Goodbye"},
        {id: v1(), message: "error"},
    ],
    newMessagesBody: ''
}
export const dialogsReducer = (state: DialogsPage = initialState, action: DialogsDispatchType) => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            if (action.payload.value != null) {
                state.newMessagesBody = action.payload.value;
            }
            return state
        case "SEND_MESSAGE":
            let message = {id: v1(), message: state.newMessagesBody};
            state.newMessagesBody = '';
            state.messages.push(message);
            return state
        default:
            return state
    }
}

export type DialogsDispatchType = updateNewMessageBodyType | sendMessageType

type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (value: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY",
        payload: {value}
    } as const
}

type sendMessageType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: "SEND_MESSAGE",
    } as const
}