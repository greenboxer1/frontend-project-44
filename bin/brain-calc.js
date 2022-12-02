#!/usr/bin/env node
import { greeting } from '../scr/cli.js';
import { randomNumber, askAndCheckAnswer } from '../scr/index.js';

const userName = greeting();
console.log('What is the result of the expression?');
for (let i = 0; i < 3; i += 1) {
  const randomSymbol = randomNumber(3);
  const randomNumOne = randomNumber(30);
  const randomNumTwo = randomNumber(30);
  let question;
  let correctAnswer;
  switch (randomSymbol) {
    case (1):
      correctAnswer = String(randomNumOne + randomNumTwo);
      question = `${randomNumOne} + ${randomNumTwo}`;
      break;
    case (2):
      correctAnswer = String(randomNumOne - randomNumTwo);
      question = `${randomNumOne} - ${randomNumTwo}`;
      break;
    case (3):
      correctAnswer = String(randomNumOne * randomNumTwo);
      question = `${randomNumOne} * ${randomNumTwo}`;
      break;
    default:
      console.log('Error');
  }
  if (askAndCheckAnswer(question, correctAnswer, i, userName) === false) {
    break;
  }
}
