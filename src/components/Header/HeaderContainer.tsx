import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {AuthType, DataAuthType, setAuthUserData} from "../../redux/auth-reducer";
import {Header} from "./Header";
import {usersAPI} from "../../api/api";


class HeaderAPIContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        usersAPI.getAuthMe().then(data => {
                if(data.resultCode === 0) {
                    this.props.setAuthUserData(data);
                }
            })
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
    setAuthUserData: (data: AuthType) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        authData: state.auth.authData.data,
        isAuth: state.auth.isAuth,
    }
}
// @ts-ignore
const WithURLDataContainer = withRouter(HeaderAPIContainer)
export const HeaderContainer = connect(mapStateToProps,
    {setAuthUserData,})(WithURLDataContainer);