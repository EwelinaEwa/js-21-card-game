const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
const colors = [" hearts", " diamonds", " spades", " clubs"]

function drawRandomCard() {
    let randomCard = cards[Math.floor(Math.random() * cards.length)];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let drawnCard = randomCard+randomColor;
    return drawnCard
}

let drawnCard1 = drawRandomCard()
let drawnCard2 = drawRandomCard()

console.log(drawnCard1)
console.log(drawnCard2)