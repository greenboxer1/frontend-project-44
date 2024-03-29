import greeting from '../cli.js';
import { randomNumber, askAndCheckAnswer } from '../index.js';

const gcd = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    let randomNumOne = randomNumber(50);
    let randomNumTwo = randomNumber(50);
    const question = (`${randomNumOne} ${randomNumTwo}`);
    while (randomNumTwo) {
      const temp = randomNumTwo;
      randomNumTwo = randomNumOne % randomNumTwo;
      randomNumOne = temp;
    }
    const correctAnswerStr = String(randomNumOne);
    if (askAndCheckAnswer(question, correctAnswerStr, i, userName) === false) {
      break;
    }
  }
};
export default gcd;
