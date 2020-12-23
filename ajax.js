
const endpoint = 'https://dog.ceo/api/breeds/image/random';
const container = document.querySelector('image_content');
const dogs = document.querySelector('button');



function randomImg() {
    dogs.addEventListener('click', function(e) {
        e.preventDefault();
        var images = document.getElementById('image_content');
        images.src = "https://dog.ceo/api/breeds/image/random">
        console.log(randomImg());
    });
}


