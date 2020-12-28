// Use container

const container = document.getElementById('container');
const btn = document.getElementById('unsplash');

btn.addEventListener('click', fetchDogImage);

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            data.width = "450";
            data.height = "450";
            container.innerHTML = `<img src="${data.message}"/>`;
        })
}


// How to get object to perfectly fit  in container
