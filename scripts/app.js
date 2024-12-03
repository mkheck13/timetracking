

dailyBtn
weeklyBtn
monthlyBtn

fetch("../data/data.json")
.then(response => response.json())
.then(data => loadData(data))