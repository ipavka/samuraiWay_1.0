import React from 'react';
import s from "./Users.module.css";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

export class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.users.map(user => {
                    const onClickHandler = () => {
                        user.followed ? this.props.unFollow(user.id) : this.props.follow(user.id)
                    }
                    return <div key={user.id}>
                    <span>
                        <div><img className={s.userPhoto}
                                  src={user.photos.large ? user.photos.large : 'https://clck.ru/WQq57'}
                                  alt="user-ava"/></div>
                        <div>
                            <button onClick={onClickHandler}>{user.followed ? 'Follow' : 'UnFollow'}</button>
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"Kyiv"}</div>
                            <div>{"Ukraine"}</div>
                        </span>
                    </span>
                        {user.name}
                    </div>
                })}
            </div>
        );
    }
}
