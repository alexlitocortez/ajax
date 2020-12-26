const endpoint = 'https://api.unsplash.com/search/photos?query=dogs&client_id=sRf3a4tonFVZXP-ZR3Fz8dWoBECKIx5GT5cb3SbVo5A';
const dogimg = document.getElementById('image_content');
const dogs = document.getElementById('unsplash');


dogs.addEventListener('click', getImages);

async function getImages(image) {
    fetch(endpoint)
        .then(response => {
            response.json();
        })
        .then(data => {
        console.log(data) //Prints results from response.json()` in getRequest
        
    })
}

// Find a way to insert API images and input into HTML





