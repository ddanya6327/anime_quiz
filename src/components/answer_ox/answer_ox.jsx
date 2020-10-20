import React from 'react';
import styles from './answer_ox.module.css';

const AnswerOx = ({ handleAnswerItem }) => {
    return (
        <div className={styles.buttons}>
            <button className={styles.ox_button} onClick={handleAnswerItem} data-question="o">O</button>
            <button className={styles.ox_button} onClick={handleAnswerItem} data-question="x">X</button>
        </div>
    );
};

export default AnswerOx;