import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {MySpinner} from "../common/MySpinner";
import {Redirect, withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router-dom";


class ProfileAPIContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let profileId = this.props.match.params.userId;
        if (!profileId) profileId = '2';
        this.props.getProfileTC(profileId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (<>
                {this.props.isFetching ?
                    <MySpinner/> :
                    <Profile profile={this.props.profile}/>}
            </>
        );
    }

}

type MapStateToPropsType = {
    profile: ProfileType
    isFetching: boolean
    isAuth: boolean
}
type MapDispatchPropsType = {
    getProfileTC: (profileId: string) => void
}
type PathParamsType = {userId: string}
type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType
export type OwnPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.users.isFetching,
        isAuth: state.auth.isAuth,
    }
}

const WithURLDataContainer = withRouter(ProfileAPIContainer as any)
export const ProfileContainer = connect(mapStateToProps,
    {getProfileTC: getProfileThunkCreator,
    })(WithURLDataContainer);

// export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer)