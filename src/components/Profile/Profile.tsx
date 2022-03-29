import React from "react";
import profStyle from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfileTypeProps = {
    store: StoreType
}

export const Profile: React.FC<ProfileTypeProps> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

