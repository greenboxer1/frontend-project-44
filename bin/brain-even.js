#!/usr/bin/env node
import { greeting } from '../scr/cli.js';
import { randomNumber, askAndCheckAnswer } from '../scr/index.js';

const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const randomNum = randomNumber(30);
  const correctAnswerStr = (randomNum % 2 === 0 ? 'yes' : 'no');
  if (askAndCheckAnswer(randomNum, correctAnswerStr, i, userName) === false) {
    break;
  }
}
