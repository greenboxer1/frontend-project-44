#!/usr/bin/env node
import greeting from '../scr/cli.js';
import { randomNumber, askAndCheckAnswer } from '../scr/index.js';

const userName = greeting();
console.log('What number is missing in the progression?');
for (let i = 0; i < 3; i += 1) {
  const randomStartNumber = randomNumber(20);
  const randomProgIncrease = randomNumber(8);
  const randomProgIndex = randomNumber(10);
  const question = [randomStartNumber];
  for (let i2 = 1; i2 < 10; i2 += 1) {
    question.push(question[i2 - 1] + randomProgIncrease);
  }
  const correctAnswerStr = String(question[randomProgIndex - 1]);
  question[randomProgIndex - 1] = '..';
  if (askAndCheckAnswer(question.join(' '), correctAnswerStr, i, userName) === false) {
    break;
  }
}
