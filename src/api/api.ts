import axios from "axios";
import {NETWORK_KEY} from "../redux/redux-store";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": NETWORK_KEY as string
    },
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    getProfile(profileId: number) {
        return instance.get(`profile/${profileId}`)
            .then(res => res.data)
    },
    userFollow(userID: number) {
        return instance.post(`follow/${userID}`)
            .then(res => res.data)
    },
    userUnfollow(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(res => res.data)
    },
}
