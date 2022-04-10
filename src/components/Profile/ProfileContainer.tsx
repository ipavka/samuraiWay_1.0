import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";


const URL = "https://social-network.samuraijs.com/api/1.0/profile/2"

class ProfileAPIContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`${URL}`)
            .then(res => {
                this.props.setUserProfile(res.data);
            })
    }
    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}


type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer)