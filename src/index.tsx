import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type MessagesType = {
    id: number
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
            {message: "Hello! Hello! Hello!", likesCount: 1},
            {message: "Yep!", likesCount: 5},
            {message: "Bay!", likesCount: 10},
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
            {id: 1, message: "Hi!!!"},
            {id: 2, message: "Yep!!"},
            {id: 3, message: "Goodbye"},
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
