'use strict';
const imgEle = document.getElementById('img-display');
const images = [
    'insta-image-1.jpg',
    'insta-image-2.jpeg',
    'insta-image-3.jpg',
    'insta-image-4.jpg',
    'insta-image-5.jpg',
];

let currentIndex = 0;

window.setInterval(() => {
    currentIndex = (images.length === currentIndex) ? 0 : currentIndex;
    imgEle.src = images[currentIndex];
    ++currentIndex;
}, 2500);