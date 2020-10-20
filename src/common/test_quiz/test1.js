const test_quiz = {
  "id": 1,
  "quizzes": [
    {
      "title": "다음 캐릭터의 이름은?",
      "quiz_data": {
        "type": "image",
        "contents": ["/images/quiz/son.PNG", "/images/quiz/son1.PNG"]
      },
      "answer_data": {
        "type": "multiple",
        "multiple": ["손여격", "전찬재", "손예겍키", "손르"],
        "answer": "손여격"
      }
    },
    {
      "title": "다음 캐릭은 전찬재이다",
      "quiz_data": {
        "type": "image",
        "contents": ["/images/quiz/jeon.PNG"]
      },
      "answer_data": {
        "type": "ox",
        "multiple": null,
        "answer": "o"
      }
    },
    {
      "title": "유튜브 문제이다.",
      "quiz_data": {
        "type": "video",
        "contents": ["bqpEAIVqT6M"]
      },
      "answer_data": {
        "type": "ox",
        "multiple": null,
        "answer": "o"
      }
    }
  ]
}

export default test_quiz;