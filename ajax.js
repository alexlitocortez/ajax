// Use container

const container = document.getElementById('container');
const btn = document.getElementById('unsplash');

btn.addEventListener('click', fetchDogImage);

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            container.innerHTML = `<img src="${data.message}" width="400" height="400"/>`;
        })
        // Create a media condition that targets viewports at least 768px wide
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        
        if (mediaQuery.matches) {
            container.innerHTML = `<img src="${data.message}" width="408" height="197"/>`;
        }
}




// How to make Javascript adapt to media queries so the image fits the container perfectly for each screen size
// Then do media queries
// Then do the documentation for JS file




