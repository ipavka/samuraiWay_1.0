import React from 'react';
import friendStyle from './Friends.module.css';
import {SidebarType} from "../../redux/state";

export const Friends: React.FC<SidebarType> = (props) => {

    return (
        <div className={friendStyle.main}>
            {props.friends.map(el => {
                return <div key={el.id} className={friendStyle.items}>
                    <img src={el.avatar}/>
                    {el.name}
                </div>
            })}
        </div>
    );
};
