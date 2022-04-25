import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {toggleSpinner} from "../../redux/users-reducer";
import {MySpinner} from "../common/MySpinner";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {RouteComponentProps} from "react-router-dom";


class ProfileAPIContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.props.toggleSpinner(true);

        let profileId = this.props.match.params.userId;
        if (!profileId) profileId = '2';

        usersAPI.getProfile(profileId).then(data => {
                this.props.setUserProfile(data);
                this.props.toggleSpinner(false);
            })
    }

    render() {
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
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    toggleSpinner: (value: boolean) => void
}
type PathParamsType = {userId: string}
type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType
export type OwnPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.users.isFetching,
    }
}

const WithURLDataContainer = withRouter(ProfileAPIContainer as any)
export const ProfileContainer = connect(mapStateToProps,
    {setUserProfile, toggleSpinner,})(WithURLDataContainer);

// export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer)