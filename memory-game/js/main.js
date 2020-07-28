const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];
const cardOne = cards[3];
cardsInPlay.push(cardOne);
const cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!")
	} else
	alert("Sorry, try again.")
}
