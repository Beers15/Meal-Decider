const addOptionform = document.querySelector('#add-option-form');
const selectWinnerForm = document.querySelector('#select-winner-form');

function MealChoice(mealName, numPeople) {
  this.mealName = mealName;
  this.numPeople = numPeople;
}

function selectWinner() {

}


function selectWinnerRandom(mealOptions) {
  let diceRoll = Math.floor(Math.random() * mealOptions.length);

  return mealOptions[diceRoll];
}

document.addEventListener("DOMContentLoaded", function() {
  let mealOptions = [];

  if(localStorage.getItem('mealOptions') !== null) {
    mealOptions = JSON.parse(localStorage.getItem('mealOptions'));
  }

  let leftOptions = document.querySelector('#left-meal-options');
  let rightOptions = document.querySelector('#right-meal-options');

  for(let i = 0; i < mealOptions.length; i++) {
    let option = document.createElement('li');
    option.className = "list-group-item";
    option.innerText = mealOptions[i].mealName;
    
    if(i % 2 === 0) {
      leftOptions.firstChild.nextSibling.appendChild(option)
    } 
    else {
      rightOptions.firstChild.nextSibling.appendChild(option)
    }
  }
});

addOptionform.addEventListener('submit', function(e) {
  e.preventDefault();

  let mealOptions = [];

  if(localStorage.getItem('mealOptions') !== null) {
    mealOptions = JSON.parse(localStorage.getItem('mealOptions'));
  }

  let mealOption = new MealChoice(document.querySelector('#meal-name').value, document.querySelector('#people-count').value);
  mealOptions.push(mealOption);
  localStorage.setItem('mealOptions', JSON.stringify(mealOptions));

  let leftOptions = document.querySelector('#left-meal-options');
  let rightOptions = document.querySelector('#right-meal-options');

  let option = document.createElement('li');
  option.className = "list-group-item";
  option.innerText = mealOption.mealName;
  
  if((mealOptions.length - 1) % 2 === 0) {
    leftOptions.firstChild.nextSibling.appendChild(option)
  } else {
    rightOptions.firstChild.nextSibling.appendChild(option)
  }
})

selectWinnerForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let mealOptions = [];

  if(localStorage.getItem('mealOptions') !== null) {
    mealOptions = JSON.parse(localStorage.getItem('mealOptions'));
  }

  let weightedChoice = document.querySelector('#weighted-choice').checked ? true : false;

  let winner;

  if(weightedChoice) {
    //winner = selectWinner(mealOption);
  } else {
    winner = selectWinnerRandom(mealOptions);
  }

  let result = document.createElement('h3');
  result.innerText = winner.mealName;

  let restartBtn = document.createElement('button');
  restartBtn.innerText = "Start Over";
  restartBtn.addEventListener('click', function (){window.location.reload()})

  let mainContainer = document.querySelector('#main-container');
  mainContainer.parentNode.replaceChild(result, mainContainer);

  result.parentNode.appendChild(restartBtn);
})