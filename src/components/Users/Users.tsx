import React from 'react';
import {Paginator} from "./Paginator";
import s from "./Users.module.css";
import {UsersItemType} from "../../redux/users-reducer";
import {User} from "./User";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {MySpinner} from "../common/MySpinner/MySpinner";

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

    const isFetching = useSelector<AppStateType, boolean>(state => state.users.isFetching);

    return (<>
            <div className={s.userMainBlock}>
                <Paginator totalItemCount={props.totalCount}
                             pageSize={props.pageSize}
                             currentPage={props.currentPage}
                             spanClick={props.spanClick}
                />
                {isFetching ? <MySpinner/> :
                    <div className={s.userItems}>
                        {props.users
                            .map(el => <User key={el.id}
                                             users={el}
                                             followTC={props.followTC}
                                             unFollowTC={props.unFollowTC}
                                             followingProgress={props.followingProgress}
                            />)}
                    </div>
                }
            </div>
        </>
    );
};

