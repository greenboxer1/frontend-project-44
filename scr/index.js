import readlineSync from 'readline-sync';

export const randomNumber = (num=100) => {
    return Math.floor(Math.random() * num + 1);
}

//Returns false if answer is incorrect and true if correct.
//question and correctAnswer must be str.
export const askAndCheckAnswer = (question, correctAnswer, iteration, userName) => {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return false;
    }
    console.log('Correct!');
    if (iteration === 2) {
    console.log(`Congratulations, ${userName}!`);
    return true;
    }
}

