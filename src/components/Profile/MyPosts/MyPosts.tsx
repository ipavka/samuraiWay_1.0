import React from "react";
import myPostsStyle from './MyPosts.module.css';
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            My posts
            <textarea>Что то... </textarea>
            <button>Add</button>
            <div className={myPostsStyle.posts}>
                <Post message={'Hello!'} likesCount={5}/>
                <Post message={'Yep!'} likesCount={10}/>
                <Post message={'Bay!'} likesCount={0}/>
            </div>
        </div>
    )
}

