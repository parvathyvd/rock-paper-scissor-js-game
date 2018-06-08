
/**********game*******/

let userScore = 0;
let computerScore = 0;
var userScoreSpan = document.getElementById("user-score");
var compScoreSpan = document.getElementById("comp-score");
var scoreBoardDiv = document.querySelector(".score-board");
var resultBlockp = document.querySelector(".result-block > h3");
var rockDiv = document.getElementById("r");
var paperDiv = document.getElementById("p");
var scissorDiv = document.getElementById("s");

function letterChange(letter){
    if(letter === "r"){
        return "Rock";
    }
    else if(letter === "s"){
        return "Scissor";
    }
    else{
        return "Paper"
    }
}

function win(userChoice,computerChoice){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = computerScore;
    resultBlockp.innerHTML = `You select ${letterChange(userChoice)} and Computer selects ${letterChange(computerChoice)} You Win`;
    var userChoiceDiv = document.getElementById(userChoice);
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 400);
}
function loose(userChoice,computerChoice){
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = computerScore;
    resultBlockp.innerHTML = `You select ${letterChange(userChoice)} and Computer selects ${letterChange(computerChoice)} You Loose`;
    var userChoiceDiv = document.getElementById(userChoice);
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 400);
    
}
function draw(userChoice,computerChoice){
    resultBlockp.innerHTML = `You select ${letterChange(userChoice)} and Computer selects ${letterChange(computerChoice)} It's Equal`;
    var userChoiceDiv = document.getElementById(userChoice);
    userChoiceDiv.classList.add('grey-glow');
    setTimeout(() => userChoiceDiv.classList.remove('grey-glow'), 400);
}

function getCompChoice(){
    var choices = ["r","p","s"];
    var randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice){
    var computerChoice = getCompChoice();

    switch(userChoice + computerChoice){
        case "rs":
        case "sp":
        case "pr":
        win(userChoice,computerChoice);
        break;
        case "sr":
        case "ps":
        case "rp":
        loose(userChoice,computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice,computerChoice);
        break;

    }
   
}



function main(){

    rockDiv.addEventListener("click", function(){

        game("r");

    })
    
    paperDiv.addEventListener("click", function(){
        game("p");

    })
    
    scissorDiv.addEventListener("click", function(){
        game("s");

    })
    
}

main();
