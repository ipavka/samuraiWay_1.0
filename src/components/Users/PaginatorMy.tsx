import React, {useState} from 'react';
import s from "./Users.module.css";
import {MyButton} from "../common/SuperButton/SuperButton";


type PaginatorType = {
    pagesCount: number
    currentPage: number
    spanClick: (el: number) => void
}

export const PaginatorMy: React.FC<PaginatorType> = props => {
    const [first, setFirst] = useState(props.currentPage);
    const [last, setLast] = useState(props.currentPage + 9);

    const arrPages = Array.from(Array(props.pagesCount), (val, index) => index + 1); // создание массива страниц
    const argFirst = first <= 0 ? 1 : first // проверка на то, что бы массив не уехал в минус
    const argLast = last > props.pagesCount ? props.pagesCount : last // проверка на превышение реального кол-ва страниц
    const arrPart = range(argFirst, argLast);
    const iterCount = arrPages.length

    function range(from: number, to: number, step: number = 1): Array<number> { // создание части массива
        let i = from;
        const range = [];
        while (i <= to) {
            range.push(i);
            i += step;
        }
        return range;
    }

    const backHandler = () => {
        const nextLastItem = last === iterCount ? first - 1 : last - 10; // проверка возврата из крайней границы
        setFirst(first - 10)
        setLast(nextLastItem)
    }
    const forwardHandler = () => {
        const nextLastItem = last + 10 > iterCount ? iterCount : last + 10; // проверка корректности крайней границы
        setFirst(first + 10)
        setLast(nextLastItem)
    }
    const spanClickHandler = (el: number) => {
        props.spanClick(el)
    }

    return (
        <div className={s.pagination}>
            <MyButton disabled={first <= 1}
                         onClick={backHandler}>
                back
            </MyButton>
                <div>{arrPart.map(el => {
                    return <span key={el.toString()}
                                 className={props.currentPage === el ? s.selectPage : s.page}
                                 onClick={() => spanClickHandler(el)}
                    >{el}</span>
                })}</div>

            <MyButton disabled={last >= iterCount}
                         onClick={forwardHandler}>
                forward
            </MyButton>
        </div>
    );
};
