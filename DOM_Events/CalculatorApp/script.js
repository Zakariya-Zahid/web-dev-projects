// Grab all the buttons and output field

let zerobtn = document.getElementById("0");
let onebtn = document.getElementById("1");
let twobtn = document.getElementById("2");
let threebtn = document.getElementById("3");
let fourbtn = document.getElementById("4");
let fivebtn = document.getElementById("5");
let sixbtn = document.getElementById("6");
let sevenbtn = document.getElementById("7");
let eightbtn = document.getElementById("8");
let ninebtn = document.getElementById("9");
let plusbtn = document.getElementById("plus");
let minusbtn = document.getElementById("minus");
let dividebtn = document.getElementById("divide");
let multiplybtn = document.getElementById("multiply");
let decimalbtn = document.getElementById("decimal");
let delbtn = document.getElementById("del");
let resetbtn = document.getElementById("reset");
let equalbtn = document.getElementById("equal");
let displayField = document.getElementById("display");
let hasError = false; // Track if an error is shown
let showHistory = document.getElementById("history_btn");
let historyView = document.getElementById("history_view");
displayEmpty();

let historyCalc = JSON.parse(localStorage.getItem('history')) || []
historyCalc.forEach((h) => renderHistory(h));

zerobtn.addEventListener("click", function () {
  displayField.textContent += 0;
});
onebtn.addEventListener("click", function () {
  displayField.textContent += 1;
});
twobtn.addEventListener("click", function () {
  displayField.textContent += 2;
});
threebtn.addEventListener("click", function () {
  displayField.textContent += 3;
});
fourbtn.addEventListener("click", function () {
  displayField.textContent += 4;
});
fivebtn.addEventListener("click", function () {
  displayField.textContent += 5;
});
sixbtn.addEventListener("click", function () {
  displayField.textContent += 6;
});
sevenbtn.addEventListener("click", function () {
  displayField.textContent += 7;
});
eightbtn.addEventListener("click", function () {
  displayField.textContent += 8;
});
ninebtn.addEventListener("click", function () {
  displayField.textContent += 9;
});
plusbtn.addEventListener("click", function () {
  displayField.textContent += "+";
});
minusbtn.addEventListener("click", function () {
  displayField.textContent += "-";
});
multiplybtn.addEventListener("click", function () {
  displayField.textContent += "*";
});
dividebtn.addEventListener("click", function () {
  displayField.textContent += "/";
});
decimalbtn.addEventListener("click", function () {
  //edge case if decimal is added first without number
  displayField.textContent += ".0";
});
delbtn.addEventListener("click", function () {
  if (hasError) return;
  let lastidx = displayField.textContent.length - 1;
  displayField.textContent = displayField.textContent.slice(0, lastidx);
});
resetbtn.addEventListener("click", () => {
  reset();
});

equalbtn.addEventListener("click", () => {
 let HistoryCreated = {
    expression: `${displayField.textContent}: ${eval(displayField.textContent)}`
 }
 historyCalc.push(HistoryCreated)
 saveHistory();
 renderHistory(HistoryCreated);
  if (displayField.textContent === "") return;
  if (
    displayField.textContent.startsWith("*") ||
    displayField.textContent.startsWith("/")
  ) {
    displayField.textContent = Error(`Not allowed`);
    hasError = true;
  }
  displayField.innerHTML = `${eval(displayField.textContent)}`;
});
showHistory.addEventListener('click',function(){
    historyView.classList.toggle('hidden')
})
function renderHistory(h) {
    let addHistory = document.createElement("p");
    addHistory.textContent = `${h.expression}`;
    historyView.appendChild(addHistory);
}

function saveHistory(){
    localStorage.setItem('history',JSON.stringify(historyCalc))
}

//helper functions
function reset() {
  displayField.textContent = "";
  hasError = false;
}
function displayEmpty() {
  displayField.textContent = "";
}
// Edge cases to resolve:
/*
Multiple operators (12++5)

[done]Empty equals

[done]Divide by zero (10/0) -> already give Infinity

[done]Starting with an operator for divide or multiply()

Double decimal (3.1.4)
*/
