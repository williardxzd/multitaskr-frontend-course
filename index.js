const urlParams = new URLSearchParams(location.search);
//var baseUrl = 'https://pokeapi.co/api/v2/pokemon/?';

var http = new XMLHttpRequest();
/*var limit = urlParams.has('limit') ? urlParams.get('limit') : 20;
var offset = urlParams.has('offset') ? urlParams.get('offset') : 0;*/
var url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

http.onreadystatechange = function() {
    var response = JSON.parse(http.response);
    var tbody = document.querySelector('#pokemon-table tbody');

    response.drinks.forEach((element, index) => {
        tbody.innerHTML += `<tr> \
            <th scope="row">${index}</th> \
            <td>${element.strCategory}</td> \
            <td><a href="drinks/drinks.html?category=${element.strCategory}&offset=0">View more</a></td> \
        </tr>`;
    });
    

    //const nextParams = new URLSearchParams(response.next);
    //tfoot.innerHTML = `<a href="index.html?offset=${nextParams.get(baseUrl+'offset')}&limit=${nextParams.get('limit')}" class="btn btn-primary">Next</a>`;
}

http.open('GET', url, false);
http.send();