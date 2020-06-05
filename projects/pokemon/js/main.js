// this is the game database=======================
var pokemonDB = [
   {
     name: 'charmander',
     type: 'fire',
     hp: 39,
     attack: 52,
     stamina: 39,
     level: 1,
     img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
   },
   {
   name: 'bulbasaur',
   type: 'fire',
   hp: 45,
   attack: 49,
   stamina: 49,
   level: 1,
   img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
 },
 {
 name: 'squirtle',
 type: 'water',
 hp: 44,
 attack: 48,
 stamina: 65,
 level: 1,
 img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
}
 ]

//this is the state==============================

var gameState = {
  userPokemon: '',
  rivalPokemon: '',
}

// this is the elements==========================
var pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character')

var battleScreenEl = document.getElementById('battle-screen')

var attackBtnsEl = document.getElementById('battle-screen').querySelectorAll('.attack')
console.log(attackBtnsEl)

// this is the initial loop==============================
var i = 0;
 while (i < pokemonsEl.length) {
   // add fuction to all characters on screen select
   pokemonsEl[i].onclick = function (){
     // current selected pokemon name
     var pokemonName = this.dataset.pokemons

     // elements for images on battle screen
     var player1Img = document.querySelector('.player1').getElementsByTagName('img')
     var player2Img = document.querySelector('.player2').getElementsByTagName('img')

     // we save the current pokemon
     gameState.userPokemon = pokemonName

     // cpu picks a pokemon
     cpuPick()

     // change screen to battle screen
     battleScreenEl.classList.toggle('active')

     //select data from current pokemon
     var currentPokemon = pokemonDB.filter(function(pokemon){
       return pokemon.name == gameState.userPokemon
     })
     // change pokemon image
     player1Img[0].src = currentPokemon[0].img

     //select data from current rival pokemon
     var currentRivalPokemon = pokemonDB.filter(function(pokemon){
       return pokemon.name == gameState.rivalPokemon
     })
     // change pokemon image
     player2Img[0].src = currentRivalPokemon[0].img

     // user choose attacks


     // cpu loses health


     // cpu choose attacks


     // user loses health


     // =========game logic==========

     // rock > scissors

     // paper > rock

     // scissors > Paper

     // depending on pokemon type and defense is how hard the attack is going to be and how much health is gonna take out

     // whoever get to health <= 0 loses

   }

   i++

 }
// end of loop=============================================


// formula for cpu to pick a random pokemon
var randomNumber = function (min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}

// function to pick cpu pokemon
var cpuPick = function (){
  gameState.rivalPokemon = pokemonsEl[randomNumber(0,3)].dataset.pokemons
}





















// // create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)
// var pokemons = [
//   {
//     name: 'charmander',
//     type: 'fire',
//     attack: 52,
//     stamina: 39,
//     level: 1
//   },
//   {
//     name: 'charmander',
//     type: 'fire',
//     attack: 52,
//     stamina: 39,
//     level: 1
//   },
//
// ]
//
//
// var attack = 20;
// var level = 10;
// var stack = 1.3;
// var stamina = 39;
//
// // create a formula for attacks
// console.log((attack * level ) * stack / 7)
//
//
//
// // create a formula for health
// //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
// console.log(((0.20 * Math.sqrt(level)) * stamina) * 15)
//
//
//
//
// // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// // p1 vs p2
//
//
//
//
// // when one user loses all his health declare a winner
