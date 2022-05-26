import React, {useState} from 'react';
import s from "./Users.module.css";
import {MyButton} from "../common/SuperButton/SuperButton";

type PaginatorMyType = {
    totalItemCount: number
    pageSize: number
    currentPage: number
    spanClick: (el: number) => void
    portionSize?: number
}

export const Paginator: React.FC<PaginatorMyType> = (
    {
        totalItemCount,
        pageSize,
        currentPage,
        spanClick,
        portionSize = 10,
    }
) => {

    const pagesCount = Math.ceil(totalItemCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / pageSize);
    const [range, setRange] = useState(1);
    const leftNumber = (range - 1) * portionSize + 1;
    const rightNumber = range * portionSize;

    const back = () => {
        setRange(range - 1)
    }
    const forward = () => {
        setRange(range + 1)
    }
    const spanHandler = (el: number) => {
        spanClick(el);
    }

    return (
        <div className={s.pagination}>
            <MyButton onClick={back}
                      disabled={range <= 1}
            >
                back
            </MyButton>
            <div>{pages
                .filter(el => el >= leftNumber && el <= rightNumber)
                .map(el => {
                    return <span key={el.toString()}
                                 className={currentPage === el ? s.selectPage : s.page}
                                 onClick={(e) => spanHandler(el)}
                    >{el}</span>
                })}</div>

            <MyButton onClick={forward}
                      disabled={portionCount <= range}
            >
                forward
            </MyButton>
        </div>
    );
};

