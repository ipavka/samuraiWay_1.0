import {getAuthDataThunkCreator} from "./auth-reducer";
import {AppThunk} from "./redux-store";


const initialState = {
    initialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (
    state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

// Actions
export const setInitializationSuccess = () => (
    {type: "SET_INITIALIZED"} as const)

// Thunk
export const setInitializationThunkCreator = (): AppThunk => (
    dispatch) => {
    dispatch(getAuthDataThunkCreator())
    .then(() => {
        dispatch(setInitializationSuccess())
    })
}

// Types
export type AppActionType = ReturnType<typeof setInitializationSuccess>

