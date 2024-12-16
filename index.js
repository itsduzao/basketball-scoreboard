let homeScoreCounter = 0;
let guestScoreCounter = 0;

const homeScoreElement = document.getElementById('home-score');
const guestScoreElement = document.getElementById('guest-score');

const btnHomeAddOne = document.getElementById('btn-home-add-one');
const btnHomeAddTwo = document.getElementById('btn-home-add-two');
const btnHomeAddThree = document.getElementById('btn-home-add-three');

btnHomeAddOne.addEventListener('click', () => {
  homeScoreCounter += 1;
  homeScoreElement.textContent = homeScoreCounter;
});
btnHomeAddTwo.addEventListener('click', () => {
  homeScoreCounter += 2;
  homeScoreElement.textContent = homeScoreCounter;
});
btnHomeAddThree.addEventListener('click', () => {
  homeScoreCounter += 3;
  homeScoreElement.textContent = homeScoreCounter;
});

const btnGuestAddOne = document.getElementById('btn-guest-add-one');
const btnGuestAddTwo = document.getElementById('btn-guest-add-two');
const btnGuestAddThree = document.getElementById('btn-guest-add-three');

btnGuestAddOne.addEventListener('click', () => {
  guestScoreCounter += 1;
  guestScoreElement.textContent = guestScoreCounter
});
btnGuestAddTwo.addEventListener('click', () => {
  guestScoreCounter += 2;
  guestScoreElement.textContent = guestScoreCounter;
});
btnGuestAddThree.addEventListener('click', () => {
  guestScoreCounter += 3;
  guestScoreElement.textContent = guestScoreCounter;
});