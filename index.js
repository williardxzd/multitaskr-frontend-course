var http = new XMLHttpRequest();
var url = 'https://pokeapi.co/api/v2/pokemon';

http.onreadystatechange = function() {
    var response = JSON.parse(http.responseText);
    var tbody = document.querySelector('#pokemon-table tbody');

    response.results.forEach((element, index) => {
        tbody.innerHTML += `<tr> \
            <th scope="row">${index}</th> \
            <td>${element.name}</td> \
            <td><a href="pokemon.html?id=${index + 1}">View more</a></td> \
        </tr>`;
    });
}

http.open('GET', url, false);
http.send();