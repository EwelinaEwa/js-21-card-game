const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
const colors = [" ♥", " ♦", " ♠", " ♣"]

// Values of the cards

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

// Draw a random car

function drawRandomCard() {
    let randomCard = cards[Math.floor(Math.random() * cards.length)];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let drawnCard = randomCard+randomColor;
    return drawnCard;
}

// Dealer cards & score

function dealer() {
    let computerCard = drawRandomCard();
    let computerCards = [computerCard];
    let dealerScore = value(computerCard);
    while (dealerScore <=18) {
        computerCard = drawRandomCard();
        computerCards.push(computerCard);
        let newCard = value(computerCard)
        dealerScore += newCard
    }
    document.getElementById("dealerDraw").innerHTML = computerCards;
    document.getElementById("dealerCount").innerHTML = dealerScore;

    return dealerScore
}

// Initial player cards

let drawnCard1 = drawRandomCard()
let drawnCard2 = drawRandomCard()
let userCards = [drawnCard1, drawnCard2]
document.getElementById("firstDraw").innerHTML = userCards;

// Initial player score

let score = value(drawnCard1)+value(drawnCard2)
document.getElementById("scoreCount").innerHTML = score;

result (score, dealer())

if (score === 21) {
    document.getElementById("yesHide").style.visibility="visible"
    document.getElementById("noHide").style.visibility="visible"
    document.getElementById("result").style.visibility="visible"
}
else if (score > 21) {
    document.getElementById("yesHide").style.visibility = "visible"
    document.getElementById("noHide").style.visibility = "visible"
    document.getElementById("result").style.visibility = "visible"
}


// Result of the game

function result(score, dealerScore) {
    if (score === 21) {
        document.getElementById("result").innerHTML = "You have 21! You win!"
        document.getElementById("result").style.backgroundColor = "#468966"
    }
    else if (score > 21) {
        document.getElementById("result").innerHTML = "You are over 21! It's a bust!"
        document.getElementById("result").style.backgroundColor = "#E57B5C"
    }
    else if (dealerScore === 21) {
        document.getElementById("result").innerHTML = "Dealer has 21! You lose!"
        document.getElementById("result").style.backgroundColor = "#E57B5C"
    }
    else if (dealerScore > 21) {
        document.getElementById("result").innerHTML = "Dealer is over 21! You win!"
        document.getElementById("result").style.backgroundColor = "#468966"
    }
    else if (score === dealerScore) {
        document.getElementById("result").innerHTML = "It's a draw!"
        document.getElementById("result").style.backgroundColor = "#FFF0A5"
    }
    else if (score > dealerScore) {
        document.getElementById("result").innerHTML = "You are closer to 21! You win!"
        document.getElementById("result").style.backgroundColor = "#468966"
    }
    else if (score < dealerScore) {
        document.getElementById("result").innerHTML = "Dealer is closer to 21! You loose!"
        document.getElementById("result").style.backgroundColor = "#E57B5C"
    }
    else {
        document.getElementById("result").innerHTML = "Something is seriously wrong"
        document.getElementById("result").style.backgroundColor = "#CA005E"
    }
}

// "No" button

document.getElementById("no").addEventListener("click", function () {
    result(score, dealer())
    document.getElementById("noHide").style.visibility="visible"
    document.getElementById("result").style.visibility="visible"
})

// "Yes" button

document.getElementById("yes").addEventListener("click", function() {
    let nextDrawnCard = drawRandomCard();
    userCards.push(nextDrawnCard)
    document.getElementById("nextCard").innerHTML = nextDrawnCard;
    document.getElementById("yesHide").style.visibility="visible"
    document.getElementById("firstDraw").innerHTML = userCards;
    let nextCardValue = value(nextDrawnCard);
    score += nextCardValue
    document.getElementById("scoreCount").innerHTML = score;
    if (score >= 21) {
        result(score, dealer())
        document.getElementById("noHide").style.visibility="visible"
        document.getElementById("result").style.visibility="visible"
    }
    else {
        result(score, dealer())
    }
})


