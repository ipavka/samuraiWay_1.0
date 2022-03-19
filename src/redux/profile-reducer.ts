import {v1} from "uuid";
import {DispatchActionType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: DispatchType) => {
    switch (action.title) {
        case 'ADD_POST':
            let newPost = {id: v1(), message: state.newPostsText, likesCount: 0};
            state.posts.unshift(newPost);
            state.newPostsText = '';
            break;
        case 'UPDATE-NEW-POST-TEXT':
            if (action.value != null) {
                state.newPostsText = action.value;
            }
            break;
        default:
            return state
    }
}


type DispatchType = DispatchActionType | addPostACType | updateNewPostTextACType
type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
    return {
        title: 'ADD_POST',
    } as const
}
type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (value: string) => {
    return {
        title: 'UPDATE-NEW-POST-TEXT',
        value: value
    } as const
}
