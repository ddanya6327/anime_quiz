import React from 'react';
import styles from './quiz_answer.module.css';
import AnswerItem from "../answer_item/answer_item";
import AnswerOx from "../answer_ox/answer_ox";

const QuizAnswer = () => {
    return (
        <div className={styles.answer}>
            <ul className={styles.answer_list}>
                {/*<AnswerItem />*/}
                <AnswerOx />
            </ul>
        </div>
    );
};

export default QuizAnswer;