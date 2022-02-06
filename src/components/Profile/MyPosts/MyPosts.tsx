import React from "react";
import myPostsStyle from './MyPosts.module.css';
import {Post} from "./Post/Post";


const postsData = [
    {message: "Hello! Hello! Hello!", likesCount: 1},
    {message: "Yep!", likesCount: 5},
    {message: "Bay!", likesCount: 10},
]

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
            </div>
        </div>
    )
}

