const main = document.getElementById("main");
const title = document.getElementById("title");
const startBtn = document.querySelector("#startBtn");
const thegame = document.createElement("div");
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
returnBtn.setAttribute("class","returnBtn");


startBtn.addEventListener("click", startGame);

// This function create the images for rock, paper, scissors options.
function startGame(e){
    this.parentNode.removeChild(this);
    title.textContent = "Choose one option";
    thegame.appendChild(rock);
    thegame.appendChild(paper);
    thegame.appendChild(scissors);
    main.appendChild(thegame);
    main.appendChild(returnBtn);
    returnBtn.textContent = "Exit";

    window.addEventListener("click",function(e){
        const optionSelection = document.querySelector(`img[name ="${e.target.name}"`);
        if(!optionSelection) return;
        return console.log(e.target.name);
    })
    const options = Array.from(document.querySelectorAll(".options"));
    
}
//
function playerSelection(){
    
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

function game(){

        let machine = computerPlay();
        let user = prompt("Selecto rock, paper or scissors").toUpperCase();

        console.log("You selected " + user);
        console.log("The machine selected "+ machine);

        return playRound(user,machine);
}
