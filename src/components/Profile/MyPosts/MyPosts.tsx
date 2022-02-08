import React from "react";
import myPostsStyle from './MyPosts.module.css';
import {Post} from "./Post/Post";

export type DataPostsType = {
    postData: Array<PostType>
}

export type PostType = {
    message: string
    likesCount: number
}

export const MyPosts = (props: DataPostsType) => {
    return (
        <div className={myPostsStyle.posts}>
            <h3>My posts</h3>
            <div>
                <textarea>Что то... </textarea>
            </div>
            <div>
                <button>Add</button>
            </div>
            <div>
                {props.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}

