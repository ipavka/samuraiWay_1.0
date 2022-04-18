import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers, toggleFollowProgress, toggleSpinner,
    unFollow,
    UsersItemType
} from "../../redux/users-reducer";
import {UsersF} from "./UsersF";
import {MySpinner} from "../common/MySpinner";
import {usersAPI} from "../../api/api";


class UsersAPIContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleSpinner(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleSpinner(false);
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
            })
    }

    spanClickHandler = (e: number) => {
        this.props.toggleSpinner(true);
        this.props.setCurrentPage(e);
        usersAPI.getUsers(e, this.props.pageSize).then(data => {
                this.props.toggleSpinner(false);
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <MySpinner/> :
                <UsersF totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        spanClick={this.spanClickHandler}
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        toggleFollowProgress={this.props.toggleFollowProgress}
                        followingProgress={this.props.followingProgress}
                />}
        </>

    }
}

type MapStateToPropsType = {
    users: UsersItemType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UsersItemType[]) => void
    setCurrentPage: (pegaNumber: number) => void
    setTotalUserCount: (totalUser: number) => void
    toggleSpinner: (value: boolean) => void
    toggleFollowProgress: (isFetch: boolean, userID: number,) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingProgress: state.users.followingProgress
    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUserCount, toggleSpinner, toggleFollowProgress,
})(UsersAPIContainer) // class component
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users) // functional component
