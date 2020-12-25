const img = document.querySelector('img');
<<<<<<< HEAD
const endpoint = 'https://api.unsplash.com/search/photos?query=dogs&client_id=sRf3a4tonFVZXP-ZR3Fz8dWoBECKIx5GT5cb3SbVo5A';
const dogimg = document.getElementById('image_content');
const dogs = document.getElementById('unsplash');

dogs.addEventListener('click', fetchDogImg);

function fetchDogImg() {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            dogimg.innerHTML = `<img src="${data.file}"/>`;
        })
}





