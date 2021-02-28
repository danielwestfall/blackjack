let dealerHand = [];
let playerHand = [];
let decks = [];
let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let suites = ['H', 'S', 'C', 'D'];
let cutCard;
let playerChips = 100;
let playerWager = 5;
const dcOne = document.getElementById('showCard');
const dcTwo = document.getElementById('hideCard');
const pcOne = document.getElementById('oneCard');
const pcTwo = document.getElementById('twoCard');

function playerBankRoll(win){
    document.getElementById("playerBank").innerHTML =
        "You have " + playerChips + "! Good Luck!";
    if (win === true){ 
        playerChips = playerChips + playerWager;
    } else {
        playerChips = playerChips - playerWager;
    }
}

function createDecks(){
    // 288 card deck - 6 decks

    let j = 0;
do {
    let i = 0;
        do {
            decks.push(cards[i]+suites[0]);
            decks.push(cards[i]+suites[1]);
            decks.push(cards[i]+suites[2]);
            decks.push(cards[i]+suites[3]);
            i += 1;
        } while (i < 13);
    j += 1;
} while (j < 6);

};

//Unbiased shuffle algorithm by Fisher-Yates (aka Knuth) Shuffle.
//See https://github.com/coolaj86/knuth-shuffle

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

      // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
        }
    return array;
    }

function cutCards (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    cutCard =  Math.floor(Math.random() * (max - min) + min);
    cutCard = 312 - cutCard; 
    decks.splice(cutCard, 0 , 'CC');
    
    }

function placeBets(){
    var playerBet = prompt("Please enter your wager", "50");
    if (playerBet != null) {
        document.getElementById("playerWager").innerHTML =
        "You bet " + playerBet + "! Good Luck!";
        playerWager = parseInt(playerBet);
    }

}

function dealCards(){
    //deal initial cards

    playerHand.push(decks.shift());
    dealerHand.push(decks.shift());
    playerHand.push(decks.shift());
    dealerHand.push(decks.shift());

    console.log(dealerHand);
    console.log(playerHand);
    
    pcOne.src = 'images/' + playerHand[0] + '.svg';
    pcTwo.src = 'images/' + playerHand[1] + '.svg';
    dcOne.src = 'images/' + dealerHand[0] + '.svg';
    dcTwo.src = 'images/cardBack.svg';

};
    placeBets();
    createDecks();
    shuffle(decks);
    cutCards(26, 78);
    dealCards();


function offerInsurance(){
    if (dealerHand[0] === "AD" || dealerHand[0] === "AH" || dealerHand[0] === "AS" || dealerHand[0] === "AC" ){
        alert('Insurance?');}
    
};

offerInsurance(); 

function calculateTotals(){
    dealerHand.forEach((val, index) => dealerHand[index] = val.slice(0, -1));
    console.log(dealerHand);
    
    playerHand.forEach((val, index) => playerHand[index] = val.slice(0, -1));
    console.log(playerHand);

    dealerHand.forEach(function(item, i) { if (item === "J" || item === "Q" || item === "K") dealerHand[i] = "10"; });
    console.log(dealerHand);

    playerHand.forEach(function(item, i) { if (item === "J" || item === "Q" || item === "K") playerHand[i] = "10"; });
    console.log(playerHand);

    dealerHand.forEach(function(item, i) { if (item === "A") dealerHand[i] = "11"; });
    console.log(dealerHand);

    playerHand.forEach(function(item, i) { if (item === "A") playerHand[i] = "11"; });
    console.log(playerHand);

    playerHandValue = 0;
    dealerHandValue = 0;

    dealerHand.forEach(element => {dealerHandValue = dealerHandValue + parseInt(element); return playerHandValue;});
    playerHand.forEach(element => {playerHandValue = playerHandValue + parseInt(element); return playerHandValue;});    
    
    console.log(dealerHandValue);
    console.log(playerHandValue);


    document.getElementById("gameInfo").innerHTML = "You have " + playerHandValue + "! The dealer has " + dealerHandValue + "!";
    
};

calculateTotals();
/*

function threeCardBonusCheck(){};

function playerChoice(){



};

function houseDraw(){
    //deal to house rules


};

function compareHands(){
    //compare dealt hands


};




*/