import React from "react";
import style from "../header.module.css";
import {FaReact} from "react-icons/all";

const Logo = () => {
    return (
        <div className={style.svg}>
            <div>
                <FaReact/>
            </div>
            <div>
                <span>React.js</span>
            </div>
        </div>
    )
}
export default Logo;