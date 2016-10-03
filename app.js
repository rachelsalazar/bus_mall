'use strict';

var imageContainer = document.getElementById('image-container');
var allImages = [];

function Product(productName, filePath){
  this.productName = productName;
  this.filePath = filePath;
  this.numTimesShown = 0;
  this.numTimesCicked = 0;
  allImages.push(this);
};

new Product('bag', 'images/bag.jpg');
new Product('banana', 'images/banana.jpg');
new Product('bathroom', 'images/bathroom.jpg');
new Product('boots', 'images/boots.jpg');
new Product('breakfast', 'images/breakfast.jpg');
new Product('bubblegum', 'images/bubblegum.jpg');
new Product('chair', 'images/chair.jpg');
new Product('cthulhu', 'images/cthulhu.jpg');
new Product('dog-duck', 'images/dog-duck.jpg');
new Product('dragon', 'images/dragon.jpg');
new Product('pen', 'images/pen.jpg');
new Product('pet-sweep', 'images/pet-sweep.jpg');
new Product('scissors', 'images/scissors.jpg');
new Product('shark', 'images/shark.jpg');
new Product('sweep', 'images/sweep.png');
new Product('tauntaun', 'images/tauntaun.jpg');
new Product('unicorn', 'images/unicorn.jpg');
new Product('usb', 'images/usb.gif');
new Product('water-can', 'images/water-can.jpg');
new Product('wine-glass', 'images/wine-glass.jpg');

var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var leftIndex;
var centerIndex;
var rightIndex;

var randomIndex = function() {
  for (var i = 0; i < allImages.length; i++) {
    leftIndex = Math.floor(Math.random() * allImages.length);
    centerIndex = Math.floor(Math.random() * allImages.length);
    rightIndex = Math.floor(Math.random() * allImages.length);
  }
};
randomIndex();

while ((leftIndex === centerIndex) || (centerIndex === rightIndex) || (leftIndex === rightIndex)) {
  randomIndex();
}
left.src = allImages[leftIndex].filePath;
center.src = allImages[centerIndex].filePath;
right.src = allImages[rightIndex].filePath;
