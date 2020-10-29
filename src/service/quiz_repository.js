import { firebaseDatabase } from "./firebase";

class QuizRepository {
  async saveQuiz(quiz) {
    await firebaseDatabase.ref(`quiz/${quiz.id}/`).set(quiz);
  }
}

export default QuizRepository;
