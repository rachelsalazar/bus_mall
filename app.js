'use strict';

var unorderedList = document.getElementById('unordered-list');
var imageContainer = document.getElementById('image-container');
var allImages = [];
var newImages = [];
var previousImages = [];

//Product constructor function
function Product(productName, filePath, numTimesShown, numTimesClicked){
  this.productName = productName;
  this.filePath = filePath;
  this.numTimesShown = numTimesShown;
  this.numTimesClicked = numTimesClicked;
  allImages.push(this);
};

//adding all images
new Product('bag', 'images/bag.jpg', 0, 0); //0
new Product('banana', 'images/banana.jpg', 0, 0); //1
new Product('bathroom', 'images/bathroom.jpg', 0, 0); //2
new Product('boots', 'images/boots.jpg', 0, 0); //3
new Product('breakfast', 'images/breakfast.jpg', 0, 0); //4
new Product('bubblegum', 'images/bubblegum.jpg', 0, 0); //5
new Product('chair', 'images/chair.jpg', 0, 0); //6
new Product('cthulhu', 'images/cthulhu.jpg', 0, 0); //7
new Product('dog-duck', 'images/dog-duck.jpg', 0, 0); //8
new Product('dragon', 'images/dragon.jpg', 0, 0); //9
new Product('pen', 'images/pen.jpg', 0, 0); //10
new Product('pet-sweep', 'images/pet-sweep.jpg', 0, 0); //11
new Product('scissors', 'images/scissors.jpg', 0, 0); //12
new Product('shark', 'images/shark.jpg', 0, 0); //13
new Product('sweep', 'images/sweep.png', 0, 0); //14
new Product('tauntaun', 'images/tauntaun.jpg', 0, 0); //15
new Product('unicorn', 'images/unicorn.jpg', 0, 0); //16
new Product('usb', 'images/usb.gif', 0, 0); //17
new Product('water-can', 'images/water-can.jpg', 0, 0); //18
new Product('wine-glass', 'images/wine-glass.jpg', 0, 0);  //19

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
      newImages = [];
      newImages.push(leftIndex, centerIndex, rightIndex);
    }
  };
  randomIndex();
//checking for duplicate images
  while ((leftIndex === centerIndex) || (centerIndex === rightIndex) || (leftIndex === rightIndex) || newImages[0] === previousImages[0] || newImages[0] === previousImages[1] || newImages[0] === previousImages[2] || newImages[1] === previousImages[0] || newImages[1] === previousImages[1] || newImages[1] === previousImages[2] || newImages[2] === previousImages[0] || newImages[2] === previousImages[1] || newImages[2] === previousImages[2]) {
    randomIndex();
  }
//getting filePath for nonduplicating images
  left.src = allImages[leftIndex].filePath;
  allImages[leftIndex].numTimesShown += 1;
  center.src = allImages[centerIndex].filePath;
  allImages[centerIndex].numTimesShown += 1;
  right.src = allImages[rightIndex].filePath;
  allImages[rightIndex].numTimesShown += 1;
};

//function to update previousImages
function updatePreviousArray() {
  previousImages.push(leftIndex, centerIndex, rightIndex);
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
  console.log('The user has clicked ' + counter + ' times.');

  //if container is clicked
  if (event.target.id === 'image-container') {
    return alert('Click on an image, dummy!');
  }

  //tracking which image was clicked
  if (event.target.id === 'left') {
    allImages[leftIndex].numTimesClicked += 1;
  }
  if (event.target.id === 'center') {
    allImages[centerIndex].numTimesClicked += 1;
  }
  if (event.target.id === 'right') {
    allImages[rightIndex].numTimesClicked += 1;
  }

  //resetting previous images and reassigning
  previousImages = [];
  updatePreviousArray();

  //stopping votes
  if (counter > 24) {
    displayResults();
    imageContainer.removeEventListener('click', userClicks);
  }
  render();
};

//event listener
imageContainer.addEventListener('click', userClicks);
