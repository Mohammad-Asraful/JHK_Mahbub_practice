function makeRed() {
   document.body.style.backgroundColor = "red";
   document.getElementById("red").style.backgroundColor = "red"
   document.getElementById("red").style.color = "white"
   document.getElementById("red").style.border = "none"
   document.getElementById("red").style.outline = "none"
}

// handle blue button click by setting function name.
const blueButton = document.getElementById("make-blue-button");
// just set the name of the  function.
blueButton.onclick = makeBlue;
function makeBlue() {
   document.getElementById("make-blue-button").style.backgroundColor = "blue"
   document.getElementById("make-blue-button").style.color = "white"
   // 
   document.body.style.backgroundColor = "blue";

}

// input button clickable
const orangeButton = document.getElementById(`orange-button`)
orangeButton.onclick = makeOrangeButton;
function makeOrangeButton() {
   document.getElementById("orange-button").style.backgroundColor = "orange"
   // 
   document.body.style.backgroundColor = "orange"
}

// 

const greenButton = document.getElementById("make-green-button");
// annonymas function
greenButton.onclick = function () {
   document.body.style.backgroundColor = "green";
};


// 

const grayButton = document.getElementById("make-gray-button");
// anonymous function
grayButton.onclick = function () {
   document.body.style.backgroundColor = "gray";
};

// 

// handle by using add evenlistener
const goldenRodButton = document.getElementById("make-goldenrod");
goldenRodButton.addEventListener(`click`, makeGoldenRod);
function makeGoldenRod() {
   document.body.style.backgroundColor = "goldenrod";
}

// 

// addEvenListener
const hotPinkButton = document.getElementById("make-hotPink");
hotPinkButton.addEventListener("click", function makePink() {
   document.body.style.backgroundColor = "hotpink";
});

// 

// direct shorcut
document
   .getElementById("make-lightbule")
   .addEventListener("click", function () {
      document.body.style.backgroundColor = "lightblue";
   });