import React from "react";
import style from "./footer.module.css";

const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <div className={style.footer}>
            React.js {date}
        </div>
    )
}
export default Footer;