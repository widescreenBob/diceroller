"use strict";

var die = document.getElementsByClassName('die-type');
var currentDie = document.getElementById('current-die');
var currentResult = document.getElementById('current-result');
var pastResults = document.getElementById('past-results');
var clearResults = document.getElementById('clear');
var showLastRoll = document.getElementsByClassName('display-current-results')[0];
var resultsArray = new Array(0);
var previousDie;

// This adds the dice rolled info to the page.
var addDieType = function addDieType() {
  var attr = this.getAttribute("data-die");
  var currentDieValue = attr;
  var result = Math.floor(Math.random() * currentDieValue) + 1;
  currentDie.innerHTML = currentDieValue;
  currentResult.innerHTML = result;
  if(result == 1) {
    showLastRoll.classList.add('rolled-one');
  }
  else {
    showLastRoll.classList.remove('rolled-one');
  }
  resultsArray.push([currentDieValue, result]);
  pastResults.innerHTML = '<ul class="result-array">' + resultsArray.map(function (dice) {
    return '<li><span class="result-type visually-hidden"> Using a d' + dice[0] + ' you rolled a</span> ' + '<span class="result-value result-type' + dice[0] +'">' + dice[1] + '</span></li> ';
  }).join('') + '</ul>';

  if (resultsArray.length === 1) {
    showLastRoll.classList.toggle('js-hide');
  }
};

// Clears the info.
var showYourRoll = function showYourRoll() {
  // Zero out the data, and hide the rolled display.
  resultsArray = new Array(0);
  pastResults.innerHTML = '';
  currentResult.innerHTML = '';
  currentDie.innerHTML = '';
  if(resultsArray.length <= 0){
    showLastRoll.classList.toggle('js-hide');
  }
};

// Make each button a clickable event
for (var i = 0; i < die.length; i++) {
  die[i].addEventListener('click', addDieType, false);
}

// Make the clear button call it's function.
clearResults.addEventListener("click", showYourRoll, false);
