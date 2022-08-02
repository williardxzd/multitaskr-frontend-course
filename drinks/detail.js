const urlParams = new URLSearchParams(location.search);
var http = new XMLHttpRequest();
var url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${urlParams.get('drink')}`;

http.onreadystatechange = function() {
    var response = JSON.parse(http.response);
    var div = document.querySelector('#drink');
    var data = response.drinks[0];

    div.innerHTML = `<div class="card" style="width: 26rem;"> \
        <div class="card-body"> \
            <button class='btn btn-primary' onClick='history.back()'>Back</button>
            <img style='width:24rem;' src='${data.strDrinkThumb}'/>
            <h5 class="card-title">${data.strDrink}</h5> \
            <h6 class="card-subtitle mb-2 text-muted">${data.strCategory}</h6> \
            <p>${data.strInstructions}</p> \
        </div> \
    </div>`;
    
}

http.open('GET', url, false);
http.send();