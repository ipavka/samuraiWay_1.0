import axios, {AxiosResponse} from "axios";
import {NETWORK_KEY} from "../redux/redux-store";
import {AuthType} from "../redux/auth-reducer";
import {UsersItemType} from "../redux/users-reducer";
import {ProfileType} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": NETWORK_KEY as string
    },
})

type UserResponseType = {
    error: null | string
    items: UsersItemType[]
    totalCount: number
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res: AxiosResponse<UserResponseType>) => res.data)
    },
    getAuthMe() {
        return instance.get(`auth/me`)
            .then((res: AxiosResponse<AuthType>) => res.data)

    },
    getProfile(profileId: number) {
        return instance.get(`profile/${profileId}`)
            .then((res: AxiosResponse<ProfileType>) => res.data)
    },
    userFollow(userID: number) {
        return instance.post(`follow/${userID}`)
            .then((res: AxiosResponse<AuthType>) => res.data)
    },
    userUnfollow(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then((res: AxiosResponse<AuthType>) => res.data)
    },
}
