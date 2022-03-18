import React from "react";
import profStyle from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, StateAppProfileType} from "../../redux/state";


type ProfileTypeProps = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (value: string) => void
    newPosts: string
}

export const Profile = (props: ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostsText={props.profilePage.newPostsText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

