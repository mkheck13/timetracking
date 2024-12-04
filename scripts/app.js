// Setting Variables for Buttons
let dailyBtn = document.getElementById("dailyBtn");
let weeklyBtn = document.getElementById("weeklyBtn");
let monthlyBtn = document.getElementById("monthlyBtn");

// Setting Variables for Data
let workCurrent = document.getElementById("workCurrent");
let workPrevious = document.getElementById("workPrevious"); 

let playCurrent = document.getElementById("playCurrent");
let playPrevious = document.getElementById("playPrevious");

let studyCurrent = document.getElementById("studyCurrent");
let studyPrevious = document.getElementById("studyPrevious");

let exerciseCurrent = document.getElementById("exerciseCurrent");
let exercisePrevious = document.getElementById("exercisePrevious");

let socialCurrent = document.getElementById("socialCurrent");
let socialPrevious = document.getElementById("socialPrevious");

let selfCareCurrent = document.getElementById("selfCareCurrent");
let selfCarePrevious = document.getElementById("selfCarePrevious");


// Fetching the data
async function getData() {
    const promise = await fetch("../data/data.json");
    const data = await promise.json();
    console.log(data);
}
getData();


// Setting The OnClicks Functions
// dailyBtn.addEventListener('click', function(){
//     getData().then( data =>{
//         console.log(data[0].timeframes.daily.current)

//         workCurrent.innerText = `${data[0].timeframes.daily.current}hrs`;
//         workPrevious.innerText = `Last Week - ${data[0].timeframes.daily.previous}hrs`;
//         playCurrent.innerText = `${data[1].timeframes.daily.current}hrs`;
//         playPrevious.innerText = `Last Week - ${data[1].timeframes.daily.previous}hrs`;
//         studyCurrent.innerText = `${data[2].timeframes.daily.current}hrs`;
//         studyPrevious.innerText = `Last Week - ${data[2].timeframes.daily.previous}hrs`;
//         exerciseCurrent.innerText = `${data[3].timeframes.daily.current}hrs`;
//         exercisePrevious.innerText = `Last Week - ${data[3].timeframes.daily.previous}hrs`;
//         socialCurrent.innerText = `${data[4].timeframes.daily.current}hrs`;
//         socialPrevious.innerText = `Last Week - ${data[4].timeframes.daily.previous}hrs`;
//         selfCareCurrent.innerText = `${data[5].timeframes.daily.current}hrs`;
//         selfCarePrevious.innerText = `Last Week - ${data[5].timeframes.daily.previous}hrs`;
//     });
// });


getData().then(data => {
    workCurrent.innerText =  data[0].timeframes.weekly.current + 'hrs';

})


