import React from "react";
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
    const state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const textareaChangeHandler = (value: string) => {
        props.store.dispatch(updateNewPostTextAC(value))
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostsText={state.profilePage.newPostsText}
                 addPost={addPost}
                 updateNewPostText={textareaChangeHandler}
        />
    )
}

