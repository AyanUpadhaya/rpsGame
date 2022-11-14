//~ Rock smashes scissors.
//~ Paper covers rock.
//~ Scissors cut paper.
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const status = document.querySelector('#status')
const computer = document.querySelector('#computer')
const winCount = document.querySelector('#win-count')
const lostCount = document.querySelector('#lost-count')

let winCnt = 0;
let lostCnt = 0;


function randomChoice(list){
    randomNum = Math.random()*list.length;
    return list[parseInt(randomNum)]
}


function playGame(userChocie){
    const possible_actions = ["rock", "paper", "scissors"]

    
    const computerChoice = randomChoice(possible_actions)

    switch(computerChoice){
        case 'rock':
            computer.innerHTML = "<button class='btn btn-primary btn-lg'><i class='fa-solid fa-hand-back-fist '></i></button>"
            break;
        case 'paper':
            computer.innerHTML = "<button class='btn btn-primary btn-lg'><i class='fa-solid fa-hand'></i></button>"
            break;
        case 'scissors':
            computer.innerHTML = "<button class='btn btn-primary btn-lg'><i class='fas fa-hand-scissors'></i></button>"
            break;
        default:
            computer.innerHTML = "<button class='btn btn-primary btn-lg'><i class='fas fa-hand-scissors'></i></button>"
    }

    
    if(userChocie.toLowerCase() == computerChoice.toLowerCase()){
        status.innerHTML = "Its a Tie";
    }else if(userChocie.toLowerCase() == "rock".toLowerCase()){
           if(computerChoice.toLowerCase()=="scissors".toLowerCase()){
               status.innerHTML = "Rock smashes scissors! You win!";
               winCnt++;
           }else{
               status.innerHTML = "Paper covers rock! You lose.";
               lostCnt++
           }
    }else if(userChocie.toLowerCase() == "paper".toLowerCase()){
        if(computerChoice.toLowerCase()=="rock".toLowerCase()){
            status.innerHTML = "Paper covers rock! You win!";
            winCnt++;
        }else{
            status.innerHTML ="Scissors cuts paper! You lose.";
            lostCnt++;
        }
            
    }else if(userChocie.toLowerCase() == "scissors".toLowerCase()){
        if(computerChoice.toLowerCase()=="paper".toLowerCase()){
            status.innerHTML ="Scissors cuts paper! You win!";
            winCnt++;
        }else{
            status.innerHTML = "Rock smashes scissors! You lose.";
            lostCnt++;
        }
            
    }
    if(winCnt>0 || lostCnt>0){

        winCount.innerHTML = `<button class='btn btn-primary btn-lg'>Won: ${winCnt}</button>`
        lostCount.innerHTML = `<button class='btn btn-primary btn-lg'>Lost: ${lostCnt}</button>`
        
    }
    
}


//events
rockBtn.addEventListener('click',(ev)=>{
    let userChocie = "rock";
    playGame(userChocie)
})

paperBtn.addEventListener('click',(ev)=>{
    let userChocie = "paper";
    playGame(userChocie)
})
scissorsBtn.addEventListener('click',(ev)=>{
    let userChocie = "scissors";
    playGame(userChocie)
})






