const addOptionform = document.querySelector('#add-option-form');
const selectWinnerForm = document.querySelector('#select-winner-form');

addOptionform.addEventListener('submit', function(e) {
  e.preventDefault();

  let mealName = document.querySelector('#meal-name').value;
  let numPeople = document.querySelector('#people-count').value;

  console.log("Meal Name " + mealName);
  console.log("Num People " + numPeople);
})

selectWinnerForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let weightedChoice = document.querySelector('#weighted-choice').checked ? true : false;

  console.log("Weighted choice: " + weightedChoice);
})