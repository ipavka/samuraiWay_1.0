import {v1} from "uuid";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string,
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

