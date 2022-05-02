import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import {EditableSpan} from "../../common/EditableSpan/EditableSpan";


export const ProfileStatus = () => {
    const [value, setValue] = useState('')
    return (
        <div className={s.statusBlock}>
            <EditableSpan value={value}
                          onChangeText={setValue}
                          spanProps={{children: value ? undefined : 'double click to enter your status'}}
            />
        </div>
    );
};

