import { addPoints } from './utils/addPoints.js';
import { updateScore } from './utils/updateScore.js';

let homeScoreCounter = 0;

const homeScoreElement = document.getElementById('home-score');

export function setupHomeScoreButtons() {
  const btnHomeAddOne = document.getElementById('btn-home-add-one');
  const btnHomeAddTwo = document.getElementById('btn-home-add-two');
  const btnHomeAddThree = document.getElementById('btn-home-add-three');

  btnHomeAddOne.addEventListener('click', () => {
    homeScoreCounter = addPoints(homeScoreCounter, 1);
    updateScore(homeScoreElement, homeScoreCounter);
  });

  btnHomeAddTwo.addEventListener('click', () => {
    homeScoreCounter = addPoints(homeScoreCounter, 2);
    updateScore(homeScoreElement, homeScoreCounter);
  });

  btnHomeAddThree.addEventListener('click', () => {
    homeScoreCounter = addPoints(homeScoreCounter, 3);
    updateScore(homeScoreElement, homeScoreCounter);
  });
}
