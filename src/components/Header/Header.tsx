import headerStyle from "./Header.module.css";
import React from "react";

export const Header = () => {
    return (
        <header className={headerStyle.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9Bj04UUgRET0JT4J8kZ3Lq60KlDUrrUAuA&usqp=CAU"
                alt="logo"/>
        </header>
    )
}