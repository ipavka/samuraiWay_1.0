import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Friends} from "./Friends";
import {FriendsType} from "../../redux/sidebar-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    friends: FriendsType[]
}
type MapDispatchPropsType = {

}

export type FriendsPropsType = MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        friends: state.sidebar.friends
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return { }
}
export const FriendsContainer = connect (mapStateToProps, mapDispatchToProps)(Friends)