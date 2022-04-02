import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: UsersType[]
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.users.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
