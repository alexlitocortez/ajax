// Use container

const container = document.getElementById('container');
const btn = document.getElementById('unsplash');

btn.addEventListener('click', fetchDogImage);

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            const mediaQuery = window.matchMedia('(max-width: 768px)');
            const mediaQueryTwo = window.matchMedia('(max-width: 1400px)');
            if (mediaQuery.matches) {
                container.innerHTML = `<img src="${data.message}" width="408" height="197"/>`;
            } else (mediaQueryTwo.matches) {
                container.innerHTML = `<img src="${data.message}" width="820" height="197"/>`;
            };
    });








// How to make Javascript adapt to media queries so the image fits the container perfectly for each screen size
// Then do media queries
// Then do the documentation for JS file
