import React from "react";
import dStyle from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={dStyle.dialogs}>
            <div className={dStyle.dialogsItems}>
                <div className={dStyle.dialog}>Dimon</div>
                <div className={dStyle.dialog}>Andrey</div>
                <div className={dStyle.dialog}>Max</div>
                <div className={dStyle.dialog}>Svetlana</div>
                <div className={dStyle.dialog}>Elena</div>
                <div className={dStyle.dialog}>Pavel</div>
            </div>
            <div className={dStyle.messages}>
                <div className={dStyle.msg}>Hi!!!</div>
                <div className={dStyle.msg}>Yep!!</div>
                <div className={dStyle.msg}>Goodbye</div>
            </div>
        </div>
    )
}
