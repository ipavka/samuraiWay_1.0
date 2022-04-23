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
    toggleFollowProgress: (isFetch: boolean, userID: number) => void
    followingProgress: number[]
}

export const UsersF: React.FC<UsersFType> = props => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);

    return (
        <div>
            <Paginator pagesCount={pagesCount}
                       spanClick={props.spanClick}
                       currentPage={props.currentPage}/>
            {props.users.map(user => {
                const onClickHandlerFollow = () => { // обработчик если подписан
                    props.toggleFollowProgress(true, user.id) // добавляем в массив user.id
                    usersAPI.userUnfollow(user.id).then(data => {
                        if (data.resultCode === 0) {
                            props.unFollow(user.id)
                        }
                        props.toggleFollowProgress(false, user.id) // удаляем filter() из массива user.id
                    })
                }
                const onClickHandlerUnfollow = () => { // обработчик если НЕ подписан
                    props.toggleFollowProgress(true, user.id) // добавляем в массив user.id
                    usersAPI.userFollow(user.id).then(data => {
                        if (data.resultCode === 0) {
                            props.follow(user.id)
                        }
                        props.toggleFollowProgress(false, user.id) // удаляем filter() из массива user.id
                    })
                }
                return <div key={user.id}>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img className={s.userPhoto}
                                 src={user.photos.small ? user.photos.small : 'https://clck.ru/WQq57'}
                                 alt="user-ava"/>
                        </NavLink>
                    </div>
                    <span>

                        <div>
                            {/* логика disabled описана в users-reducer */}
                            <MyButton disabled={props.followingProgress.some(id => id === user.id)}
                                      onClick={user.followed ? onClickHandlerFollow : onClickHandlerUnfollow}>
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

