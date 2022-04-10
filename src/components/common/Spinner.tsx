import React from 'react';
import s from './Spinner.module.css'

export const Spinner = () => {
    return (
        <div className={s.twister}>
            <div className={s.bowl}>
                <div className={s.bowl_ring}>
                    <div className={s.ball_holder}>
                        <div className={s.ball}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

