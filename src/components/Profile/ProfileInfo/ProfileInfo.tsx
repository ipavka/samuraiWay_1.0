import React from "react";
import profInfoStyle from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = props => {

    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
            </div>
            <div className={profInfoStyle.item}>
                <img src={props.profile?.photos?.large ? props.profile?.photos?.large : 'https://clck.ru/WQq57'} alt="large-ava"/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

