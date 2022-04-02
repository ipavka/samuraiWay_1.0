import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);
export const APP_KEY = process.env.REACT_APP_API_KEY;

//@ts-ignore
// window.store = store
