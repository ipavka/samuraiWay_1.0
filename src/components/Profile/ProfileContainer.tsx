import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {MySpinner} from "../common/MySpinner";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


export class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let profileId = this.props.match.params.userId;
        if (!profileId) profileId = '2';
        this.props.getProfileTC(profileId)
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
    getProfileTC: (profileId: string) => void
}
type PathParamsType = { userId: string }
type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType
export type OwnPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.users.isFetching,
    }
}

export default compose<React.FC>(
    connect(mapStateToProps,{getProfileTC: getProfileThunkCreator,}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
