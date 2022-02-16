import React from "react";
import profStyle from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StateAppProfileType} from "../../redux/state";


export const Profile = (props: StateAppProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

