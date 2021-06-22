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
const empanadaFig = makeFigure(empanadaImg, "South American");
const pastaImg = makeImage("resources/imgs/pasta.png", "pasta");
const pastaFig = makeFigure(pastaImg, "European");
const sushiImg = makeImage("resources/imgs/sushi.png", "hot");
const sushiFig = makeFigure(sushiImg, "Asian");
const hotdogImg = makeImage("resources/imgs/hotdog.png", "hotdog");
const hotdogFig = makeFigure(hotdogImg, "North American");

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

function endAnimation() {
  let endAnimationImg = document.createElement('img');
  endAnimationImg.setAttribute('id', 'end-pizza-icon');
  endAnimationImg.alt = 'pizza';
  endAnimationImg.src = 'resources/imgs/pizza.png'
  
  let choices = document.querySelector('.question-choices');
  choices.parentNode.replaceChild(endAnimationImg, choices);

  document.querySelector('.card-title').innerText = "Thinking of a meal that fits those criteria...";

  endAnimationImg.addEventListener('animationend', function() {
    document.querySelector('.card-title').innerText = "Your meal choice is:";

    let result = document.createElement('h3');
    //temp
    result.innerText = "FOOD RESULT HERE";
    let restartBtn = document.createElement('button');
    restartBtn.innerText = "Start Over";
    restartBtn.addEventListener('click', function () {
      window.location.reload();
    })

    endAnimationImg.parentNode.replaceChild(result, endAnimationImg);

    result.parentNode.appendChild(restartBtn);
  });
}

//event listeners for all choice buttons in meal decider
document.querySelector('#pizza-btn').addEventListener('click', function () {
  localStorage.clear();

  mealDecider.replaceChild(makeQuestion("What Meal of the day will you be eating?", [bfFig, lunchFig, dinFig]), contents);
})

bfFig.addEventListener('click', function() {
  console.log("User chose breakfast")
  localStorage.setItem('breakfast', true);

  let choices = document.querySelector('.question-choices');
  choices.parentNode.replaceChild(makeQuestion("Would you prefer only vegitarian options?", [vegFig, meatFig]), choices);
})

lunchFig.addEventListener('click', function() {
  console.log("User chose lunch")
  localStorage.setItem('lunch', true);

  let choices = document.querySelector('.question-choices');
  choices.parentNode.replaceChild(makeQuestion("Would you prefer only vegitarian options?", [vegFig, meatFig]), choices);
})

dinFig.addEventListener('click', function() {
  console.log("User chose dinner");
  localStorage.setItem('dinner', true);

  let choices = document.querySelector('.question-choices');
  choices.parentNode.replaceChild(makeQuestion("Would you prefer only vegitarian options?", [vegFig, meatFig]), choices);
})

vegFig.addEventListener('click', function() {
  console.log("User chose vegitarian meal");
  localStorage.setItem('vegitarian', true);

  let choices = document.querySelector('.question-choices');
  choices.parentNode.replaceChild(makeQuestion("Do we want a hot meal today?", [hotFig, notHotFig]), choices);
})

meatFig.addEventListener('click', function() {
  console.log("User chose not vegitarian meal");
  localStorage.setItem('vegitarian', false);

  let choices = document.querySelector('.question-choices');
  choices.parentNode.replaceChild(makeQuestion("Do we want a hot meal today?", [hotFig, notHotFig]), choices);
})

hotFig.addEventListener('click', function() {
  console.log("User chose hot meal");
  localStorage.setItem('hot', true);

  let choices = document.querySelector('.question-choices');
  choices.parentNode.replaceChild(makeQuestion("Generally speaking, what kind of food are you thinking of having?", [hotdogFig, empanadaFig, sushiFig, pastaFig]), choices);
})

notHotFig.addEventListener('click', function() {
  console.log("User chose not hot meal");
  localStorage.setItem('hot', false);

  let choices = document.querySelector('.question-choices');
  choices.parentNode.replaceChild(makeQuestion("Generally speaking, what kind of food are you thinking of having?", [hotdogFig, empanadaFig, sushiFig, pastaFig]), choices);
})

hotdogFig.addEventListener('click', function() {
  console.log("User chose North American meal");
  localStorage.setItem('NAmerica', true);

  endAnimation();
  console.log(localStorage);
})

empanadaFig.addEventListener('click', function() {
  console.log("User chose South American meal");
  localStorage.setItem('SAmerica', true);

  endAnimation();
  console.log(localStorage);
})

sushiFig.addEventListener('click', function() {
  console.log("User chose Asian meal");
  localStorage.setItem('Asian', true);

  endAnimation();
  console.log(localStorage);
})

pastaFig.addEventListener('click', function() {
  console.log("User chose European meal");
  localStorage.setItem('European', true);

  endAnimation();
  console.log(localStorage);
})