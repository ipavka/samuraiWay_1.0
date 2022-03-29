import {v1} from "uuid";
import {ProfilePageType} from "./store";

const initialState = {
    posts: [
        {id: v1(), message: "Hello! Hello! Hello!", likesCount: 1},
        {id: v1(), message: "Yep!", likesCount: 5},
        {id: v1(), message: "Bay!", likesCount: 10},
    ],
    newPostsText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: DispatchType): ProfilePageType => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {id: v1(), message: state.newPostsText, likesCount: 0};
            state.posts.unshift(newPost);
            state.newPostsText = '';
            return state
        case "UPDATE_NEW_POST_TEXT":
            if (action.payload.value != null) {
                state.newPostsText = action.payload.value;
            }
            return state
        default:
            return state
    }
}

export type DispatchType =  addPostACType | updateNewPostTextACType

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
