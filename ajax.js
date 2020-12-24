const img = document.querySelector('img');
const endpoint = 'https://source.unsplash.com/random';
const container = document.querySelector('image_content');
const dogs = document.querySelector('button');

const getImage = async (endpoint) => {
    let result;
    // handle a success
    try {
    // fetch the result of getting the image from the endpoint
        const fetched = await fetch(endpoint);
    // set the value of result equal to the src url
        result = fetched.src;
    // return the result
        return result;

    } catch (err) {
    // catch errors and do something
        console.error(`something bad happened -> ${err}`)
    }
    // handle awaiting the request and errors
}

dogs.addEventListener('click', async () => {
    const imgSrc = await getImage(endpoint);
    // set the image's src attribute to the returned url
    img.setAttribute('src', imgSrc);
})


