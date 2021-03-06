import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {DataAuthType} from "../../redux/auth-reducer";
import {Header} from "./Header";
import {compose} from "redux";


class HeaderContainer extends React.Component<ProfilePropsType> {

    render() {
        return (<>
                <Header data={this.props.authData}
                        isAuth={this.props.isAuth}/>
            </>
        );
    }
}

type MapStateToPropsType = {
    authData: DataAuthType
    isAuth: boolean
}
type MapDispatchPropsType = {

}
export type ProfilePropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        authData: state.auth.authData.data,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.FC>(
    connect(mapStateToProps,
        {}),
    withRouter
)(HeaderContainer)