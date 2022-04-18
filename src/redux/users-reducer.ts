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
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    followingProgress: [] as Array<number>
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
        case "TOGGLE_FOLLOW_PROGRESS":
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

export type UsersDispatchType = ReturnType<typeof follow> |
    ReturnType<typeof unFollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUserCount> |
    ReturnType<typeof toggleSpinner> |
    ReturnType<typeof toggleFollowProgress>

export const follow = (userID: number) => ({type: "FOLLOW", userID} as const)
export const unFollow = (userID: number) => ({type: "UNFOLLOW",userID} as const)
export const setUsers = (users: UsersItemType[]) => ({type: "SET_USERS", users} as const)
export const setCurrentPage = (pegaNumber: number) => ({type: "SET_CURRENT_PAGE", pegaNumber} as const)
export const setTotalUserCount = (totalUser: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUser} as const)
export const toggleSpinner = (value: boolean) => ({type: "TOGGLE_SPINNER", value} as const)
export const toggleFollowProgress = (isFetch: boolean, userID: number) =>
    ({type: "TOGGLE_FOLLOW_PROGRESS", userID, isFetch} as const)

