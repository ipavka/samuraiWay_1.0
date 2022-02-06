import React from "react";
import profInfoStyle from "./ProfileInfo.module.css";


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
            </div>
            <div className={profInfoStyle.item}>
                ava + description
            </div>
        </div>
    )
}

