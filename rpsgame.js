const main = document.getElementById("main");
const title = document.getElementById("title");
const startBtn = document.querySelector("#startBtn");
const thegame = document.createElement("div");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const returnBtn = document.createElement("button");

rock.setAttribute("class","options");
paper.setAttribute("class","options");
scissors.setAttribute("class","options");
thegame.setAttribute("class","theGame");


startBtn.addEventListener("click", startGame);
startBtn.classList.add

function startGame(e){
    this.parentNode.removeChild(this);
    title.parentNode.removeChild(title);
    thegame.appendChild(rock);
    thegame.appendChild(paper);
    thegame.appendChild(scissors);
    main.appendChild(thegame);
}

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

function match(){
    let win = 0;
    let lose = 0;
    let tie = 0;

    for(i=0;i<5;i++){
        results = game();
        console.log("You " + results);

        if(results == "WIN"){
            win++;
        }else if (results == "LOSE"){
            lose++;
        }else{
            tie++;
        }
    }

    return "Wins: "+win+"  Loses: "+ lose+ "  Ties: " +tie;
}
    