import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, unFollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: UsersType[]
}
type MapDispatchPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.users.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: string) => {
            dispatch(unFollowAC(userID))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
