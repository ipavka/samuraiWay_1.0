import React, {ChangeEvent, ChangeEventHandler, LegacyRef, RefObject} from "react";
import myPostsStyle from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {DialogsType, PostsType, ProfilePageType} from "../../../redux/state";

type ProfilePagePropsType = {
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText: (value: string) => void
    newPostsText: string
}

type PostPropsType = RefObject<HTMLTextAreaElement>
export const MyPosts = (props: ProfilePagePropsType) => {
    // let newPost:PostPropsType = React.createRef()

    const addPost = () => {
        // @ts-ignore
        // let text = newPost.current.value
        props.addPost()
    }

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

