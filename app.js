'use strict';

var unorderedList = document.getElementById('unordered-list');
var allImages = [];

//Product constructor function
function Product(productName, filePath, numTimesShown, numTimesClicked){
  this.productName = productName;
  this.filePath = filePath;
  this.numTimesShown = numTimesShown;
  this.numTimesClicked = numTimesClicked;
  allImages.push(this);
};

//adding all images
new Product('bag', 'images/bag.jpg', 0, 0);
new Product('banana', 'images/banana.jpg', 0, 0);
new Product('bathroom', 'images/bathroom.jpg', 0, 0);
new Product('boots', 'images/boots.jpg', 0, 0);
new Product('breakfast', 'images/breakfast.jpg', 0, 0);
new Product('bubblegum', 'images/bubblegum.jpg', 0, 0);
new Product('chair', 'images/chair.jpg', 0, 0);
new Product('cthulhu', 'images/cthulhu.jpg', 0, 0);
new Product('dog-duck', 'images/dog-duck.jpg', 0, 0);
new Product('dragon', 'images/dragon.jpg', 0, 0);
new Product('pen', 'images/pen.jpg', 0, 0);
new Product('pet-sweep', 'images/pet-sweep.jpg', 0, 0);
new Product('scissors', 'images/scissors.jpg', 0, 0);
new Product('shark', 'images/shark.jpg', 0, 0);
new Product('sweep', 'images/sweep.png', 0, 0);
new Product('tauntaun', 'images/tauntaun.jpg', 0, 0);
new Product('unicorn', 'images/unicorn.jpg', 0, 0);
new Product('usb', 'images/usb.gif', 0, 0);
new Product('water-can', 'images/water-can.jpg', 0, 0);
new Product('wine-glass', 'images/wine-glass.jpg', 0, 0);

var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var leftIndex;
var centerIndex;
var rightIndex;
var counter = 0;

render();

//function rendered on click
function render() {
  var randomIndex = function() {
    for (var i = 0; i < allImages.length; i++) {
      leftIndex = Math.floor(Math.random() * allImages.length);
      centerIndex = Math.floor(Math.random() * allImages.length);
      rightIndex = Math.floor(Math.random() * allImages.length);
    }
  };
  randomIndex();
//checking for duplicate images
  while ((leftIndex === centerIndex) || (centerIndex === rightIndex) || (leftIndex === rightIndex)) {
    randomIndex();
  }
  left.src = allImages[leftIndex].filePath;
  allImages[leftIndex].numTimesShown += 1;
  if (left) {
    allImages[leftIndex].numTimesClicked += 1;
  }
  center.src = allImages[centerIndex].filePath;
  allImages[centerIndex].numTimesShown += 1;
  if (center) {
    allImages[centerIndex].numTimesClicked += 1;
  }
  right.src = allImages[rightIndex].filePath;
  allImages[rightIndex].numTimesShown += 1;
  if (right) {
    allImages[rightIndex].numTimesClicked += 1;
  }
};

//displaying results for the user
var displayResults = function() {
  for (var i = 0; i < allImages.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = allImages[i].numTimesClicked + ' votes for ' + allImages[i].productName;
    unorderedList.appendChild(listItem);
  }
};

//event handler
var userClicks = function() {
  onclick = counter++;
  console.log(counter);
  if (counter > 24) {
    displayResults();
    left.removeEventListener('click', userClicks);
    center.removeEventListener('click', userClicks);
    right.removeEventListener('click', userClicks);
  }
  render();
};

//event listener
left.addEventListener('click', userClicks);
center.addEventListener('click', userClicks);
right.addEventListener('click', userClicks);
