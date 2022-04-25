import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {DataAuthType, getAuthDataThunkCreator} from "../../redux/auth-reducer";
import {Header} from "./Header";


class HeaderAPIContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.props.getAuthDataTC()
    }

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
    getAuthDataTC: () => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        authData: state.auth.authData.data,
        isAuth: state.auth.isAuth,
    }
}

const WithURLDataContainer = withRouter(HeaderAPIContainer as any)
export const HeaderContainer = connect(mapStateToProps,
    {getAuthDataTC: getAuthDataThunkCreator})(WithURLDataContainer);