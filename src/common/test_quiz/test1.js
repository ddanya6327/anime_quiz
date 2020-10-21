const test_quiz = [
  {
    id: 1,
    quizzes: [
      {
        title: "다음 캐릭터의 이름은?",
        quiz_data: {
          type: "image",
          contents: ["/images/quiz/son.PNG", "/images/quiz/son1.PNG"],
        },
        answer_data: {
          type: "multiple",
          multiple: ["손여격", "전찬재", "손예겍키", "손르"],
          answer: "손여격",
        },
      },
      {
        title: "다음 캐릭은 전찬재이다",
        quiz_data: {
          type: "image",
          contents: ["/images/quiz/jeon.PNG"],
        },
        answer_data: {
          type: "ox",
          multiple: null,
          answer: "o",
        },
      },
      {
        title: "유튜브 문제이다.",
        quiz_data: {
          type: "video",
          contents: ["bqpEAIVqT6M"],
        },
        answer_data: {
          type: "ox",
          multiple: null,
          answer: "o",
        },
      },
    ],
  },
  {
    id: 2,
    quizzes: [
      {
        title: "다음 애니메이션의 제목은?",
        quiz_data: {
          type: "image",
          contents: ["/images/quiz/gnp.PNG"],
        },
        answer_data: {
          type: "multiple",
          multiple: [
            "Naruto",
            "Girls und Panzer",
            "One peace",
            "Legend",
            "에반게리온",
          ],
          answer: "손여격",
        },
      },
      {
        title: "유카리는 찐따이다",
        quiz_data: {
          type: "image",
          contents: [
            "https://inthestatus.com/jkwp/wp-content/uploads/2020/03/%EC%95%84%ED%82%A4%EC%95%BC%EB%A7%88-%EC%9C%A0%EC%B9%B4%EB%A6%AC_6120200307124023.jpg",
          ],
        },
        answer_data: {
          type: "ox",
          multiple: null,
          answer: "o",
        },
      },
      {
        title: "카츄샤는 직립 보행이 불가능하다",
        quiz_data: {
          type: "image",
          contents: [
            "https://lh3.googleusercontent.com/proxy/rMeNVmlM4j13wVvD0BAy_Xb3FSxdSzwldbzT76sreZIVfjUeKyvgcgBJmqmot5-xXreClvdk6JQ8sfIXoS0PgY1Mn4LH9qGRPV3w_dE1T_I",
          ],
        },
        answer_data: {
          type: "ox",
          multiple: null,
          answer: "o",
        },
      },
      {
        title: "생각나는 대사는?",
        quiz_data: {
          type: "image",
          contents: [
            "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F22018A4157E46B5828",
          ],
        },
        answer_data: {
          type: "multiple",
          multiple: [
            "농민여러분! 일어나시기 바랍니다!",
            "득체! 득체! 득체!",
            "사회주의란 이런것입니다!",
            "총알이 영 좋지 못한곳에 맞았어요.",
          ],
          answer: "득체! 득체! 득체!",
        },
      },
    ],
  },
  {
    id: 3,
    quizzes: [
      {
        title: "K-ON은 우주명작입니까?",
        quiz_data: {
          type: "image",
          contents: ["/images/quiz/kon.jpg"],
        },
        answer_data: {
          type: "oo",
          multiple: null,
          answer: "o",
        },
      },
      {
        title: "케이온이 있어 행복한 인생이었습니까?",
        quiz_data: {
          type: "image",
          contents: [
            "https://lh3.googleusercontent.com/proxy/9FOKB9rD9kJ4wrqmfBmmfVWE99nle6kuEUmN-YYXAbCF2aafCmBs0b5_2q04-2Wankwz_9AS2XQTN01_A5aspZoC6CEKvIj6ub2tuI4NkVAUxCNr8gabGEeRF2GM-4RcPv2gRiXuu8AvDnP_hI_uavA0B1twQZqB9ipAFYLmSOKpSIQnwA02q5bit5FTlJ9bGw",
          ],
        },
        answer_data: {
          type: "oo",
          multiple: null,
          answer: "o",
        },
      },
      {
        title: "다시 태어나도 K-ON을 볼겁니까?",
        quiz_data: {
          type: "image",
          contents: [
            "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F236CC53F52A864282228E6",
          ],
        },
        answer_data: {
          type: "oo",
          multiple: null,
          answer: "o",
        },
      },
      {
        title: "천사를 만났습니까?",
        quiz_data: {
          type: "image",
          contents: [
            "https://c-sf.smule.com/rs-s91/arr/0c/3b/391bb3ee-2923-4d60-9584-64ab6d0f2710_1024.jpg",
          ],
        },
        answer_data: {
          type: "oo",
          multiple: null,
          answer: "o",
        },
      },
      {
        title: "내일 낙원 상가 가서 유이 기타 구매할겁니까?",
        quiz_data: {
          type: "image",
          contents: [
            "https://lh3.googleusercontent.com/proxy/0o3d2pAtvsdyFBlsUBeD3XIfQOufs27u-5WvGoBFMLe7Kkimpd_uDstU07lhWQL3sVRhU1IiVUMidA71ucAcDtB4UewJmg2BW9PqxiZvMqNJlQlBNtdtPVhfmIbSmhW8iC0yuhjpvbd0wLRPNqu8TdZYKvF3b3e3n9UCXc-U9jrURZOEsONEJggUbnH3MzqgsNGicJiC3d-ts97S19qmpzNa",
          ],
        },
        answer_data: {
          type: "oo",
          multiple: null,
          answer: "o",
        },
      },
    ],
  },
  {
    id: 4,
    quizzes: [
      {
        title: "에반게리온에 등장하지 않는 캐릭터는?",
        quiz_data: {
          type: "image",
          contents: ["/images/quiz/eva.jpg"],
        },
        answer_data: {
          type: "multiple",
          multiple: ["신지", "아스카", "레이", "전찬재"],
          answer: "전찬재",
        },
      },
    ],
  },
  {
    id: 5,
    quizzes: [
      {
        title: "네즈코가 항상 물고 있는 물건은?",
        quiz_data: {
          type: "image",
          contents: [
            "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzvQ5z%2FbtqCcBwLtAX%2FqjMgn8q3AawB5nIDChbNF0%2Fimg.png",
          ],
        },
        answer_data: {
          type: "multiple",
          multiple: ["대나무", "오뎅", "전찬재", "손영혁 어묵"],
          answer: "대나무",
        },
      },
      {
        title: "네즈코가 요괴가 된 이유는?",
        quiz_data: {
          type: "image",
          contents: [
            "https://file3.instiz.net/data/cached_img/upload/2019/11/17/14/60e3f094229e90c8d5b8e0c1f046b665.gif",
          ],
        },
        answer_data: {
          type: "multiple",
          multiple: [
            "좀비한테 물려서",
            "약을 잘 못 먹어서",
            "김치를 안먹어서",
            "손영혁 때문에",
          ],
          answer: "손영혁 때문에",
        },
      },
      {
        title: "다음 캐릭터의 이름은?",
        quiz_data: {
          type: "image",
          contents: [
            "https://m.figurepresso.com/web/product/big/201910/f868092db0510f4ab62a2934c32d6102.jpg",
          ],
        },
        answer_data: {
          type: "multiple",
          multiple: ["탄지로", "톤지루", "네즈코", "젠이뚜"],
          answer: "젠이뚜",
        },
      },
    ],
  },
];

export default test_quiz;
