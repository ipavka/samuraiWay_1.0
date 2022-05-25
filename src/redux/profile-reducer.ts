import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {toggleSpinner} from "./users-reducer";

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
    userId: string
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
    profile: {} as ProfileType,
    isFetching: true,
    status: '',
}
export type ProfileInitialStateType = typeof initialState
export const profileReducer = (state: ProfileInitialStateType = initialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {id: v1(), message: action.post, likesCount: 0};
            return {...state, posts: [newPost, ...state.posts]}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        case "SET_STATUS":
            return {...state, status: action.status}
        case "DELETE_POST":
            return {...state, posts: state.posts.filter(el => el.id !== action.postID)}
        default:
            return state
    }
}

export type ProfileActionType = ReturnType<typeof addPostAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof deletePostAC>

export const addPostAC = (post: string) => ({type: "ADD_POST", post} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const)
export const setStatus = (status: string) => ({type: "SET_STATUS", status} as const)
export const deletePostAC = (postID: string) => ({type: "DELETE_POST", postID} as const)

export const getProfileThunkCreator = (profileId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleSpinner(true));
        usersAPI.getProfile(profileId).then(data => {
            dispatch(setUserProfile(data));
            dispatch(toggleSpinner(false));
        })
    }
}

export const setStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        })
    }
}

export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.changeStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}