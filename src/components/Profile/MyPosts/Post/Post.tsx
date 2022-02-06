import React from "react";
import myPostsStyle from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
}


export const Post = (props: PostType) => {
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

