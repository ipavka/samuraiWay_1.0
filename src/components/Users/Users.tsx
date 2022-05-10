import React from 'react';
import {Paginator} from "./Paginator";
import s from "./Users.module.css";
import {UsersItemType} from "../../redux/users-reducer";
import {MyButton} from "../common/SuperButton/SuperButton";
import {NavLink} from "react-router-dom";

type UsersFType = {
    totalCount: number
    pageSize: number
    currentPage: number
    spanClick: (el: number) => void
    users: UsersItemType[]
    followingProgress: number[]
    followTC: (userID: number) => void
    unFollowTC: (userID: number) => void
}

export const Users: React.FC<UsersFType> = props => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);

    return (
        <div className={s.userMainBlock}>
            <Paginator pagesCount={pagesCount}
                       spanClick={props.spanClick}
                       currentPage={props.currentPage}/>
            <div className={s.userItems}>
                {props.users.map(user => {
                    const onClickHandlerFollow = () => { // обработчик если подписан
                        props.unFollowTC(user.id)
                    }
                    const onClickHandlerUnfollow = () => { // обработчик если НЕ подписан
                        props.followTC(user.id)
                    }
                    return (
                        <div key={user.id} className={s.userItem}>
                            <div className={s.userBlock}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img className={s.userPhoto}
                                         src={user.photos.small ? user.photos.small : 'https://clck.ru/WQq57'}
                                         alt="user-ava"/>
                                </NavLink>
                                {/* логика disabled описана в users-reducer */}
                                <MyButton disabled={props.followingProgress.some(id => id === user.id)}
                                          onClick={user.followed ? onClickHandlerFollow : onClickHandlerUnfollow}>
                                    {user.followed ? 'Unfollow' : 'Follow'}
                                </MyButton>
                            </div>
                            <div className={s.userInfoBlock}>
                                <p>Name: {user.name}</p>
                                <p>Status: {user.status ? user.status : 'NONE'}</p>
                                <p>User ID: {user.id}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

