const startButton = document.querySelector('#pizza-btn');
const mealDecider = document.querySelector('#main-container');
const contents = document.querySelector('#main-content');

const bfastImg =  makeImage("resources/imgs/breakfast.png", "breakfast");
const bfFig = makeFigure(bfastImg, "Breakfast");

const lunchImg =  makeImage("resources/imgs/lunch.png", "lunch");
const lunchFig = makeFigure(lunchImg, "Lunch");

const dinImg =  makeImage("resources/imgs/dinner.png", "dinner");
const dinFig = makeFigure(dinImg, "Dinner");

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
  const q = document.createElement('h2');
  q.textContent = question;

  const choices = document.createElement('div');
  choices.className = "question-choices";
  choices.appendChild(q);

  for(let answer of answers) {
    choices.appendChild(answer);
  }

  return choices;
}

startButton.addEventListener('click', function () {
  sessionStorage.clear();

  const q = "What meal of the day are we talking about?"
  mealDecider.replaceChild(makeQuestion(q, [bfFig, lunchFig, dinFig]), contents);
})

bfFig.addEventListener('click', function() {
  console.log("User chose breakfast")
  sessionStorage.setItem('breakfast', true);
})

lunchFig.addEventListener('click', function() {
  console.log("User chose lunch")
  sessionStorage.setItem('lunch', true);
})

dinFig.addEventListener('click', function() {
  console.log("User chose dinner");
  sessionStorage.setItem('dinner', true);
})
