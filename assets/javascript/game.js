
var numGuesses = 0;
var Wins = 0;
var Losses = 0;
var compChoice;

var begin = prompt("Press any key to begin");

document.getElementById("message1").innerHTML = 'Choose a number between 0 and 9: ';

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
  if(userGuess == compChoice) {   //document a win and zero guess count for new #
    document.getElementById("message1").innerHTML = 'Yay!  You got it!';
    document.getElementById("message2").innerHTML = 'Guess a new number between 0 and 9: ';
    Wins += 1;
    numGuesses = 0; //reset guess count back to zero
    Stats( Wins, Losses, numGuesses);
}
  else if(numGuesses < 3 ){   //incorrect guess with more tries left
    document.getElementById("message1").innerHTML = 'Your guess, ' + userGuess + ' is incorrect.';    
    document.getElementById("message2").innerHTML = 'Guess again...';
    Stats( Wins, Losses, numGuesses);    
  }
  else if(numGuesses == 3) {  //guesses used up
    document.getElementById("message1").innerHTML = 'Sorry!  The answer was: ' + compChoice;
    Losses += 1;
    if (Losses == 3) {  //game over
      document.getElementById("message1").innerHTML = 'Game Over!  New Game?';
      Stats( Wins, Losses, numGuesses);
      Losses = 0;  // reset losses for a new game
      Wins = 0;
      numGuesses = 0;
      document.getElementById("message2").innerHTML = 'Guess a new number between 0 and 9: ';
      }  //game over
    else {    //game not over
      document.getElementById("message2").innerHTML = 'Guess a new number between 0 and 9: ';
      numGuesses = 0;
      Stats( Wins, Losses, numGuesses);
    } //keep going with the next number
  
}
   
    
}   //end of onkeyup event


  // function for keeping stats updated

  function Stats( w,l,n){     
    document.getElementById("wintext").innerHTML = w;
    document.getElementById("losstext").innerHTML = l;
    document.getElementById("remtext").innerHTML = 3-n;
  }
  




