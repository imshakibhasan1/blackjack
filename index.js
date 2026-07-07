let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
// store messageel paragraph in a variable
let messageEl = document.getElementById("message-el");
// store sum value in a variable
let sumEl = document.querySelector("#sum-el");
// store card value in a variable
let cardEl = document.getElementById("card-el");
let player ={
  name: "YOU WIN",
  chip: 145
}

let plearEl = document.getElementById("player-el")
    



function getRandomCard(){

  let randomNum = Math.floor(Math.random() * 13) +1
  if (randomNum > 10){
    return 10;
  }else if (randomNum === 1) {
    return 11;
  }else {
    return randomNum;
  }
}

function startGame (){
  renderGame()
}

function renderGame() {
  cardEl.textContent = "Cards: " 
  for (let i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] + " "
  }
    sumEl.textContent = sum
  if (sum <= 20) {
    message = "Do you want to draw a new card";
  } else if (sum === 21) {
    message = "you got the jackport";
    plearEl.textContent = player.name + ": $" + player.chip
    hasBlackJack = true;
  } else {
    message = "you are logging out of the game";
    plearEl.textContent = "Reload for Start Game Again"
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(message);
}

function newcard(){
  if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
  sum = sum + card;
  cards.push(card);
  renderGame()
  console.log(cards);
  }
  

}






// console.log(hasBlackJack);
// console.log(isAlive);
// console.log(message);
