const dogimg = document.getElementById('image_content');
const dogs = document.getElementById('unsplash');


async function getRandomDog() {
    let url = "https://dog.ceo/api/breeds/image/random"
    try {
        let res = await fetch(url)
        return await res.json();
    }
    catch(error) {
        console.log(error);
    }
}
async function renderDogs() {
    let dogs = await getRandomDog();
    var dog = [];
    dog = new Image(); // Create image object
    dog.src = dogs.message;
    dog.width = "600";
    dog.height = "600";

    document.dogimg.appendChild(dog);
}
// Find a way to insert API images and input into HTML





