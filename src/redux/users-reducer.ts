import {v1} from "uuid";

export type UsersType = {
    id: string
    fullName: string
    photoUrl: string
    followed: boolean
    status: 'junior' | 'middle' | 'senior'
    location: { city: string, country: string }
}

const initialState = {
    users: [
        {
            id: v1(), fullName: 'Pol', photoUrl: 'https://clck.ru/WQq57', followed: false, status: 'junior', location: {
                city: "Kiev", country: 'Ukraine'
            }
        },
        {
            id: v1(), fullName: 'Bob', photoUrl: 'https://clck.ru/WQq57', followed: true, status: 'middle', location: {
                city: "Lviv", country: 'Ukraine'
            }
        },
        {
            id: v1(), fullName: 'Max', photoUrl: 'https://clck.ru/WQq57', followed: false, status: 'senior', location: {
                city: "Minsk", country: 'Belarus'
            }
        },
    ] as UsersType[],
}
export type UsersInitialStateType = typeof initialState
export const usersReducer = (
    state: UsersInitialStateType = initialState,
    action: UsersDispatchType
): UsersInitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users
                    .map(user => user.id === action.payload.userID ? {...user, followed: true} : user)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users
                    .map(user => user.id === action.payload.userID ? {...user, followed: false} : user)
            }
        // case "SET_USERS":
        //     return state
        default:
            return state
    }
}

export type UsersDispatchType = FollowAACType | UnFollowACType

type FollowAACType = ReturnType<typeof followAC>
export const followAC = (userID: string) => {
    return {
        type: "FOLLOW",
        payload: {userID}
    } as const
}

type UnFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userID: string) => {
    return {
        type: "UNFOLLOW",
        payload: {userID}
    } as const
}
// type SetUsersACType = ReturnType<typeof setUsersAC>
// export const setUsersAC = (value: string) => {
//     return {
//         type: "SET_USERS",
//         payload: {value}
//     } as const
// }

