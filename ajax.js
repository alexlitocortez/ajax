// Use container

const container = document.getElementById('container');
const btn = document.getElementById('unsplash');
const mediaQueryOne = window.matchMedia('(max-width: 375px)');
const mediaQueryTwo = window.matchMedia('(max-width: 768px)');
const mediaQueryThree = window.matchMedia('(max-width: 1400px)')

btn.addEventListener('click', fetchDogImage);

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            if (mediaQueryOne.matches) {
                container.innerHTML = `<img src="${data.message}" width="408" height="198"/>`;
            } else if (mediaQueryTwo.matches) {
                container.innerHTML = `<img src="${data.message}" width="441" height="198"/>`;
            } else if (mediaQueryThree.matches) {
                container.innerHTML = `<img src="${data.message}" width="820" height="198"/>`;
            }
        });
    };


// Then do media queries
// Then do the documentation for JS file


