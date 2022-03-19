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
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (callBack: (props: RootStateType) => void) => void
    dispatch: (action: DispatchActionType) => void
}
export type DispatchActionType = {
    type: string
    value?: string
}

export const store: StoreType = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType) {
        console.log("State not changed")
    },
    subscribe(callBack) {
        this._callSubscriber = callBack
    },
    dispatch(action: DispatchActionType) {
        if (action.type === 'ADD_TASKS') {
            let newPost = {id: v1(), message: this._state.profilePage.newPostsText, likesCount: 0};
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostsText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            if (action.value != null) {
                this._state.profilePage.newPostsText = action.value;
            }
            this._callSubscriber(this._state)
        }
    }
}