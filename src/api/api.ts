import axios from "axios";
import {AuthType} from "../redux/auth-reducer";
import {UsersItemType} from "../redux/users-reducer";
import {ProfileType} from "../redux/profile-reducer";
import {apiConfig} from "../configs/config";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": apiConfig.NETWORK_KEY as string
    },
})

type UserResponseType = {
    error: null | string
    items: UsersItemType[]
    totalCount: number
}
//  ToDo: разделить на разные категории: usersAPI, profileAPI, authAPI, followAPI
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    getAuthMe() {
        return instance.get<AuthType>(`auth/me`)
            .then(res => res.data)

    },
    getProfile(profileId: string) {
        return instance.get<ProfileType>(`profile/${profileId}`)
            .then(res => res.data)
    },
    userFollow(userID: number) {
        return instance.post<AuthType>(`follow/${userID}`)
            .then(res => res.data)
    },
    userUnfollow(userID: number) {
        return instance.delete<AuthType>(`follow/${userID}`)
            .then(res => res.data)
    },
    changeStatus(status: string) { // experiment
        return instance.put(`profile/status`, {status: status})
            .then(res => res.data)
    },
    getStatus(userId: string) { // experiment
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data)
    },
    authLogin(email: string, password: string, rememberMe: boolean) { // experiment_2
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
}
