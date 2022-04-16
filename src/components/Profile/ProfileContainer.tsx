import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {toggleSpinner} from "../../redux/users-reducer";
import {Spinner} from "../common/Spinner";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileAPIContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.props.toggleSpinner(true);
        //@ts-ignore
        let profileId = this.props.match.params.userId;
        if (!profileId) profileId = 2;

        usersAPI.getProfile(profileId).then(data => {
                this.props.setUserProfile(data);
                this.props.toggleSpinner(false);
            })
    }

    render() {
        return (<>
                {this.props.isFetching ?
                    <Spinner/> :
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
export type ProfilePropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.users.isFetching,
    }
}
// @ts-ignore
const WithURLDataContainer = withRouter(ProfileAPIContainer)
export const ProfileContainer = connect(mapStateToProps,
    {setUserProfile, toggleSpinner,})(WithURLDataContainer);

// export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer)