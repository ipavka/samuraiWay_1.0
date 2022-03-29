import React, {ChangeEvent} from "react";
import myPostsStyle from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/store";

type MyPostsPropsType = {
    posts: Array<PostsType>
    updateNewPostText: (value: string) => void
    addPost: () => void
    newPostsText: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const addPost = () => props.addPost()
    const textareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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

