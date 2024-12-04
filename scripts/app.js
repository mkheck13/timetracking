

// Setting variables
let dailyBtn = document.getElementById("dailyBtn");
let weeklyBtn = document.getElementById("weeklyBtn");
let monthlyBtn = document.getElementById("monthlyBtn");

// Fetching the data
function getData() {
    fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data;
        })
};
getData();




