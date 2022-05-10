import React from "react";
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = props => {
    return (
        <>
            <div className={s.item}>
                <img src={props.profile?.photos?.large
                    ? props.profile?.photos?.large
                    : 'https://clck.ru/WQq57'} alt="large-ava"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </>
    )
}

