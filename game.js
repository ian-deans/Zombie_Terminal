/**
 * Zombie Game
 * 
 * Player starts with 70 hp and the zombie starts with 20 hp
 * 
 * Player chooses a number beteen 1 and 5
 * This choice is compared to a randomly generated number between 1 and 5
 * 
 * If the user's choice matches the random number:
 *  damage is done to the zombie
 * 
 * Otherwise:
 *  damage is done to the player
 * 
 * Once either the player's or the zombie's health reach 0, the game is over
 */

// Player Health
var playerHP = 70
// Zombie Health
var zomebieHP = 20

// User's Choice
var userChoice = 4 //TODO: replace this with a capture of user input

// Main loop for game, 
// As long as both player and zombie are above 0 health
// the game will continue.
while(playerHP > 0 && zombieHP > 0) {
  // Ask player for their guess.
  //TODO: inquirer.prompt() stuff

  if ( userChoice === Math.floor(Math.random()*5)+1 ) {
    if
  }
}
