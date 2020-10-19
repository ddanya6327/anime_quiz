import React from 'react';
import styles from './quiz_answer.module.css';
import AnswerItem from "../answer_item/answer_item";

const QuizAnswer = () => {
    return (
        <div className={styles.answer}>
            <ul className={styles.answer_list}>
                <AnswerItem />
                <AnswerItem />
                <AnswerItem />
            </ul>
        </div>
    );
};

export default QuizAnswer;