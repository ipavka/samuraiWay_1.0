import React from "react";
import myPostsStyle from './Post.module.css';
import {PostsType} from "../../../../redux/store";


export const Post = (props: PostsType) => {
    return (
        <div className={myPostsStyle.item}>
            <img src="/img/madMax.jpg"/>
            <div>
                <div>{props.message}</div>
                <div>likes {props.likesCount}</div>
            </div>

        </div>
    )
}

