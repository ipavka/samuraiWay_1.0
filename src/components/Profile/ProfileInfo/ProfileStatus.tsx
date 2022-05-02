import React, {useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {EditableSpan} from "../../common/EditableSpan/EditableSpan";


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusPropsType> = props => {

    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(props.status)
    }, [])

    const addHandler = () => {
        props.updateStatus(value)
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

