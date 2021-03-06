// Since we are starting with a plain html file,
// we are going to create all the sections with JavaScritp

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

// After the creation of each object and section,
// the next step is to assign the id's, class, names and sources of the images
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

// When we click the start button in the initial page,
// we are going to create a function that append all the childrens
// that we created in the last step
startBtn.addEventListener("click", startGame);

// Initial counter for the scoreboard
let userResult = 0;
let compResult = 0;


// This function create the images for rock, paper, scissors options.
function startGame(e){
    // We delete the start button
    this.parentNode.removeChild(this);

    // We change the h1 tag to indicate the player that he can
    // select rock, paper or scissors
    title.textContent = "Choose one option. First to 5 wins";

    // We append all the sections that we have created before
    thegame.appendChild(rock);
    thegame.appendChild(paper);
    thegame.appendChild(scissors);
    scoreBoard.appendChild(win);
    scoreBoard.appendChild(lose);
    scoreText.appendChild(winText);
    scoreText.appendChild(loseText);
    main.appendChild(thegame);
    main.appendChild(computerimg);
    main.appendChild(scoreText);
    main.appendChild(scoreBoard);
    main.appendChild(returnBtn);
    
    returnBtn.textContent = "Exit";
    winText.textContent = "Player score"
    loseText.textContent = "Machine score"
    
    returnBtn.setAttribute("onclick","window.location.reload()")
    window.addEventListener("click",player);
}

// The player(e) function gets the value of the img tag that is selected by the player
// and then calls to the computerPlay function in order to create a random choiche for the computer
// With the player and computer choices, we then call the playRound function inside and if to evalueate both choices
// We add 1 to the userResult if the player wins or to the compResult if the machine wins.
// Then we test if the result of either side is equal to 5 to end the match.
function player(e){
    const playerSelection = e.target.name;
    const optionSelection = document.querySelector(`img[name ="${playerSelection}"`);
    if(!optionSelection) return;
    const computerResult = computerPlay();
    computerimg.setAttribute("class","optionsComp");
    computerimg.setAttribute("src",`./images/${computerResult.toLowerCase()}.png`);

    if(playRound(playerSelection,computerResult)=="WIN"){
        userResult++;
    }else if(playRound(playerSelection,computerResult)=="LOSE"){
        compResult++;
    }
    win.textContent = userResult;
    lose.textContent = compResult;
    if(userResult==5){
        alert("Congratulations! You won the match");
        window.location.reload();
    }
    if(compResult==5){
        alert("Too bad, you lost the match :(");
        window.location.reload();
    }
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

// Rock, paper, scissors function using switch and case method.
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