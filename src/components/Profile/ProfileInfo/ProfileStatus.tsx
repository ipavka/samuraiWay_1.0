import React, {useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {EditableSpan} from "../../common/EditableSpan/EditableSpan";


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusPropsType> = props => {

    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const addHandler = () => {
        props.updateStatus(status)
    }

    return (
        <div className={s.statusBlock}>
            <EditableSpan value={status}
                          onEnter={addHandler}
                          onBlur={addHandler}
                          onChangeText={setStatus}
                          spanProps={{children: status ? undefined : 'double click to enter your status'}}
            />
        </div>
    );
};

