const urlParams = new URLSearchParams(location.search);

var http = new XMLHttpRequest();
var limit = urlParams.has('limit') ? urlParams.get('limit') : 20;
var offset = urlParams.has('offset') ? urlParams.get('offset') : 0;
var url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

http.onreadystatechange = function() {
    var response = JSON.parse(http.responseText);
    var tbody = document.querySelector('#pokemon-table tbody');
    var tfoot = document.querySelector('#pokemon-table tfoot');

    response.results.forEach((element, index) => {
        tbody.innerHTML += `<tr> \
            <th scope="row">${index}</th> \
            <td>${element.name}</td> \
            <td><a href="pokemon.html?id=${index + 1}">View more</a></td> \
        </tr>`;
    });

    const nextParams = new URLSearchParams(response.next);
    tfoot.innerHTML = `<a href="index.html?offset=${nextParams.get('offset')}&limit=${nextParams.get('limit')}" class="btn btn-primary">Next</a>`;
}

http.open('GET', url, false);
http.send();