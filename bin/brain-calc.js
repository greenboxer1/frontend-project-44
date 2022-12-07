#!/usr/bin/env node
import greeting from '../scr/cli.js';
import { randomNumber, askAndCheckAnswer } from '../scr/index.js';

const userName = greeting();
console.log('What is the result of the expression?');
for (let i = 0; i < 3; i += 1) {
  const randomSymbol = randomNumber(3);
  const randomNumOne = randomNumber(30);
  const randomNumTwo = randomNumber(30);
  let question;
  let correctAnswerStr;
  switch (randomSymbol) {
    case (1):
      correctAnswerStr = String(randomNumOne + randomNumTwo);
      question = `${randomNumOne} + ${randomNumTwo}`;
      break;
    case (2):
      correctAnswerStr = String(randomNumOne - randomNumTwo);
      question = `${randomNumOne} - ${randomNumTwo}`;
      break;
    case (3):
      correctAnswerStr = String(randomNumOne * randomNumTwo);
      question = `${randomNumOne} * ${randomNumTwo}`;
      break;
    default:
      console.log('Error');
  }
  if (askAndCheckAnswer(question, correctAnswerStr, i, userName) === false) {
    break;
  }
}
