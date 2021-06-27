const addOptionform = document.querySelector('#add-option-form');
const selectWinnerForm = document.querySelector('#select-winner-form');

function MealChoice(mealName, numPeople) {
  this.mealName = mealName;
  this.numPeople = numPeople;
}

function selectWinnerWeighted(mealOptions) {
  let weightedOptions = [];

  /* Creates array with multiple entries for options with multiple people intrested, then
     proportionally increases likelyhood of choosing such options */
  for(let i = 0; i < mealOptions.length; i++) {
    for(let j = 0; j < mealOptions[i].numPeople; j++) {
      weightedOptions.push(mealOptions[i]);
    }
  }
  //Selects random winner from created array
  let diceRoll = Math.floor(Math.random() * weightedOptions.length);
  console.log(weightedOptions);
  return weightedOptions[diceRoll];
}

function selectWinnerRandom(mealOptions) {
  //Selects random winner from meal options array
  let diceRoll = Math.floor(Math.random() * mealOptions.length);

  return mealOptions[diceRoll];
}

function populateLists(initialize) {
  let mealOptions = [];

  //Grabs exisiting meal option values from local storage
  if(localStorage.getItem('mealOptions') !== null) {
    mealOptions = JSON.parse(localStorage.getItem('mealOptions'));
  }

  let leftOptions = document.querySelector('#left-meal-options');
  let rightOptions = document.querySelector('#right-meal-options');


  if(initialize) {
    /* If page is being loaded, creates list items for each meal option and alternate between 
       inserting them in left and right unorder lists */
    for(let i = 0; i < mealOptions.length; i++) {
      let option = document.createElement('li');
      option.className = "list-group-item";
      option.innerHTML = "<p>" + mealOptions[i].mealName + "   (" + mealOptions[i].numPeople + "&#x263B;)</p>";
      
      if(i % 2 === 0) {
        leftOptions.firstChild.nextSibling.appendChild(option)
      } else {
        rightOptions.firstChild.nextSibling.appendChild(option)
      }
    }
  } else {
    /* If a new meal option is submitted from the form, creates list item from it and 
       inserts it in the appropriate unordered list */
    let mealOption = new MealChoice(document.querySelector('#meal-name').value, document.querySelector('#people-count').value);
    mealOptions.push(mealOption);
    localStorage.setItem('mealOptions', JSON.stringify(mealOptions));

    let option = document.createElement('li');
    option.className = "list-group-item";
    option.innerHTML = "<p>" + mealOption.mealName + "   (" + mealOption.numPeople + "&#x263B;)</p>";
    
    if((mealOptions.length - 1) % 2 === 0) {
      leftOptions.firstChild.nextSibling.appendChild(option);
    } else {
      rightOptions.firstChild.nextSibling.appendChild(option);
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  populateLists(true);
});

addOptionform.addEventListener('submit', function(e) {
  e.preventDefault();

  populateLists(false);
})

selectWinnerForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let mealOptions = [];

  //Grabs exisiting meal option values from local storage
  if(localStorage.getItem('mealOptions') !== null) {
    mealOptions = JSON.parse(localStorage.getItem('mealOptions'));
  } else {
    console.log("No entries given...");
    return;
  }

  /* Determines what kind of result user wants and calculates meal option winner accordingly
     Creates a new element with result and start over button that replaces the existing main content. */
  let weightedChoice = document.querySelector('#weighted-choice').checked ? true : false;

  let winner;

  if(weightedChoice) {
    winner = selectWinnerWeighted(mealOptions);
  } else {
    winner = selectWinnerRandom(mealOptions);
  }

  let resultContent = document.createElement('div');
  let result = document.createElement('h3');
  result.innerText = winner.mealName;
  result.className = "meal-subcaption-flair";
  let resultCaption = document.createElement('h2');
  resultCaption.innerText = "Your Meal Choice is:";
  resultCaption.setAttribute('id', 'solver-result-header');

  let restartBtn = document.createElement('button');
  restartBtn.innerText = "Start Over";
  restartBtn.setAttribute('id', 'solver-restart-btn');
  restartBtn.addEventListener('click', function() { 
    window.location.reload() 
    localStorage.removeItem("mealOptions");
  })

  resultContent.appendChild(resultCaption);
  resultContent.appendChild(result);
  resultContent.appendChild(restartBtn);

  let mainContainer = document.querySelector('#main-container');
  mainContainer.parentNode.replaceChild(resultContent, mainContainer);

  result.parentNode.appendChild(restartBtn);

  //Updates times used value upon completion 
  if(!localStorage.getItem("timesSolverUsed")) {
    localStorage.setItem("timesSolverUsed", 1);
  } else {
    let timesUsed = parseInt(localStorage.getItem("timesSolverUsed")) + 1;
    localStorage.setItem("timesSolverUsed", timesUsed.toString());
    console.log("User has used decider " + localStorage.getItem("timesSolverUsed") + "times");
  }
})