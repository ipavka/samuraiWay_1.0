import {v1} from "uuid";
import {DialogsPage, DispatchActionType} from "./state";

export const dialogsReducer = (state: DialogsPage, action: DispatchType) => {
    switch (action.title) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            if (action.value != null) {
                state.newMessagesBody = action.value;
            }
            break;
        case 'SEND-MESSAGE':
            let message =  {id: v1(), message: state.newMessagesBody};
            state.newMessagesBody = '';
            state.messages.push(message);
            break;
        default:
            return state
    }
}

type DispatchType = DispatchActionType | updateNewMessageBodyType | sendMessageType

type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (value: string) => {
    return {
        title: 'UPDATE-NEW-MESSAGE-BODY',
        value: value
    } as const
}

type sendMessageType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        title: 'SEND-MESSAGE',
    } as const
}