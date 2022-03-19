import React from "react";
import profStyle from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchActionType, ProfilePageType, StateAppProfileType} from "../../redux/state";


type ProfileTypeProps = {
    profilePage: ProfilePageType
    dispatch: (action: DispatchActionType) => void
    newPosts: string
}

export const Profile: React.FC<ProfileTypeProps> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostsText={props.profilePage.newPostsText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

