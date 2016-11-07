var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var userChoice = null;
var computerChoice = null;

// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
    var threeElements = ["rock", "paper", "scissors"];
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2. Be sure to save it to a variable.
    var randomNumber = Math.floor(Math.random()*3);
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[randomNum])
    var computerChoice = threeElements[randomNumber];
    
    return computerChoice;
    // Task 1, Step 4: return this new value
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    if(userChoice === rock && computerChoice === paper
    || userChoice === paper && computerChoice === scissors
    || userChoice === scissors && computerChoice === rock)
    
    {
      console.log("Computer Wins");
      $("#winner").append("<br> Computer Wins </br>");
      $("#winner").append('<img src=http://www.reactiongifs.com/r/gtfafm1.gif>');
    }
    else if(userChoice === rock && computerChoice === scissors
    || userChoice === paper && computerChoice === rock
    || userChoice === scissors && computerChoice === paper)
    {
        console.log ("User Wins");
        $("#winner").append("<br> User Wins </br>");
        $("#winner").append('<img src=http://i.imgur.com/NmEC6u6.gif>');
    }
    else
    {
        console.log("draw");
        $("#winner").append("<br> Draw </br>");
    }
    
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    //var computerChoice = generateComputerChoice();

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    //var userChoice = "rock";
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.
    //set userChoice to Rock if clicks on the div Rock
    $("#rock").click(function()
    {
    userChoice = rock;
    computerChoice = generateComputerChoice();
    $("#computer-choice").append('<br>' + computerChoice + '</br>');
    pickWinner(userChoice, computerChoice);
    });
    //set userChoice to Scissors if clicks on the div Scissors
    $("#scissors").click(function()
    
    {
    userChoice = scissors;
    computerChoice = generateComputerChoice();
    $("#computer-choice").append('<br>' + computerChoice + '</br>');
    pickWinner(userChoice, computerChoice);
    });
    //set userChoice to paper if clicks on the div Paper
    $("#paper").click(function()
    {
    userChoice = paper;
    computerChoice = generateComputerChoice();
    $("#computer-choice").append('<br>' + computerChoice + '</br>');
    pickWinner(userChoice, computerChoice);
    });
    // This line calls the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    

});
