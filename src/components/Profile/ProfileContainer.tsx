import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";


const URL = "https://social-network.samuraijs.com/api/1.0/profile/"

class ProfileAPIContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        //@ts-ignore
        let profileId = this.props.router.params.userId;
        if(!profileId) profileId = 2;

        axios.get(`${URL}${profileId}`)
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

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
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
export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withRouter(ProfileAPIContainer));
// export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer)