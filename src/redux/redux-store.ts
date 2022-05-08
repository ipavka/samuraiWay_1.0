import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionType, profileReducer} from "./profile-reducer";
import {DialogsActionType, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionType, usersReducer} from "./users-reducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk));


export type AppActionsType = UsersActionType | DialogsActionType
    | ProfileActionType | AuthActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>


//@ts-ignore
window.store = store
