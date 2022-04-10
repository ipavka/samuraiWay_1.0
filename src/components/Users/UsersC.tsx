import React from 'react';
import s from "./Users.module.css";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "./Paginator";

const URL = "https://social-network.samuraijs.com/api/1.0/users"

export class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get(
                `${URL}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUserCount(res.data.totalCount)
        })
    }
    spanClickHandler  = (e: number) => {
        this.props.setCurrentPage(e);
        axios.get(
                `${URL}?page=${e}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        return (
            <div>
                <Paginator pagesCount={pagesCount}
                           spanClick={this.spanClickHandler}
                           currentPage={this.props.currentPage}/>
                {this.props.users.map(user => {
                    const onClickHandler = () => {
                        user.followed ? this.props.unFollow(user.id) : this.props.follow(user.id)
                    }
                    return <div key={user.id}>
                    <span>
                        <div><img className={s.userPhoto}
                                  src={user.photos.small ? user.photos.small : 'https://clck.ru/WQq57'}
                                  alt="user-ava"/></div>
                        <div>
                            <button onClick={onClickHandler}>{user.followed ? 'Follow' : 'UnFollow'}</button>
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
    }
}
