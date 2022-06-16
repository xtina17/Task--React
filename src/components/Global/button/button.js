import React from 'react';
import style from './button.module.css';

const Button = ({children, cn, onClick}) => {
    return (
        <button onClick={onClick} className={style[cn]}>
            {children}
        </button>

    );
};

export default Button;