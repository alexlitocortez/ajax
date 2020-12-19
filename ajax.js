
const key = document.getElementById('getText');

key.addEventListener('keyup', nextText)

const dogs = [];

function nextText() {
    fetch('https://dog.ceo/api/breeds/list/all')
    // convert to JSON file (Javascript object notation)
    .then((res) => res.json())
    // Put the data from the API in the console
    .then((data) => dogs.push(...data))
}

function findMatches(wordToMatch, dogs) {
    return dogs.filter()
}









