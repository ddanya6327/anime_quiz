import { firebaseDatabase } from "./firebase";

class QuizRepository {
  getQuizList(onUpdate) {
    const ref = firebaseDatabase.ref(`quiz`).orderByValue();
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      const descending = {};
      Object.keys(value)
        .sort((a, b) => b - a)
        .forEach((key) => {
          descending[key] = value[key];
        });
      value && onUpdate(descending);
    });
    return () => ref.off();
  }

  getQuiz(id, onUpdate) {
    const ref = firebaseDatabase.ref(`quiz`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val()[id];
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  async saveQuiz(quiz) {
    await firebaseDatabase.ref(`quiz/${quiz.id}/`).set(quiz);
  }
}

export default QuizRepository;
