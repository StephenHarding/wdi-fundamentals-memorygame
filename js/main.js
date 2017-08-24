console.log("Up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds"
}]
var cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!")
		}
		else {
			alert("Sorry. try again.")
		}	
	}
}

function flipCard(cardId) {
	 var cardId = this.getAttribute(`data-id`)
	this.setAttribute('src', cards[cardId].cardImages)
	console.log(`User flipped ${cards[cardId].rank}`)
	console.log(cards[cardId].suit)
	console.log(cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank)
	checkForMatch()
}
var newItem
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		newItem = document.createElement('img')
		newItem.setAttribute('src', 'images/back.png')
		newItem.setAttribute('data-id', [i])
		newItem.addEventListener(`click`, flipCard())
		document.getElementById('game-board').appendChild(newItem)
	}
}
createBoard()