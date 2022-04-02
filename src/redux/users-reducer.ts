export type UsersType = {
    id: number
    name: string
    photos: { large: string, small: string }
    followed: boolean
    status: 'junior' | 'middle' | 'senior'
    uniqueUrlName: string
}

const initialState = {
    users: [] as UsersType[],
    // users: [
    //     {
    //         id: 55555, name: 'Pol', photos: {large: 'https://clck.ru/WQq57', small: 'https://clck.ru/WQq57'},
    //         followed: false,
    //         status: 'junior',
    //         uniqueUrlName: ''
    //     },
    //     {
    //         id: 55556, name: 'Bob', photos: {large: 'https://clck.ru/WQq57', small: 'https://clck.ru/WQq57'},
    //         followed: true,
    //         status: 'middle',
    //         uniqueUrlName: ''
    //     },
    //     {
    //         id: 55557, name: 'Max', photos: {large: 'https://clck.ru/WQq57', small: 'https://clck.ru/WQq57'},
    //         followed: false,
    //         status: 'senior',
    //         uniqueUrlName: ''
    //     },
    // ] as UsersType[],
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
        case "SET_USERS":
            return {
                ...state,
                users: action.payload.users
            }
        default:
            return state
    }
}

export type UsersDispatchType = FollowAACType | UnFollowACType | SetUsersACType

type FollowAACType = ReturnType<typeof followAC>
export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        payload: {userID}
    } as const
}

type UnFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        payload: {userID}
    } as const
}
type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: "SET_USERS",
        payload: {users}
    } as const
}

