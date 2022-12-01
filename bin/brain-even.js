#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting } from '../scr/cli.js';


const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  let result;
  const randomNum = Math.floor(Math.random() * 100 + 1);
  const isEvenRandomNum = (randomNum % 2 === 0 ? 'yes' : 'no');
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  switch (userAnswer) {
    case 'yes':
      result = (isEvenRandomNum === 'yes');
      break;
    case 'no':
      result = (isEvenRandomNum === 'no');
      break;
    default:
      result = false;
  }
  if (result === false) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEvenRandomNum}'.\nLet's try again, Bill!`);
    break;
  }
  console.log('Correct!');
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}

