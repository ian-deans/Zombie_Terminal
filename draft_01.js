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
var zombieHP = 20

// User's Choice
var userChoice = 4 //TODO: replace this with a capture of user input

// Main loop for game, stating that the game is not over
// as long as BOTH conditions are still true 
while(            // As long as
  playerHP > 0    // the player's health is above 0
    &&            // and
  zombieHP > 0    // the zombie's health is above 0
) {               // the game will continue

  /* Main Game Loop */

  // Ask player for their guess.
  //TODO: inquirer.prompt() stuff

  // Roll a random number for damage
  var damage = Math.floor( Math.random() * 12 ) + 3

  if ( userChoice === Math.floor( Math.random() * 5 ) + 1 ) {
    // If the player guesses correctly we reduce zombie health
    console.log(`You hit the zombie!!         ${damage} damage!`)
    zombieHP -= damage
  } else {
    console.log(`The zombie hits you!!     ${damage} damage`)
    playerHP -= damage
  }
}

// Once the loop is finished, the game is over.
// either the player or the zombie have reach 0 health

if (playerHP > 0) {                                               // If playerHP is still above 0 at this point, we assume the zombie died
  console.log('Congrats! You killed the zombie!')
} else {                                                          // However, if the playerHP is below 1, we assume the player died
  console.log('Looks like the zombie is eating well today...')
}