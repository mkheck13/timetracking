// Linking JSON Data
const getData = '../data/data.json';

// Setting variables
let dailyBtn = document.getElementById("dailyBtn");
let weeklyBtn = document.getElementById("weeklyBtn");
let monthlyBtn = document.getElementById("monthlyBtn");
let cardContainer = document.querySelector(".card-container");

// Fetching the data
fetch(getData)
.then(response => response.json())
.then(data => displayData(data))
console.log(getData);

let displayData = (data) =>{
    window.addEventListener('load', loadDailyData(data));

    dailyBtn.addEventListener('click', () => {
        cardContainer.innerHTML = '';
        loadDailyData(data);
    });

    // weeklyBtn.addEventListener('click', () => {
    //     cardContainer.innerHTML = '';
    //     loadWeeklyData(data);
        
    // });

    // monthlyBtn.addEventListener('click', () => {
    //     cardContainer.innerHTML = '';
    //     loadMonthlyData(data);
    // });
};

let loadDailyData = (data) =>{
    data.map(element =>{
        cardContainer.innerHTML += `
        `
    })
}