import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleSpinnerAC,
    unFollowAC,
    UsersItemType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {UsersF} from "./UsersF";
import {Spinner} from "../common/Spinner";

const URL = "https://social-network.samuraijs.com/api/1.0/users"

export class UsersAPIContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleSpinner(true);
        axios.get(`${URL}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleSpinner(false);
                this.props.setUsers(res.data.items)
                this.props.setTotalUserCount(res.data.totalCount)
            })
    }

    spanClickHandler = (e: number) => {
        this.props.toggleSpinner(true);
        this.props.setCurrentPage(e);
        axios.get(`${URL}?page=${e}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleSpinner(false);
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Spinner/> :
                <UsersF totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        spanClick={this.spanClickHandler}
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}/>}
        </>

    }
}

type MapStateToPropsType = {
    users: UsersItemType[],
    totalCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersItemType[]) => void
    setCurrentPage: (pegaNumber: number) => void
    setTotalUserCount: (totalUser: number) => void
    toggleSpinner: (value: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
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
        toggleSpinner: (value: boolean) => {
            dispatch(toggleSpinnerAC(value))
        },
    }
}

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users) // functional component
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer) // class component
