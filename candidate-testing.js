const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = ["1. Who was the first American woman in space? ", "2. True or False: 5 km. = 5,000 m. ", "3. (5 + 3) / 2 x 10 = ? ", "4. Given the array, [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5. What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
console.log(candidateAnswers, 'right by declaration');

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question(question);

  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
  console.log(candidateAnswers, 'inside askQuestion');
}
console.log(candidateAnswers, 'outside askQuestion');

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if (candidateAnswer === correctAnswer) {
    console.log('Correct');
  } else {
    console.log ('Incorrect');
  }

  console.log(`1. Correct Answer: ${correctAnswers[0]}\n\tCandidate Answer: ${candidateAnswers[0]}\n2. CorrectAnswer: ${correctAnswers[1]}\n\tCandidate Answer: ${candidateAnswers[1]}\n3. Correct Answer: ${correctAnswers[2]}\n]tCandidate Answer: ${candidateAnswers[2]}\n4. Correct Answer: ${correctAnswers[3]}\n\tCandidate Answer: ${candidateAnswers[3]}\n5. Correct Answer: ${correctAnswers[4]}\n\tCandidate Answer: ${candidateAnswers[4]}`);

console.log(candidateAnswers, 'in gradeQuiz');

// Part 3:
  let numberofCorrectAnswers = 0;
  let numberofQuizQuestions = 5;
  let grade = ((numberofCorrectAnswers) / (numberofQuizQuestions) * 100);  //TODO 3.2 use this variable to calculate the candidates score.

  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numberofCorrectAnswers++
    }
  }
  console.log(grade);

if (grade => 80) {
  console.log(`Congratulations, candidate!  You have passed the quiz, with ${grade}%!`);
} else {
  console.log(`Sorry, candidate!  You scored ${grade}% which is below the 80% required to pass the quiz.  Better luck next time!`);
}

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  console.log(candidateAnswers, "runProgram");
}
runProgram()
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};