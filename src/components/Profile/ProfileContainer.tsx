import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator,
    ProfileType,
    setStatusThunkCreator,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {MySpinner} from "../common/MySpinner/MySpinner";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


export class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let profileId = this.props.match.params.userId;
        if (!profileId) profileId = String(this.props.authID);
        this.props.getProfileTC(profileId)
        this.props.setStatusTC(profileId)
    }

    render() {
        return (<>
                {this.props.isFetching ?
                    <MySpinner/> :
                    <Profile profile={this.props.profile}
                             status={this.props.status}
                             updateStatus={this.props.updateStatusTC}
                    />}
            </>
        );
    }

}

type MapStateToPropsType = {
    profile: ProfileType
    isFetching: boolean
    status: string
    authID: number
    authStatus: boolean
}
type MapDispatchPropsType = {
    getProfileTC: (profileId: string) => void
    setStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
}
type PathParamsType = { userId: string }
type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType
export type OwnPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isFetching: state.users.isFetching,
        authID: state.auth.authData.data?.id,
        authStatus: state.auth.isAuth,
    }
}

export default compose<React.FC>(
    connect(mapStateToProps,{
        getProfileTC: getProfileThunkCreator,
        setStatusTC: setStatusThunkCreator,
        updateStatusTC: updateStatusThunkCreator,
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
