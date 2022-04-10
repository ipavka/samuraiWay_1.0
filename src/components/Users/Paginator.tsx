import React, {useState} from 'react';
import s from "./Users.module.css";
import {SuperButton} from "../tools/SuperButton";

type PaginatorType = {
    pagesCount: number
    currentPage: number
    spanClick: (el: number) => void
}

export const Paginator: React.FC<PaginatorType> = props => {
    const [first, setFirst] = useState(1);
    const [last, setLast] = useState(10);

    const arrPages = Array.from(Array(props.pagesCount), (val, index) => index + 1);
    const arrPart = range(first, last);
    const iterCount = arrPages.length

    function range(from: number, to: number, step: number = 1): Array<number> {
        let i = from;
        const range = [];
        while (i <= to) {
            range.push(i);
            i += step;
        }
        return range;
    }

    const backHandler = () => {
        const nextLastItem = last === iterCount ? first - 1 : last - 10;
        setFirst(first - 10)
        setLast(nextLastItem)
    }
    const forwardHandler = () => {
        const nextLastItem = last + 10 > iterCount ? iterCount : last + 10;
        setFirst(first + 10)
        setLast(nextLastItem)
    }

    return (
        <div className={s.pagination}>
            <SuperButton disabled={first === 1}
                         onClick={backHandler}>
                back
            </SuperButton>
                <span>{arrPart.map(el => {
                    return <span key={el.toString()}
                                 className={props.currentPage === el ? s.selectPage : s.page}
                                 onClick={() => props.spanClick(el)}
                    >{el}</span>
                })}</span>

            <SuperButton disabled={last === iterCount}
                         onClick={forwardHandler}>
                forward
            </SuperButton>
        </div>
    );
};
