import React from "react";

import style from './1.module.css'

export function Component1() {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.title}>1!</div>
                <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam</div>
            </div>
        </div>
    )
}