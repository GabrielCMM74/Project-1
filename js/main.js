console.log(`Main JS File is Loaded`)

// All of my Arrays 
let ifEven = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
let ifOdd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
let ifRed = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
let ifBlack = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
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
let currentBet = enterbet.value
let currentSelection;
let currentWinner;
let resetGame = document.getElementById('resetwheel');
let spinBtn = document.getElementById('spinwheel');
let wheelResult = document.getElementById('wheel')

// Event Listeners
document.getElementById('placebet').addEventListener('click', adjustBalance)
document.querySelector('.angry-grid').addEventListener('click', handleClick);
resetGame.addEventListener('click', handleClick);
spinwheel.addEventListener('click', getNumber);
resetGame.addEventListener('click', reset);
document.getElementById('First-12').addEventListener('click', winFirst12)
document.getElementById('Second-12').addEventListener('click', winSecond12)
document.getElementById('Third-12').addEventListener('click', winThird12)
document.getElementById('Even-W').addEventListener('click', winEven)
document.getElementById('Odd-W').addEventListener('click', winOdd)
document.getElementById('Black-W').addEventListener('click', winBlack)
document.getElementById('Red-W').addEventListener('click', winRed)
document.getElementById('OneEight-W').addEventListener('click', winOneEighteen)
document.getElementById('NineThirty-W').addEventListener('click', winNineThirtySix)
document.getElementById('FirstRow').addEventListener('click', winFirstRow)
document.getElementById('SecondRow').addEventListener('click', winSecondRow)
document.getElementById('ThirdRow').addEventListener('click', winThirdRow)

init();
function init(){
    currentBalance = 5000;
    currentBet = enterbet.value;
    statusmessage.innerHTML = `Place your bets!!!`;
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
            statusmessage.innerHTML = `You're out of money yikes!`;
        }else if (parseInt(enterbet.value) > parseInt(currentBalance)){
            statusmessage.style.color = 'gold';
            statusmessage.style.backgroundColor = 'black'
            statusmessage.innerHTML = `You don't have enough money to bet $${enterbet.value} again, may the odds be in your favor!`
        } else{
            statusmessage.style.color = 'gold';
            statusmessage.style.backgroundColor = 'black'
            statusmessage.innerHTML = `You have bet $${enterbet.value}! Place your odds!`
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
    if (currentSelection.includes(wheelValue)){
        statusmessage.innerHTML = 'WINNER HAS BEEN DECLARED BRING THY MONEY!'
        let betVal = currentBet
        let winnings =  Number(betVal) + Number(currentBalance)
        balancemessage.innerHTML = winnings
    } else {
        statusmessage.innerHTML = `I'm sorry the odds did not suit you this time...`
    }
};
/////////////// WIN SCENARIOS/////////////
/////// 1-12 SCENARIOS/////////
function winFirst12(e){
currentSelection = ifFirst12};

function winSecond12(e){
currentSelection = ifSecond12};

function winThird12(e){
currentSelection = ifThird12};

////// EVEN / ODD SCENARIOS//////

function winEven(e){
currentSelection = ifEven};

function winOdd(e){
currentSelection = ifOdd};

////////// RED / BLACK SCENARIOS////////

function winRed(e){
currentSelection = ifRed};

function winBlack(e){
currentSelection = ifBlack};

/////// 1-18 19-36 SCENARIOS///////

function winNineThirtySix(e){
currentSelection = ifNinetThirty};

function winOneEighteen(e){
currentSelection = ifOnetEight};

////////// ROW SCENARIOS//////////

function winFirstRow(e){
currentSelection = ifFirstRow};
    
function winSecondRow(e){
currentSelection = ifSecondRow};

function winThirdRow(e){
currentSelection = ifThirdRow};

////////////// Numbers //////////

function reset(){
    init();
    currentSelection = undefined;
};

function render(){
    balancemessage.innerHTML = currentBalance
};
render()

function handleClick(e){
    console.log(e.target)
}

