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
                {postsData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}

