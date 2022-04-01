import {v1} from "uuid";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

const initialState = {
    posts: [
        {id: v1(), message: "Hello! Hello! Hello!", likesCount: 1},
        {id: v1(), message: "Yep!", likesCount: 5},
        {id: v1(), message: "Bay!", likesCount: 10},
    ] as PostsType[],
    newPostsText: ''
}
export type ProfileInitialStateType = typeof initialState
export const profileReducer = (state: ProfileInitialStateType = initialState, action: DispatchType): ProfileInitialStateType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {id: v1(), message: state.newPostsText, likesCount: 0};
            return {...state, posts: [...state.posts, newPost], newPostsText: '',}
        case "UPDATE_NEW_POST_TEXT":
            return {...state, newPostsText: action.payload.value}
        default:
            return state
    }
}

export type DispatchType = addPostACType | updateNewPostTextACType

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: "ADD_POST",
    } as const
}

type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (value: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        payload: {value}
    } as const
}
