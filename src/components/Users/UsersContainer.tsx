import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersItemType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {UsersC} from "./UsersC";

type MapStateToPropsType = {
    users: UsersItemType[],
    totalCount: number,
    pageSize: number,
    currentPage: number,
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersItemType[]) => void
    setCurrentPage: (pegaNumber: number) => void
    setTotalUserCount: (totalUser: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
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
        setUsers: (users: UsersItemType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pegaNumber: number) => {
            dispatch(setCurrentPageAC(pegaNumber))
        },
        setTotalUserCount: (totalUser: number) => {
            dispatch(setTotalUsersCountAC(totalUser))
        },
    }
}

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users) // functional component
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC) // class component
