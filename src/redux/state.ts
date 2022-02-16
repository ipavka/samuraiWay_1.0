import {v1} from "uuid";


export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPage = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
}
export type StateType = {
    state: RootStateType
}
export type StateAppProfileType = {
    state: ProfilePageType
}
export type StateAppDialogsType = {
    state: DialogsPage
}


export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hello! Hello! Hello!", likesCount: 1},
            {id: v1(), message: "Yep!", likesCount: 5},
            {id: v1(), message: "Bay!", likesCount: 10},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimon"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Max"},
            {id: 4, name: "Svetlana"},
            {id: 5, name: "Elena"},
            {id: 6, name: "Pavel"},
        ],
        messages: [
            {id: v1(), message: "Hi!!!"},
            {id: v1(), message: "Yep!!"},
            {id: v1(), message: "Goodbye"},
        ]
    }
}