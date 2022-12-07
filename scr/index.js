import readlineSync from 'readline-sync';

export const randomNumber = (num = 100) => Math.floor(Math.random() * num + 1);

// Returns false if answer is incorrect and true if correct.
export const askAndCheckAnswer = (question, correctAnswerStr, iteration, userName) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== correctAnswerStr) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerStr}'.\nLet's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  if (iteration === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
  return true;
};
