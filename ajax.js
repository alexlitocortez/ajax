
const key = document.getElementById('getText');

key.addEventListener('keyup', nextText)

const dogs = [''];

function nextText() {
    fetch('https://dog.ceo/api/breeds/list/all')
    // convert to JSON file (Javascript object notation)
    .then((res) => res.json())
    .then(data => console.log(data))
    .then(data => dogs.push(data))
}

function findMatches(wordToMatch, dogs) {
    return dogs.filter(dog => {
        const regex = new RegExp(wordToMatch, 'gi');
        return dog.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, dogs);
}

key.addEventListener('change', displayMatches);
key.addEventListener('keyup', displayMatches);


