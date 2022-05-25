import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type DataAuthType = {
    id: number,
    login: string,
    email: string,
}
export type AuthType = {
    data: DataAuthType,
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}
const initialState = {
    authData: {} as AuthType,
    isAuth: false,
}

export type HeaderInitialStateType = typeof initialState

export const authReducer = (
    state: HeaderInitialStateType = initialState, action: AuthActionType): HeaderInitialStateType => {
    switch (action.type) {
        case "auth/SET_USER_DATA":
            return {
                ...state,
                authData: action.authData,
                isAuth: true,
            }
        default:
            return state
    }
}

export type AuthActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (authData: AuthType) => (
    {type: "auth/SET_USER_DATA", authData} as const)


export const getAuthDataThunkCreator = () => async (dispatch: Dispatch) => {
    try {
        const res = await usersAPI.getAuthMe();
        if (res.resultCode === 0) {
            dispatch(setAuthUserData(res));
        }
    } catch (e) {
        console.log(e);
    }
}

export const authLogInThunkCreator = (
    email: string, password: string, rememberMe: boolean, setStatus: any) => {
    return async () => {
        try {
            const data = await usersAPI.authLogIn(email, password, rememberMe);
            if (data.resultCode === 0) window.location.reload();
            else {
                // error incorrect password or email
                setStatus(data.messages);
            }
        } catch (e) {
            console.log(e);
        }

    }
}
export const authLogOutThunkCreator = () => {
    return async () => {
        try {
            const data = await usersAPI.authLogOut();
            if (data.resultCode === 0) window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }
}