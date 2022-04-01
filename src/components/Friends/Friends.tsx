import React from 'react';
import friendStyle from './Friends.module.css';
import {FriendsPropsType} from "./FriendsContainer";

export const Friends: React.FC<FriendsPropsType> = (props) => {

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
