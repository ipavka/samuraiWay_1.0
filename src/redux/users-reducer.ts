import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type UsersItemType = {
    id: number
    name: string
    followed: boolean
    photos: {
        large: null | string
        small: null | string
    }
    status: null | string
    uniqueUrlName: null | string
}

const initialState = {
    users: [] as UsersItemType[],
    totalCount: 0,
    pageSize: 15,
    currentPage: 1,
    isFetching: false,
    followingProgress: [] as number[]
}

export type UsersInitialStateType = typeof initialState
export const usersReducer = (
    state: UsersInitialStateType = initialState,
    action: UsersActionType
): UsersInitialStateType => {
    switch (action.type) {
        case "users/FOLLOW":
            return {
                ...state,
                users: state.users
                    .map(user => user.id === action.userID ? {...user, followed: true} : user)
            }
        case "users/UNFOLLOW":
            return {
                ...state,
                users: state.users
                    .map(user => user.id === action.userID ? {...user, followed: false} : user)
            }
        case "users/SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "users/SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.pegaNumber
            }
        case "users/SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalCount: action.totalUser
            }
        case "users/TOGGLE_SPINNER":
            return {
                ...state,
                isFetching: action.value
            }
        case "users/TOGGLE_FOLLOW_PROGRESS":
            // добавляем в массив userID что бы отключить кнопку
            // то есть все происходить в момент запроса и ответа сервера, при запросе добавляем userID (1), массив не пустой,
            // кнопка disabled, после ответа сервера (2) возвращаем массив без данного userID
            // isFetch - индикатор в какую логику попадать или что делать добавить или удалить(filter())
            return {
                ...state,
                followingProgress: action.isFetch
                    ? [...state.followingProgress, action.userID] // (1)
                    : state.followingProgress.filter(id => id !== action.userID) // (2)
            }
        default:
            return state
    }
}

export type UsersActionType = ReturnType<typeof follow> |
    ReturnType<typeof unFollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUserCount> |
    ReturnType<typeof toggleSpinner> |
    ReturnType<typeof toggleFollowProgress>

export const follow = (userID: number) => ({type: "users/FOLLOW", userID} as const)
export const unFollow = (userID: number) => ({type: "users/UNFOLLOW",userID} as const)
export const setUsers = (users: UsersItemType[]) => ({type: "users/SET_USERS", users} as const)
export const setCurrentPage = (pegaNumber: number) => ({type: "users/SET_CURRENT_PAGE", pegaNumber} as const)
export const setTotalUserCount = (totalUser: number) => ({type: "users/SET_TOTAL_USERS_COUNT", totalUser} as const)
export const toggleSpinner = (value: boolean) => ({type: "users/TOGGLE_SPINNER", value} as const)
export const toggleFollowProgress = (isFetch: boolean, userID: number) =>
    ({type: "users/TOGGLE_FOLLOW_PROGRESS", userID, isFetch} as const)

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(toggleSpinner(true));
            dispatch(setCurrentPage(currentPage));
            const data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(toggleSpinner(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        } catch (e) {
            console.log(e);
        }
    }
}

export const followThunkCreator = (userID: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(toggleFollowProgress(true, userID)) // добавляем в массив user.id
            const data = await usersAPI.userFollow(userID);
            if (data.resultCode === 0) {
                dispatch(follow(userID));
            }
            dispatch(toggleFollowProgress(false, userID)) // удаляем filter() из массива user.id
        } catch (e) {
            console.log(e)
        }
    }
}

export const unFollowThunkCreator = (userID: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(toggleFollowProgress(true, userID)); // добавляем в массив user.id
            const data = await usersAPI.userUnfollow(userID);
            if (data.resultCode === 0) {
                dispatch(unFollow(userID));
            }
            dispatch(toggleFollowProgress(false, userID)); // удаляем filter() из массива user.id
        } catch (e) {
            console.log(e);
        }
    }
}
