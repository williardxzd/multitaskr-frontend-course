const urlParams = new URLSearchParams(location.search);

var http = new XMLHttpRequest();
var url = 'https://pokeapi.co/api/v2/pokemon/' + urlParams.get('id');

http.onreadystatechange = function() {
    var pokemon = JSON.parse(http.responseText);
    var div = document.querySelector('#pokemon');

    div.innerHTML = `<div class="card" style="width: 18rem;"> \
        <div class="card-body"> \
            <h5 class="card-title">${pokemon.name}</h5> \
            <h6 class="card-subtitle mb-2 text-muted">Weight: ${pokemon.weight} - Height: ${pokemon.height}</h6> \
            <a href="index.html" class="card-link">Back</a> \
            <a href="edit.html" class="card-link">Edit</a> \
            <a href="delete.html" class="card-link">Delete</a> \
            <a href="delete.html" class="card-link">Prueba</a> \
        </div> \
    </div>`;
}

http.open('GET', url, false);
http.send();