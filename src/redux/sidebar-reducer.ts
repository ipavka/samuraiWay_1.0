import {SidebarType} from "./store";
import {v1} from "uuid";


const initialState = {
    friends: [
        {id: v1(), name: 'Andrew', avatar: 'https://clck.ru/WQq57', message: 'Hello Friend!'},
        {id: v1(), name: 'Sasha', avatar: 'https://clck.ru/WQq57', message: 'Hello Friend!'},
        {id: v1(), name: 'Sveta', avatar: 'https://clck.ru/WQq57', message: 'Hello Friend!'},
    ]

}

export const sidebarReducer = (state: SidebarType = initialState) => {
    return state
}