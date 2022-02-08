import React from "react";
import profStyle from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


const postsData = [
    {message: "Hello! Hello! Hello!", likesCount: 1},
    {message: "Yep!", likesCount: 5},
    {message: "Bay!", likesCount: 10},
]

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postsData}/>
        </div>
    )
}

