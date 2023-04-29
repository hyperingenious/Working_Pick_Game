'use strict';

const roll_btn = document.querySelector('.btn--roll');
const dice_image = document.querySelector('.dice');
const player_1_section = document.querySelector('.player--0');
const player_2_section = document.querySelector('.player--1');
const player_1 = document.querySelector('#score--0');
const player_2 = document.querySelector('#score--1');
const current_rolls_1 = document.querySelector('#current--0');
const current_rolls_2 = document.querySelector('#current--1');
const hold_score = document.querySelector('.btn--hold');
const player_1_name = document.querySelector('#name--0');
const player_2_name = document.querySelector('#name--1');
const new_game = document.querySelector('.btn--new');
let kaliya_ji = true;
new_game.addEventListener('click', () => {
  //reseting the current dice rolls
  current_rolls_1.innerHTML = 0;
  current_rolls_2.innerHTML = 0;
  // reseting the scores to 0
  player_1.innerHTML = 0;
  player_2.innerHTML = 0;
  // who's turn indicator getting on the reset(starting from the start)
  if (player_2_section.classList.contains('player--active')) {
    player_1_section.classList.add('player--active');
    player_2_section.classList.remove('player--active');
  }
});

const game_processor = function () {
  // sound that is gonna get played each time the dice is rolled
  const dice_roll = Math.trunc(Math.random() * 6) + 1;
  //   const dice_roll = dice_roll();
  const sound = new Audio('dice-142528.mp3');
  sound.play(); //   for (let i = 1; i <= 6; i++) {// if (dice_roll === i) {
  dice_image.src = `dice-${dice_roll}.png`; // Dice image being displayed
  if (
    player_1_name.innerHTML.includes('wins') ||
    player_2_name.innerHTML.includes('wins')
  ) {
    player_1_name.innerHTML = 'Player 1';
    player_2_name.innerHTML = 'Player 2';
    player_1.innerHTML = 0;
    player_2.innerHTML = 0;
  }
  if (kaliya_ji) {
    current_rolls_1.innerHTML = dice_roll; // current throw begin displayed
    if (dice_roll != 1) {
      player_1.innerHTML = Number(player_1.innerHTML) + dice_roll; // throw points being accumulated cuz it is not 1
    }
    if (dice_roll === 1) {
      player_1.innerHTML = 0; // points became 0 cuz throw is 1
      kaliya_ji = false;
      player_1_section.classList.remove('player--active');
      player_2_section.classList.add('player--active');
      return;
    }
  }

  if (kaliya_ji === false) {
    current_rolls_2.innerHTML = dice_roll; // current throw begin displayed
    console.log('ageye');
    if (dice_roll != 1) {
      player_2.innerHTML = Number(player_2.innerHTML) + dice_roll; // throw points being accumulated cuz it is not 1
    }
    if (dice_roll === 1) {
      player_2.innerHTML = 0; // points became 0 cuz throw is 1
      kaliya_ji = true;
      player_1_section.classList.add('player--active');
      player_2_section.classList.remove('player--active');
    }
  }
  // }
  //   }
};
roll_btn.addEventListener('click', game_processor);
hold_score.addEventListener('click', () => {
  if (kaliya_ji) {
    kaliya_ji = false;
    if (player_1.innerHTML >= 50) {        
      document.querySelector('#name--0').innerHTML = `Player 1 wins 🐱‍🚀`;
    }
    if (player_1_section.classList.contains('player--active')) {
      player_1_section.classList.remove('player--active');
      player_2_section.classList.add('player--active');
    }
  } else {
    kaliya_ji = true;
    if (player_2.innerHTML >= 50) {
      document.querySelector('#name--1').innerHTML = `Player 2 wins 💋`;
    }
    if (player_2_section.classList.contains('player--active')) {
      player_1_section.classList.add('player--active');
      player_2_section.classList.remove('player--active');
    }
  }
});
