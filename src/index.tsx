import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

const state: RootStateType = {
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


ReactDOM.render(
    <React.StrictMode>
        <App profilePage={state.profilePage} dialogsPage={state.dialogsPage}/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
