import React from 'react';
import style from './instructions.module.css'

const Instructions = () => {
    return (
        <div className={style.container}>
            <h1>Instructions</h1>
           <ul>
               <li>Press the "add card" button to add the new Card.</li>
               <li>Use the "sort Cards button to sort the Cards by the increase.</li>
               <li>Press an X icon on the top to delete them.</li>
           </ul>
        </div>
    );
};

export default Instructions;