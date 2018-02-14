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

 /**
  * game:
  *   zombie hp
  *   player hp
  *   
  *   zombie attack
  *   player attack
  * 
  *   check for death
  * 
  *   show result   
  * 
  *   
  */
var inquirer = require('inquirer')

function Game(playerHP, zombieHP) {
  this.playerHP = playerHP || 70
  this.zombieHP = zombieHP || 20
  this.processRound = this.processRound.bind(this)
  this.getUserInput = this.getUserInput.bind(this)
  this.zombieAttack = this.zombieAttack.bind(this)
  this.playerAttack = this.playerAttack.bind(this)
}

Game.prototype.doRound = function() {
  this.getUserInput()
}

Game.prototype.getUserInput = function() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'userGuess',
      message: 'Pick a number between 1 and 5:'
    }
  ]).then(this.processRound)
}

Game.prototype.processRound = function(answer) {
  // take attack roll
  var attackRoll = Math.floor( Math.random() * 5 ) + 1
  var userGuess = answer.userGuess
  // compare roll to guess
  console.log(userGuess)
  console.log(`User attackRoll: ${userGuess}  vs  zombie attackRoll ${attackRoll}`)
  if (parseInt(userGuess) === attackRoll) {
    this.playerAttack()
  } else {
    this.zombieAttack()
  }
}

Game.prototype.playerAttack = function() {
  var damage = Math.floor(Math.random() * 15) + 3
  this.zombieHP -= damage
  console.log(`You backhand the zombie for ${damage} damage!`)
  if (this.zombieHP < 1) {
    console.log('Player Wins!')
  } else {
    this.HUD()
    this.doRound()
  }
}

Game.prototype.zombieAttack = function() {
  var damage = Math.floor(Math.random() * 5) + 1
  this.playerHP -= damage
  console.log(`The zombie slaps you for ${damage} damage`) 
  if (this.playerHP < 1) {
    console.log('Player Loses!')
  } else {
    this.HUD()
    this.doRound()
  }
}

Game.prototype.HUD = function() {
  console.log(`
    Player Health: ${this.playerHP}
        Zombie Health   ${this.zombieHP}
  `)
}



var game = new Game()
game.doRound()