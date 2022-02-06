import React from "react";
import myPostsStyle from './MyPosts.module.css';
import {Post} from "./Post/Post";


export const MyPosts = () => {
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
                <Post message={'Hello! Hello! Hello!'} likesCount={5}/>
                <Post message={'Yep!'} likesCount={10}/>
                <Post message={'Bay!'} likesCount={0}/>
            </div>
        </div>
    )
}

