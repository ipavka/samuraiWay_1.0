import React from "react";
import profStyle from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={profStyle.content}>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
            </div>
            <div className={profStyle.item}>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

