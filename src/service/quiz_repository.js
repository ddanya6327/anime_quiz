import { firebaseDatabase } from "./firebase";

class QuizRepository {
  getQuiz(onUpdate) {
    console.log('실행됨')
    const ref = firebaseDatabase.ref(`quiz`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  async saveQuiz(quiz) {
    await firebaseDatabase.ref(`quiz/${quiz.id}/`).set(quiz);
  }
}

export default QuizRepository;
