const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
const colors = [" ♥", " ♦", " ♠", " ♣"]

function drawRandomCard() {
    let randomCard = cards[Math.floor(Math.random() * cards.length)];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let drawnCard = randomCard+randomColor;
    return drawnCard;
}

let drawnCard1 = drawRandomCard()
let drawnCard2 = drawRandomCard()

let userCards = [drawnCard1, drawnCard2]

document.getElementById("firstDraw").innerHTML = userCards;

function value (card) {
    if (card[0] === "1") {
        let cardValue = 10
        return cardValue
    }
    else if (card[0] === "J" || card[0] === "Q" || card[0] === "K") {
        let cardValue = 10
        return cardValue
    }
    else if (card[0] === "A") {
        let cardValue = 11
        return cardValue
    }
    else {
        let cardValue = Number(card[0])
        return cardValue
    }
}

let score = value(drawnCard1)+value(drawnCard2)
console.log(score)

document.getElementById("scoreCount").innerHTML = score;

let computerCard1 = drawRandomCard();
let computerCard2 = drawRandomCard();
let computerCards = [computerCard1, computerCard2];
document.getElementById("dealerDraw").innerHTML = computerCards;
let dealerScore = value(computerCard1)+value(computerCard2);
console.log(dealerScore)
document.getElementById("dealerCount").innerHTML = dealerScore;


function result(score, dealerScore) {
    if (score === 21) {
        document.getElementById("result").innerHTML = "You have 21! You win!"
    }
    else if (score > 21) {
        document.getElementById("result").innerHTML = "You are over 21! It's a bust!"
    }
    else if (score === dealerScore) {
        document.getElementById("result").innerHTML = "It's a draw!"
    }
    else if (score > dealerScore) {
        document.getElementById("result").innerHTML = "You are closer to 21! You win!"
    }
    else if (score < dealerScore) {
        document.getElementById("result").innerHTML = "Dealer is closer to 21! You loose!"
    }
    else {
        document.getElementById("result").innerHTML = "Test"

    }
}

result(score, dealerScore)


