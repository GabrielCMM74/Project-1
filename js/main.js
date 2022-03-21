console.log(`Main JS File is Loaded`)

// All my Arrays 
let ifEven = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
let ifOdd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
let ifRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
let ifBlack = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 20, 31, 33, 35];
let ifFirst12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let ifSecond12 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
let ifThird12 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
let ifOnetEight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
let ifNinetThirty = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
let ifFirstRow = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
let ifSecondRow = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
let ifThirdRow = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];

// State Variables 
let currentBalance;
let currentBet;
let currentSelection;
let currentWinner;

let resetGame = document.getElementById('resetwheel');
let spinBtn = document.getElementById('spinwheel');
let wheelResult = document.getElementById('wheel')

// Event Listeners
document.getElementById('placebet').addEventListener('click', adjustBalance)
document.querySelector('.angry-grid').addEventListener('click', handleClick);
document.getElementById('placebet').addEventListener('click', handleClick);
document.querySelector('.angry-grid').addEventListener('click', handleClick);
resetGame.addEventListener('click', handleClick);
spinwheel.addEventListener('click', getNumber);
resetGame.addEventListener('click', reset);


init();

function init(){
    currentBalance = 5000;
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
    // let wheelValue  =setInterval(()=>{
    //     wheelResult.style.visibility = "visible";
    //     wheelResult.innerHTML = Math.floor((Math.random() * 36) + 1);
    //     }, 500)
       let wheelValue = (Math.floor(Math.random() * 36 + 1));
    wheelResult.innerHTML = wheelValue;
    console.log(`YOU WON`)

    return wheelValue
    // function time(){
    //     setTimeout(()=>{
    //         winner();
    //     }, 12000)
    // }
    // time();console.log(getNumber())
    
};




// function fask(){
 
//     const win = getNumber()
//     if (win === evenarray)
// };


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
