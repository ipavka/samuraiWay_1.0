import React from 'react';
import {Paginator} from "./Paginator";
import s from "./Users.module.css";
import {UsersItemType} from "../../redux/users-reducer";
import {User} from "./User";

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
                {props.users.map(el => <User key={el.id}
                                             users={el}
                                             followTC={props.followTC}
                                             unFollowTC={props.unFollowTC}
                                             followingProgress={props.followingProgress}
                />)}
            </div>
        </div>
    );
};

