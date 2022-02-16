import React from "react";
import myPostsStyle from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {DialogsType, ProfilePageType} from "../../../redux/state";


export const MyPosts = (props: ProfilePageType) => {
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
                {props.posts.map(el => <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}

