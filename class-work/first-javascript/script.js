// document.querySelector('h1').style.color = 'red'
// document.querySelector('h1').style.backgroundColor = 'yellow'


// var pageTitle = document.querySelector('h1')
// pageTitle.style.color = 'red'
// pageTitle.style.backgroundColor = 'yellow'
// var textChunck = document.querySelector('#text-chunk')
// textChunck.style.color = 'green'
// textChunck.style.backgroundColor = 'grey'

// var age = prompt('what is your age?')
// var days = age * 355.25
// alert(age + ' years is roughly ' + days + ' days')

var secretNumber = 11
var stringGuess = prompt('guess a number!')
var guess = Number(stringGuess)

// if(guess === secretNumber){
//   alert('you guessed right!!!');
// }

// else if (guess > secretNumber) {
//   alert('too high, try again');
// }

// else {
//   alert('too low, guess again')
// }

while(guess !== secretNumber){
  var stringGuess = prompt('Guess a Number!')
  var guess = Number(stringGuess)
}

alert('you got it!')