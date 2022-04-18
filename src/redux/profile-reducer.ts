import {v1} from "uuid";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: null | string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: string
    userId: number
    photos: {
        small: null | string
        large: null | string
    },
}

const initialState = {
    posts: [
        {id: v1(), message: "Hello! Hello! Hello!", likesCount: 1},
        {id: v1(), message: "Yep!", likesCount: 5},
        {id: v1(), message: "Bay!", likesCount: 10},
    ] as PostsType[],
    newPostsText: '',
    profile: {} as ProfileType,
    isFetching: true,
}
export type ProfileInitialStateType = typeof initialState
export const profileReducer = (state: ProfileInitialStateType = initialState, action: DispatchType): ProfileInitialStateType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {id: v1(), message: state.newPostsText, likesCount: 0};
            return {...state, posts: [newPost, ...state.posts], newPostsText: '',}
        case "UPDATE_NEW_POST_TEXT":
            return {...state, newPostsText: action.value}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export type DispatchType = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof setUserProfile>

export const addPostAC = () => ({type: "ADD_POST", } as const)
export const updateNewPostTextAC = (value: string) => ({type: "UPDATE_NEW_POST_TEXT", value} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const)

