
const mealDecider = document.querySelector('#main-container');
const contents = document.querySelector('#main-content');

//initialize question choice figures
const bfastImg = makeImage("resources/imgs/breakfast.png", "breakfast");
const bfFig = makeFigure(bfastImg, "Breakfast");
const lunchImg = makeImage("resources/imgs/lunch.png", "lunch");
const lunchFig = makeFigure(lunchImg, "Lunch");
const dinImg = makeImage("resources/imgs/dinner.png", "dinner");
const dinFig = makeFigure(dinImg, "Dinner");
const vegImg = makeImage("resources/imgs/vegitarian.png", "vegitarian");
const vegFig = makeFigure(vegImg, "Yes");
const meatImg = makeImage("resources/imgs/meat.png", "meat");
const meatFig = makeFigure(meatImg, "No");
const hotImg = makeImage("resources/imgs/hot.png", "hot");
const hotFig = makeFigure(hotImg, "Yes");
const notHotImg = makeImage("resources/imgs/not_hot.png", "not hot");
const notHotFig = makeFigure(notHotImg, "No");
const empanadaImg = makeImage("resources/imgs/empanada.png", "empanada");
const empanadaFig = makeFigure(empanadaImg, "South America");
const pastaImg = makeImage("resources/imgs/pasta.png", "pasta");
const pastaFig = makeFigure(pastaImg, "Europe");
const sushiImg = makeImage("resources/imgs/sushi.png", "hot");
const sushiFig = makeFigure(sushiImg, "Asia");
const hotdogImg = makeImage("resources/imgs/hotdog.png", "hotdog");
const hotdogFig = makeFigure(hotdogImg, "North America");

function makeImage(src, alt) {
  let img = document.createElement('img');
  img.className = "answer-img";
  img.src = src;
  img.alt = alt;
  return img;
}

function makeFigure(img, caption) {
  const fig = document.createElement("figure");
  fig.className = "answer-fig";
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = caption;
  figcaption.className = "answer-caption";
  
  fig.appendChild(img);
  fig.appendChild(figcaption);

  return fig;
}

function makeQuestion(question, answers) {
  document.querySelector('.card-title').innerText = question;

  const choices = document.createElement('div');
  choices.className = "question-choices";

  for(let answer of answers) {
    choices.appendChild(answer);
  }

  return choices;
}

function getResult() {
  /* Upon result button being clicked determines a random meal based of of user's answer to each question
     Creates a new element with result and start over button that replaces the existing main content. */
  let endAnimationImg = executeEndAnimation();

  endAnimationImg.addEventListener('animationend', function() {
    document.querySelector('.card-title').innerText = "Your meal choice is:";

    let result = document.createElement('h3');
 
    result.innerText = chooseFoodItem();
    result.className = "meal-subcaption-flair";
    let restartBtn = document.createElement('button');
    restartBtn.innerText = "Start Over";
    restartBtn.addEventListener('click', function() {window.location.reload();})

    endAnimationImg.parentNode.replaceChild(result, endAnimationImg);

    result.parentNode.appendChild(restartBtn);
  });

  //Updates times used value upon completion 
  if(!localStorage.getItem("timesUsed")) {
    localStorage.setItem("timesUsed", 1);
  } else {
    let timesUsed = parseInt(localStorage.getItem("timesUsed")) + 1;
    localStorage.setItem("timesUsed", timesUsed.toString());
    console.log("User has used decider " + localStorage.getItem("timesUsed") + "times");
  }
}

function executeEndAnimation() {
  let endAnimationImg = document.createElement('img');
  endAnimationImg.setAttribute('id', 'end-pizza-icon');
  endAnimationImg.alt = 'pizza';
  endAnimationImg.src = 'resources/imgs/pizza.png'
  
  let choices = document.querySelector('.question-choices');
  choices.parentNode.replaceChild(endAnimationImg, choices);

  document.querySelector('.card-title').innerText = "Thinking of a meal that fits those criteria...";
  return endAnimationImg;
}

function chooseFoodItem() {
  //Parses meal options data to find possible matches that match that the values user entered and stores matches in an array
  const matches = foodChoices.filter((choice) => {
    let match = true;
    for(let i = 0; i < localStorage.length; i++) {
      switch(localStorage.key(i)) {
        case "type":
          if(localStorage.getItem(localStorage.key(i)) !== choice.type) {
            match = false; 
          }
          break;
        case "vegitarian":
          if(localStorage.getItem(localStorage.key(i)) !== choice.vegitarian.toString()) {
            match = false; 
          }
          break;
        case "area":
          if(localStorage.getItem(localStorage.key(i)) !== choice.area) {
            match = false; 
          }
          break;
        case "hot":
          if(localStorage.getItem(localStorage.key(i)) !== choice.hot.toString()) {
            match = false; 
          }
          break;
        default:
          break;
      }
    }

    if(match === true) {
      return choice;
    }
  })

  if(matches[0] === undefined) {
    return "We didn't find any meal that matched your selections..."
  }

  console.log(matches.length);
  return matches[(Math.floor(Math.random() * matches.length))].food;
}

function executeFigClick(key, value, choice, question = "", executeFigClick = false, figures = []) {
  console.log("User chose " + choice);
  localStorage.setItem(key, value)

  //Determines what set of figures are to replace existing main content after a user choice is made
  if(executeFigClick) {
    let choices = document.querySelector('.question-choices');
    choices.parentNode.replaceChild(makeQuestion(question, figures), choices);
  } else {
    getResult();
  }
}

function clearStorage() {
  const items = ["vegitarian", "hot", "area", "type"]
  for(item of items) {
    localStorage.removeItem(item);
  }
}

document.querySelector('#pizza-btn').addEventListener('click', function() {
  //Initializes app and replaces main content with first question + answers
  clearStorage();
  console.log(localStorage)

  mealDecider.replaceChild(makeQuestion("What Meal of the day will you be eating?", [bfFig, lunchFig, dinFig]), contents);
})

//Add event listeners for every meal option choice figure
bfFig.addEventListener('click', function() {executeFigClick("type", "Breakfast", "Breakfast", "Are you looking for vegitarian options?", true, [vegFig, meatFig])})
lunchFig.addEventListener('click', function() {executeFigClick("type", "Lunch", "Lunch", "Are you looking for vegitarian options?", true, [vegFig, meatFig])})
dinFig.addEventListener('click', function() {executeFigClick("type", "Dinner", "Dinner", "Are you looking for vegitarian options?", true, [vegFig, meatFig])})
vegFig.addEventListener('click', function() {executeFigClick("vegitarian", true, "vegitarian", "Do you want a hot meal", true, [hotFig, notHotFig])})
meatFig.addEventListener('click', function() {executeFigClick("vegitarian", false, "not vegitarian", "Do you want a hot meal", true, [hotFig, notHotFig])})
hotFig.addEventListener('click', function() {executeFigClick("hot", true, "hot", "Where would you want to have food from?", true, [hotdogFig, empanadaFig, sushiFig, pastaFig])})
notHotFig.addEventListener('click', function() {executeFigClick("hot", false, "not hot", "Where would you want to have food from?", true, [hotdogFig, empanadaFig, sushiFig, pastaFig])})
hotdogFig.addEventListener('click', function() {executeFigClick("area", "NAmerica", "NAmerica", "", false)})
empanadaFig.addEventListener('click', function() {executeFigClick("area", "SAmerica", "SAmerica")})
sushiFig.addEventListener('click', function() {executeFigClick("area", "Asia", "Asia")})
pastaFig.addEventListener('click', function() {executeFigClick("area", "Europe", "Europe")})