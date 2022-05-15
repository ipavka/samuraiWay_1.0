import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: AppStateType) => {
    return state.users.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users
})
export const getTotalCount = (state: AppStateType) => {
    return state.users.totalCount
}