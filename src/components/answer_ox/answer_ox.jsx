import React from 'react';
import styles from './answer_ox.module.css';

const AnswerOx = () => {
    return (
        <div className={styles.buttons}>
            <button className={styles.ox_button}>O</button>
            <button className={styles.ox_button}>X</button>
        </div>
    );
};

export default AnswerOx;