
var request = new XMLHttpRequest()

// Opening file via "GET"
request.open('GET', 'www.balldontlie.io/api/v1/players', true)

request.onload = function () {
    // Accessing JSON data
    var data = JSON.parse(this.response)

    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name + 'team' + data[i].team + ',')
    }

request.send()

