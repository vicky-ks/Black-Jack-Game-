let messageEl = document.getElementById("mess-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
let pEl = document.getElementById("p-el");

let message = "";
let sum = 0;
let cards = [];
let isAlive = false;
let blackjack = false;
let cash = 0;
let name = "";

function start() {
  cash = 35;
  name = prompt("Your name?");
  if (name === null || name === "") name = "Vicky";
  pEl.textContent += name + "  Cash: $" + cash;
  //   cards = [];
  isAlive = true;
  blackjack = false;
  let firstCard = getrandom();
  let secondCard = getrandom();
  //   cards.push(firstCard);
  //   cards.push(secondCard);
  cards = [firstCard, secondCard];
  cash -= 5;
  sum = firstCard + secondCard;
  render();
}

function getrandom() {
  let no = Math.floor(Math.random() * 13) + 1;
  if (no > 10) return 10;
  else if (no === 1) return 11;
  return no;
}
function render() {
  dis();
  if (!isAlive) return;
  if (sum <= 50) {
    // && cash > 0
    message = "press for new card";
  } else if (sum <= 55) {
    //&& cash >= 0
    message = "Congrats! You won";
    blackjack = true;
  } else {
    //if (sum > 55 || cash <= 0)
    message = "Sorry, You're out.";
    isAlive = false;
  }
  sumEl.textContent = "Sum : " + sum;
  messageEl.textContent = message;
}

function newc() {
  if (isAlive && !blackjack) {
    let newCard = getrandom();
    sum += newCard;
    cards.push(newCard);
  }

  render();
}

function dis() {
  if (isAlive && !blackjack) cash -= 5;
  if (cash < 0) {
    isAlive = false;
    messageEl.textContent = "Money ran out!";
    return;
  }
  cardEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  pEl.textContent = "Name: " + name + "  Cash: $" + cash;
}
