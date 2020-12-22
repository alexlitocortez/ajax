
const key = document.getElementById('getText');
const suggestions = document.querySelector('.suggestions');
const dogs = [];


key.addEventListener('keyup', nextText)


function nextText() {
    fetch('https://dog.ceo/api/breeds/list/all')
    // convert to JSON file (Javascript object notation)
    .then(res => res.json())
    .then(function(res) {
        res.dogs[i].forEach(element => {
            dogs.push(element);
        });
    })
    .then(() => console.log(dogs))
}




