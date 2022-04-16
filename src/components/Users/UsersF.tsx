import React from 'react';
import {Paginator} from "./Paginator";
import s from "./Users.module.css";
import {UsersItemType} from "../../redux/users-reducer";
import {MyButton} from "../common/SuperButton";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersFType = {
    totalCount: number
    pageSize: number
    currentPage: number
    spanClick: (el: number) => void
    users: UsersItemType[]
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}

export const UsersF: React.FC<UsersFType> = props => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);

    return (
        <div>
            <Paginator pagesCount={pagesCount}
                       spanClick={props.spanClick}
                       currentPage={props.currentPage}/>
            {props.users.map(user => {
                const onClickHandler = () => {
                    user.followed ?
                        usersAPI.userUnfollow(user.id).then(res => {
                                if (res.data.resultCode === 0) {
                                    props.unFollow(user.id)
                                }
                            })
                        :
                        usersAPI.userFollow(user.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(user.id)
                                }
                            })
                }
                return <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img className={s.userPhoto}
                                     src={user.photos.small ? user.photos.small : 'https://clck.ru/WQq57'}
                                     alt="user-ava"/>
                            </NavLink>

                        </div>
                        <div>
                            <MyButton onClick={onClickHandler}>
                                {user.followed ? 'Unfollow' : 'Follow'}
                            </MyButton>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status ? user.status : 'NONE'}</div>
                            <div>{user.id}</div>
                        </span>
                        <span>
                            <div>{"Kyiv"}</div>
                            <div>{"Ukraine"}</div>
                        </span>
                    </span>
                </div>
            })}
        </div>
    );
};

