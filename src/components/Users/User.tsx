import React from 'react';
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {MyButton} from "../common/SuperButton/SuperButton";
import {UsersItemType} from "../../redux/users-reducer";


type UserPropsType = {
    followTC: (userID: number) => void
    unFollowTC: (userID: number) => void
    followingProgress: number[]
    users: UsersItemType
}

export const User: React.FC<UserPropsType> = (props) => {

    const onClickHandlerFollow = () => { // обработчик если подписан
        props.unFollowTC(props.users.id)
    }
    const onClickHandlerUnfollow = () => { // обработчик если НЕ подписан
        props.followTC(props.users.id)
    }

    return (
        <div key={props.users.id} className={s.userItem}>
            <div className={s.userBlock}>
                <NavLink to={`/profile/${props.users.id}`}>
                    <img className={s.userPhoto}
                         src={props.users.photos.small ? props.users.photos.small : 'https://clck.ru/WQq57'}
                         alt="user-ava"/>
                </NavLink>
                {/* логика disabled описана в users-reducer */}
                <MyButton disabled={props.followingProgress.some(id => id === props.users.id)}
                          onClick={props.users.followed ? onClickHandlerFollow : onClickHandlerUnfollow}>
                    {props.users.followed ? 'Unfollow' : 'Follow'}
                </MyButton>
            </div>
            <div className={s.userInfoBlock}>
                <p>Name: {props.users.name}</p>
                <p>Status: {props.users.status ? props.users.status : 'NONE'}</p>
                <p>User ID: {props.users.id}</p>
            </div>
        </div>
    )
};

