import {v1} from "uuid";

export type FriendsType = {
    name: string
    id: string
    avatar: string
    message: string
}

const initialState = {
    friends: [
        {id: v1(), name: 'Andrew', avatar: 'https://clck.ru/WQq57', message: 'Hello Friend!'},
        {id: v1(), name: 'Sasha', avatar: 'https://clck.ru/WQq57', message: 'Hello Friend!'},
        {id: v1(), name: 'Sveta', avatar: 'https://clck.ru/WQq57', message: 'Hello Friend!'},
    ] as FriendsType[],

}

export type SidebarInitialStateType = typeof initialState

export const sidebarReducer = (state: SidebarInitialStateType = initialState): SidebarInitialStateType => {
    return state
}