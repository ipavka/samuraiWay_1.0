import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";

export const Users: React.FC<UsersPropsType> = props => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                // props.setUsers(res.data.items)
            })
        }
    }

    return (
        <div>
            {/*<button onClick={getUsers}>Get Users</button>*/}
            {/*{props.users.map(user => {*/}
            {/*    const onClickHandler = () => {*/}
            {/*        user.followed ? props.unFollow(user.id) : props.follow(user.id)*/}
            {/*    }*/}
            {/*    return <div key={user.id}>*/}
            {/*        <span>*/}
            {/*            <div><img className={s.userPhoto}*/}
            {/*                      src={user.photos.large ? user.photos.large : 'https://clck.ru/WQq57'}*/}
            {/*                      alt="user-ava"/></div>*/}
            {/*            <div>*/}
            {/*                <button onClick={onClickHandler}>{user.followed ? 'Follow' : 'UnFollow'}</button>*/}
            {/*            </div>*/}
            {/*        </span>*/}
            {/*        <span>*/}
            {/*            <span>*/}
            {/*                <div>{user.name}</div>*/}
            {/*                <div>{user.status}</div>*/}
            {/*            </span>*/}
            {/*            <span>*/}
            {/*                <div>{"Kyiv"}</div>*/}
            {/*                <div>{"Ukraine"}</div>*/}
            {/*            </span>*/}
            {/*        </span>*/}
            {/*        {user.name}*/}
            {/*    </div>*/}
            {/*})}*/}
        </div>
    );
};

