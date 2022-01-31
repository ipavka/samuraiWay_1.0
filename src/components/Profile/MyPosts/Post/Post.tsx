import React from "react";
import myPostsStyle from './Post.module.css';


export const Post = () => {
    return (
        <div className={myPostsStyle.item}>
            post 1
            <img src="/img/madMax.jpg"/>
            <div>
                <span>Like</span>
            </div>

        </div>
    )
}

