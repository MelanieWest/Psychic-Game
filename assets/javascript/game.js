
var numGuesses = 0;
var Wins = 0;
var Losses = 0;
var compChoice;

document.getElementById("message1").innerHTML = 'Choose a number between 0 and 9: ';

//var begin = prompt("Type a number to begin");

// This function is run whenever the user presses a key.------------------------
document.onkeyup = function(event) {

//choose a random integer between 0 and 9 for each event
 var newChoice = Math.floor(Math.random()*10); //ran # betw 0 and 9

 //don't reset compChoice during the 3 guesses
if (numGuesses=== 0) {compChoice = newChoice;}

//increment the guess count
numGuesses += 1;

// Determines which key was pressed.
  var userGuess = event.key;
  
// don't bother checking invalid input;  it just won't be equal.
 

  // // Alerts the key the user pressed (userGuess).
  document.getElementById("message1").innerHTML = 'You guessed ' + userGuess;
  // // Alerts the Computer's guess.
//   alert("Computer guess: " + compChoice);

//test the number by user
  if(userGuess == compChoice) {
    document.getElementById("message1").innerHTML = 'Yay!  You got it!';
    document.getElementById("message2").innerHTML = 'Guess a new number between 0 and 9: ';
    Wins += 1;
    Stats( Wins, Losses, numGuesses);
}
  else if(numGuesses < 3 ){
    document.getElementById("message1").innerHTML = 'Guess again...';
    Stats( Wins, Losses, numGuesses);    
  }
  else if((numGuesses == 3) && (Losses < 3)) {
    document.getElementById("message1").innerHTML = 'Sorry!'
    document.getElementById("message2").innerHTML = 'The answer was: ' + compChoice;
    Losses += 1;
    numGuesses = 0;
    Stats( Wins, Losses, numGuesses);
  
}
  else{
    Stats( Wins, Losses, numGuesses);
    document.getElementById("message1").innerHTML = 'Game Over!';
    Losses+=1;
  }

  // function for keeping stats updated

  function Stats( w,l,n){     
    document.getElementById("wintext").innerHTML = w;
    document.getElementById("losstext").innerHTML = l;
    document.getElementById("remtext").innerHTML = 3-n;
  }
  
}






