import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'

export const Users: React.FC<UsersPropsType> = (props) => {
    return (
        <div>
            {props.users.map(user => {
                const onClickHandler = () => {
                    user.followed ? props.unFollow(user.id) : props.follow(user.id)
                }
                return <div key={user.id}>
                    <span>
                        <div><img className={s.userPhoto} src={user.photoUrl} alt="user-ava"/></div>
                        <div>
                            <button onClick={onClickHandler}>{user.followed ? 'Follow' : 'UnFollow'}</button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>
                    </span>
                    {user.fullName}
                </div>
            })}
        </div>
    );
};

