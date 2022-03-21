console.log(`Main JS File is Loaded`)

// State Variables 
let currentBalance;
let currentBet;
let currentSelection;
let currentWinner;

let resetGame = document.getElementById('resetwheel');
let spinBtn = document.getElementById('spinwheel');
let wheelResult = document.getElementById('wheel')

// Event Listeners
document.querySelector('.angry-grid').addEventListener('click', handleClick);
document.getElementById('placebet').addEventListener('click', handleClick);
document.querySelector('.angry-grid').addEventListener('click', handleClick);
resetGame.addEventListener('click', handleClick);
spinwheel.addEventListener('click', getNumber);
resetGame.addEventListener('click', reset);


init();

function init(){
    currentBalance = 1000;
    currentBet = enterbet.value;
    statusmessage.innerHTML = `Place your bets!!!`;
    statusmessage.style.backgroundColor = 'black';
    statusmessage.style.color = 'gold';
    enterbet.value = '';
    wheelResult.innerHTML = '';
    render();
};



function adjustBalance(){
    if (currentBalance > 0 && currentBalance >= parseInt(enterbet.value)){
        currentBalance -= parseInt(enterbet.value);
        if (currentBalance === 0){
            statusmessage.style.color = 'gold';
            statusmessage.style.backgroundColor = 'black'
            statusmessage.innerHTML = `You're out of money!`;
        }else if (parseInt(enterbet.value) > parseInt(currentBalance)){
            statusmessage.style.color = 'gold';
            statusmessage.style.backgroundColor = 'black'
            statusmessage.innerHTML = `You don't have enough money to make that wager again!`
        }else{
            statusmessage.style.color = 'gold';
            statusmessage.style.backgroundColor = 'black'
            statusmessage.innerHTML = `You have bet $${enterbet.value}! Choose a number!`
        }
        render();
    }
    if (currentSelection){
        currentSelection.style.border = 'none';
        currentSelection = undefined;
    }
};



function getNumber(){
    let wheelValue = (Math.floor(Math.random() * 36 + 1));
    wheelResult.innerHTML = wheelValue;
    console.log(`YOU WON`)
};
getNumber()

function reset(){
    init();
    if (currentSelection){
        currentSelection.style.border = 'none';
        currentSelection = undefined;
    }
};

function render(){
    balancemessage.innerHTML = currentBalance;
};
render()

// function render(){
//     balancemessage.innerHTML = currentBalance + enterbet.value;
// // };

// render()


function handleClick(e){
    console.log(e.target)
}

// statusmessage.innerHTML = `Hello`
