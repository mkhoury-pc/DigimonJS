var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
  
fetch("https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

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