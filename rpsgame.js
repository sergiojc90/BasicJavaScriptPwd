const main = document.querySelector('#main');
const content = document.createElement('div');
const para = document.createElement('p');
const heading3 = document.createElement('h3');
const subcontent = document.createElement("div");
const heading1 = document.createElement("h1");
const para2 = document.createElement('p');

content.classList.add("content");
content.textContent = "This is the glorious text-content";

para.textContent = "Hey I'm red";
para.style.color = "red";

heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";

heading1.textContent = "I'm in a div";
para2.textContent = "ME TOO!";

subcontent.appendChild(heading1);
subcontent.appendChild(para2);

main.appendChild(content);
main.appendChild(para);
main.appendChild(heading3);
main.appendChild(subcontent);

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
    