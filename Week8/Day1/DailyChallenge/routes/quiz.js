const express = require('express');
const router = express.Router();
const triviaQuestions = require('../questions');
// Sample trivia quiz questions and answers


let score = 0;
let currentQuestionIndex = 0;

router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    res.send("Quiz has ended. Please check your score.");
    return;
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex];
  res.send(`
    <h1>${currentQuestion.question}</h1>
    <form action="/quiz" method="post">
      <input type="text" name="answer" placeholder="Your answer">
      <button type="submit">Submit Answer</button>
    </form>
  `);
});

router.post('/', (req, res) => {
  const submittedAnswer = req.body.answer;
  const currentQuestion = triviaQuestions[currentQuestionIndex];
  if (submittedAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    score++;
    res.send("Correct! ");
  } else {
    res.send(`Incorrect! The correct answer is: ${currentQuestion.answer}. `);
  }
  
  currentQuestionIndex++;
  res.redirect('/quiz');
});

router.get('/score', (req, res) => {
  res.send(`Your final score is: ${score}`);
});

module.exports = router;