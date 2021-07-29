//Fetch from Digimon TCG API
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};



function cardSearch() {
  var card = document.getElementById('card-input').value;
  fetch(`https://digimoncard.io/api-public/search.php?n=${card}`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('error', error));
}

//Countdown function
const countdown = () => {
  const releaseDate = new Date("August 6, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = releaseDate - now;

  //Time conversions
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const displayDays = Math.floor(difference / days);
  const displayHours = Math.floor((difference % days) / hours);
  const displayMinutes = Math.floor((difference % hours) / minutes);
  const displaySeconds = Math.floor((difference % minutes) / seconds);

  document.querySelector(".days").innerText = displayDays;
  document.querySelector(".hours").innerText = displayHours;
  document.querySelector(".minutes").innerText = displayMinutes;
  document.querySelector(".seconds").innerText = displaySeconds;
};

setInterval(countdown, 1000);

//Deck Counter Function
var deckComp = 55;

function deckCalc(deck, digitama) {
  var deck = parseInt(document.getElementById('deck').value);
  var digitama = parseInt(document.getElementById('digitama').value);
  var deckDiff = deckComp - (deck + digitama);
  
  if (deckDiff >= 1) {
    document.querySelector(".card-count").innerText = `You  need ${deckDiff} more cards!`;
  } else if (deckDiff < 0) {
    deckDiff = Math.abs(deckDiff);
    document.querySelector(".card-count").innerText = `You need ${deckDiff} less cards!`;
  } else if (deckDiff === 0) {
    document.querySelector(".card-count").innerText = `Your deck is ready to play!  Good luck!`;
  } else {
    document.querySelector(".card-count").innerText = 'ERROR!  Enter whole numbers only.';
  }  
}