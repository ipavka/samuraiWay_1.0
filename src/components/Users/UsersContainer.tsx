import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followThunkCreator, getUsersThunkCreator,
    unFollowThunkCreator,
    UsersItemType
} from "../../redux/users-reducer";
import {UsersF} from "./UsersF";
import {MySpinner} from "../common/MySpinner";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    spanClickHandler = (e: number) => {
        this.props.getUsersTC(e, this.props.pageSize)
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
                        followingProgress={this.props.followingProgress}
                        followTC={this.props.followTC}
                        unFollowTC={this.props.unFollowTC}
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
    followingProgress: number[]
}
type MapDispatchPropsType = {
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userID: number) => void
    unFollowTC: (userID: number) => void
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

export default compose<React.FC>(
    connect(mapStateToProps, {
        getUsersTC: getUsersThunkCreator,
        followTC: followThunkCreator,
        unFollowTC: unFollowThunkCreator
    }),
    WithAuthRedirect
)(UsersContainer)
