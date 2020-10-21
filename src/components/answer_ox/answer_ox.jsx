import React from 'react';
import styles from './answer_ox.module.css';

const AnswerOx = ({ handleAnswerItem, hidden }) => {
    return (
        <div className={styles.buttons}>
            <button className={styles.ox_button} onClick={handleAnswerItem} data-question="o">O</button>
            <button className={styles.ox_button} onClick={handleAnswerItem} data-question={hidden ? "o" : "x"}>{hidden ? "O" : "X"}</button>
        </div>
    );
};

export default AnswerOx;