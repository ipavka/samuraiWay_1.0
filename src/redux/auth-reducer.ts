
export type DataAuthType = {
    id: number,
    login: string,
    email: string,
}
export type AuthType = {
    data: DataAuthType,
    messages: string[],
    fieldsErrors:  string[],
    resultCode: number
}
const initialState = {
    authData: {} as AuthType,
    isAuth: false,
}

export type HeaderInitialStateType = typeof initialState

export const authReducer = (
    state: HeaderInitialStateType = initialState, action: HeaderDispatchType): HeaderInitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                authData: action.authData,
                isAuth: true,
            }
        default:
            return state
    }
}

export type HeaderDispatchType =
    ReturnType<typeof setAuthUserData>

export const setAuthUserData = (authData: AuthType) => (
    {type: "SET_USER_DATA", authData} as const)
