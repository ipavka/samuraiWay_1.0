import {v1} from "uuid";
import {rerenderTree} from "../render";


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
    newMessagesBody: string
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostsText: string
    // addPost: (postMessage: string) => void
}
export type FriendsType = {
    name: string
    id: string
    avatar: string
    message: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sidebar: SidebarType
}
export type StateType = {
    state: RootStateType
    addPost: () => void
    changeText: (value: string) => void
}
export type StateAppProfileType = {
    state: ProfilePageType
    addPost: () => void
}
export type StateAppDialogsType = {
    state: DialogsPage
}
export type StateAppNavbarType = {
    state: SidebarType
}


export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hello! Hello! Hello!", likesCount: 1},
            {id: v1(), message: "Yep!", likesCount: 5},
            {id: v1(), message: "Bay!", likesCount: 10},
        ],
        newPostsText: ''
    },
    dialogsPage: {
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
    },
    sidebar: {
        friends: [
            {id: v1(), name: 'Andrew', avatar: 'https://clck.ru/WQq57', message: 'Hello Friend!'},
            {id: v1(), name: 'Sasha', avatar: 'https://clck.ru/WQq57', message: 'Hello Friend!'},
            {id: v1(), name: 'Sveta', avatar: 'https://clck.ru/WQq57', message: 'Hello Friend!'},
        ]
    },
}

export const addPost = () => {
    let newPost = {id: v1(), message: state.profilePage.newPostsText, likesCount: 0};
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostsText = '';
    rerenderTree(state)
}

export const updateNewPostText = (value: string) => {
    state.profilePage.newPostsText = value;
    rerenderTree(state)
}