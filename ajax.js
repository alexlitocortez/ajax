
const endpoint = 'https://dog.ceo/api/breeds/list/all';
const key = document.getElementById('getText');
const suggestions = document.querySelector('.suggestions');
const dogs = [];


fetch(endpoint)
// convert to JSON file (Javascript object notation)
.then(blob => blob.json())
// Pushing data from API into an array
.then(data => dogs.push(data));
// Printing to console to see if "dogs" turned into an array
console.log(dogs);

function findMatches(wordToMatch, dogs) {
    // filters the array into subsets
    return dogs.filter(place => )
}



