#!/usr/bin/env node
import greeting from '../scr/cli.js';
import { randomNumber, askAndCheckAnswer } from '../scr/index.js';

const userName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const randomNumOne = randomNumber(50);
  const primeNumers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  let correctAnswerStr = 'no';
  primeNumers.forEach((primeNumber) => {
    if (primeNumber === randomNumOne) {
      correctAnswerStr = 'yes';
    }
  });
  if (askAndCheckAnswer(randomNumOne, correctAnswerStr, i, userName) === false) {
    break;
  }
}
