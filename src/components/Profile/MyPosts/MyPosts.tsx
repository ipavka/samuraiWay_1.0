import React, {ChangeEvent} from "react";
import myPostsStyle from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {addPostAC, DispatchActionType, PostsType, updateNewPostTextAC} from "../../../redux/state";

type ProfilePagePropsType = {
    posts: Array<PostsType>
    dispatch: (action: DispatchActionType) => void
    newPostsText: string
}

export const MyPosts: React.FC<ProfilePagePropsType> = (props) => {

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const textareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }
    return (
        <div className={myPostsStyle.posts}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={textareaChangeHandler}
                          value={props.newPostsText}
                />
            </div>
            <div>
                <button onClick={addPost}>Add</button>
            </div>
            <div>
                {props.posts.map(el => <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}

