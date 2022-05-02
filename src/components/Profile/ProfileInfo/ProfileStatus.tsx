import React, {useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {EditableSpan} from "../../common/EditableSpan/EditableSpan";
import {usersAPI} from "../../../api/api";


export const ProfileStatus = () => {

    const [value, setValue] = useState('');

    // useEffect(() => { // как убрать ошибку
    //     usersAPI.getStatus('23216').then(res => {
    //         setValue(res);
    //     })
    // }, [])

    const addHandler = () => {
        usersAPI.changeStatus(value).then(res => {
            console.log(res)
        })
    }

    return (
        <div className={s.statusBlock}>
            <EditableSpan value={value}
                          onEnter={addHandler}
                          onBlur={addHandler}
                          onChangeText={setValue}
                          spanProps={{children: value ? undefined : 'double click to enter your status'}}
            />
        </div>
    );
};

