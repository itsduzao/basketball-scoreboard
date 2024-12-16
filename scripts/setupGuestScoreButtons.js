import { addPoints } from './utils/addPoints.js';
import { updateScore } from './utils/updateScore.js';

let guestScoreCounter = 0;

const guestScoreElement = document.getElementById('guest-score');

export function setupGuestScoreButtons() {
  const btnGuestAddOne = document.getElementById('btn-guest-add-one');
  const btnGuestAddTwo = document.getElementById('btn-guest-add-two');
  const btnGuestAddThree = document.getElementById('btn-guest-add-three');
 
  btnGuestAddOne.addEventListener('click', () => {
    guestScoreCounter = addPoints(guestScoreCounter, 1);
    updateScore(guestScoreElement, guestScoreCounter);
  });

  btnGuestAddTwo.addEventListener('click', () => {
    guestScoreCounter = addPoints(guestScoreCounter, 2);
    updateScore(guestScoreElement, guestScoreCounter);
  });

  btnGuestAddThree.addEventListener('click', () => {
    guestScoreCounter = addPoints(guestScoreCounter, 3);
    updateScore(guestScoreElement, guestScoreCounter);
  });
}
