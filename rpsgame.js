const main = document.getElementById("main");
const title = document.getElementById("title");
const startBtn = document.querySelector("#startBtn");
const thegame = document.createElement("div");
const scoreBoard = document.createElement("div");
const scoreText = document.createElement("div");
const computerimg = document.createElement("img");
const win = document.createElement("div");
const winText = document.createElement("div");
const loseText = document.createElement("div");
const lose = document.createElement("div");
const rock = document.createElement("img");
const paper = document.createElement("img");
const scissors = document.createElement("img");
const returnBtn = document.createElement("div");

rock.setAttribute("class","options");
rock.setAttribute("name","ROCK");
rock.setAttribute("src","./images/rock.png");
paper.setAttribute("class","options");
paper.setAttribute("name","PAPER");
paper.setAttribute("src","./images/paper.png");
scissors.setAttribute("class","options");
scissors.setAttribute("name","SCISSORS");
scissors.setAttribute("src","./images/scissors.png");
thegame.setAttribute("class","theGame");
scoreBoard.setAttribute("class","scoreBoard");
scoreText.setAttribute("class","scoreText");
win.setAttribute("id","win");
win.setAttribute("class","score");
lose.setAttribute("id","lose");
lose.setAttribute("class","score");
returnBtn.setAttribute("class","returnBtn");


startBtn.addEventListener("click", startGame);

// This function create the images for rock, paper, scissors options.
function startGame(e){
    this.parentNode.removeChild(this);
    title.textContent = "Choose one option";
    thegame.appendChild(rock);
    thegame.appendChild(paper);
    thegame.appendChild(scissors);
    scoreBoard.appendChild(win);
    scoreBoard.appendChild(lose);
    scoreText.appendChild(winText);
    scoreText.appendChild(loseText);
    main.appendChild(thegame);
    main.appendChild(scoreText)
    main.appendChild(scoreBoard);
    main.appendChild(returnBtn);
    returnBtn.textContent = "Exit";
    winText.textContent = "Player score"
    loseText.textContent = "Machine score"
    win.textContent = 0;
    lose.textContent = 0;

    window.addEventListener("click",player);
}

function player(e){
    const playerSelection = e.target.name;
    const optionSelection = document.querySelector(`img[name ="${playerSelection}"`);
    if(!optionSelection) return;
    playRound(playerSelection,computerPlay())

}
// Fuction to create a random number and select rock, paper or scissors depending on the result.
function computerPlay(){
    let computer = Math.random()*9;
    let selection = "";
    
    if (computer>=7){
        selection = "ROCK";
    }else if(computer >=4 && computer<7){
        selection = "PAPER";
    }else{
        selection = "SCISSORS";
    }
    return selection;
}

function playRound(playerSelection,computerSelection){

    let endgame = "";

    switch(playerSelection){
        case "ROCK":
            switch(computerSelection){
                case "ROCK":
                    return endgame = "TIE";
                    break;
                case "PAPER":
                    return endgame = "LOSE";
                    break;
                case "SCISSORS":
                    return endgame = "WIN"
                    break;
            }
            break;
        case "PAPER":
            switch(computerSelection){
                case "ROCK":
                    return endgame = "WIN";
                    break;
                case "PAPER":
                    return endgame = "TIE";
                    break;
                case "SCISSORS":
                    return endgame = "LOSE"
                    break;
            }
            break;
        case "SCISSORS":
            switch(computerSelection){
                case "ROCK":
                    return endgame = "LOSE";
                    break;
                case "PAPER":
                    return endgame = "WIN";
                    break;
                case "SCISSORS":
                    return endgame = "TIE"
                    break;
            }   
    }
    return endgame;

}