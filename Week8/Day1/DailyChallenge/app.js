//Daily Challenge : Trivia Quiz Game
//Create a Trivia Quiz Game with Express.js and express.Router
const express = require('express');
const app = express();
const quizRoutes = require('./routes/quiz');

app.use(express.urlencoded({ extended: true }));

// Mounting quizRoutes
app.use('/quiz', quizRoutes);

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});