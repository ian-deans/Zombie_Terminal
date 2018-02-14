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

var inquirer = require( 'inquirer' )

function Game( playerHP, zombieHP ) {
  this.playerHP = playerHP || 50
  this.zombieHP = zombieHP || 15
  this.doRound = this.doRound.bind(this)
  this.zombieAttack = this.zombieAttack.bind(this)
  this.playerAttack = this.playerAttack.bind(this)
}

Game.prototype = {

  playerAttack: function() {

    var damage = Game.damageRoll( 3, 15 )

    if ( damage >= 13 ) { console.log('!!Critical Strike!!') }

    this.zombieHP -= damage    

    if ( this.zombieHP < 1) {

      console.log( `Victory! ${damage} damage done to the zombie and it crumples to the floor!!` )
      //FIXME: handle win

    } else {

      console.log( `You dodge the zombie's attack and pimp smack his ass for ${damage} damage!` )
      this.doRound()
    }

  },

  zombieAttack: function() {
    console.log('ZOMBIE')
    var damage = Game.damageRoll( 1, 5 )
    this.playerHP -= damage

    if ( this.playerHP < 1 ) {

      console.log( `${damage} damage done! You got knocked the fuck out! Man!` )

    } else {

      console.log( `You try to dodge but the zombie smacks you for ${damage} damage!` )
      this.doRound()
    }

  },

  doRound: function() {
    this.getUserGuess()
      .then( function( userGuess ) {

        if ( parseInt( userGuess ) === Game.attackRoll() ) {
          this.playerAttack()
        } else {
          this.zombieAttack()
        }
      })

  },

  getUserGuess:  function() {
    return inquirer.prompt([{
      type: 'input',
      name: 'userGuess',
      message: 'Pick a number between 1 and 6'
    }])
  },

}



Game.damageRoll = function(min, max) {
  return Math.floor( Math.random() * max ) + min
}
Game.attackRoll = function() {
  return Math.floor( Math.random() * 6 ) + 1
}



var game = new Game()

console.log( game.zombieAttack() )


