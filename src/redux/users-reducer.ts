export type UsersItemType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: { large: string, small: string }
    status: 'junior' | 'middle' | 'senior'
    followed: boolean
}

export type UsersType = {
    items: UsersItemType[],
    totalCount: number,
    pageSize: number,
    currentPage: number,
    error: string,
}

const initialState = {
    users: [] as UsersItemType[],
    totalCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: false
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
                    .map(user => user.id === action.userID ? {...user, followed: true} : user)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users
                    .map(user => user.id === action.userID ? {...user, followed: false} : user)
            }
        case "SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.pegaNumber
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalCount: action.totalUser
            }
        case "TOGGLE_SPINNER":
            return {
                ...state,
                isFetching: action.value
            }
        default:
            return state
    }
}

export type UsersDispatchType = ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC> |
    ReturnType<typeof toggleSpinnerAC>

export const followAC = (userID: number) => ({type: "FOLLOW", userID} as const)
export const unFollowAC = (userID: number) => ({type: "UNFOLLOW",userID} as const)
export const setUsersAC = (users: UsersItemType[]) => ({type: "SET_USERS", users} as const)
export const setCurrentPageAC = (pegaNumber: number) => ({type: "SET_CURRENT_PAGE", pegaNumber} as const)
export const setTotalUsersCountAC = (totalUser: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUser} as const)
export const toggleSpinnerAC = (value: boolean) => ({type: "TOGGLE_SPINNER", value} as const)

