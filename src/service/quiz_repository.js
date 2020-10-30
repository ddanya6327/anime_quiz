import { firebaseDatabase } from "./firebase";

class QuizRepository {
  getQuizList(onUpdate) {
    const ref = firebaseDatabase.ref(`quiz`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
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
