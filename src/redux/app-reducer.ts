import {getAuthDataThunkCreator} from "./auth-reducer";
import {AppThunk} from "./redux-store";


const initialState = {
    initialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (
    state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "app/SET_INITIALIZED":
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
    {type: "app/SET_INITIALIZED"} as const)

// Thunk
export const setInitializationThunkCreator = (): AppThunk => async (
    dispatch) => {
    try {
        await dispatch(getAuthDataThunkCreator());
        dispatch(setInitializationSuccess());
    } catch (e) {
        console.log(e);
    }
}

// Types
export type AppActionType = ReturnType<typeof setInitializationSuccess>

