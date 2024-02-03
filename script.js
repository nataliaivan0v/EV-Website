var infoList = [
  "A typical passenger vehicle emits about 4.6 metric tons of carbon dioxide annually",
  "Cars and trucks account for nearly 1/5th of all U.S. emissions",
  "The average American spends about $3,000 on gas every year",
  "Hydrocarbons, particulate matter, carbon monoxide, and other car pollutants can harm human health" 
];

var info = document.getElementById ("info");
var factsButton = document.getElementById ("factsButton");
var count = 0;

function displayInfo () {
  info.innerHTML = infoList[count];
  count++;
  if (count == infoList.length) {
    count = 0;
  }
}

factsButton.addEventListener ("click", displayInfo);

info.innerHTML = infoList[count];