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


 // IMPORTS
 var inquirer = require( 'inquirer' )

// Player
var player = {
  hp: 100,
}
// Zombie
var zombie = {
  hp: 25,
}

doRound()

function doRound() {
    /* Main Game Loop */
    
    var question = [{
      type: 'input', 
      name: 'userGuess', 
      message: 'Guess a number betweeb 1 and 5.'
    }]
    
    inquirer.prompt(question)
      .then( function(answer) {

        if ( parseInt(answer.userGuess) === rollAttack() ) {
          // If the player guesses correctly we reduce zombie health
          console.log(`\nYou hit the zombie!!`)
          doDamage(zombie)
        } else {
          console.log(`\nThe zombie hits you!!`)
          doDamage(player)
        }
      
        // Display updated health values after each round
        console.log( `______________________________________` )
        console.log( `|  Player HP: ${player.hp}`)
        console.log( `|                                    |` )
        console.log( `|  Zombie HP: ${zombie.hp}|`)
        console.log( `|____________________________________|` )
        console.log( '' )

        handleEndGame()
    })
}

function handleEndGame() {
  if ( playerKilledZombie() ) {
    // If playerHP is still above 0 at this point, we assume the zombie died
    return console.log( 'Congrats! You killed the zombie!' )

  } else if ( zombieKilledPlayer() ) {                                      
    // However, if the playerHP is below 1, we assume the player died
    return console.log( 'Looks like the zombie is eating well today...' )
  }
  // If both are still alive, do another round
  doRound()
}

function doDamage(target) {
  var damage = rollDamage()
  console.log(`--> ${damage} damage!!!`)
  target.hp -= damage
}

function rollAttack() {
  return Math.floor( Math.random() * 5 ) + 1
}

function rollDamage() {
  return Math.floor( Math.random() * 12 ) + 3
}

function playerKilledZombie() {
  return player.hp > 0 && zombie.hp < 1
}

function zombieKilledPlayer() {
  return player.hp < 1 && zombie.hp > 0
}
