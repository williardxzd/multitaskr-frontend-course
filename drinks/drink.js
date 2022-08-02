const urlParams = new URLSearchParams(location.search);
var http = new XMLHttpRequest();
console.log(urlParams)
var url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${urlParams.get('category')}`;

http.onreadystatechange = function() {
    var response = JSON.parse(http.response);
    var tbody = document.querySelector('#drink-table tbody');
    var tfoot = document.querySelector('#drink-table tfoot');
    var offset =  parseInt( urlParams.get('offset') )
    var o = 0;

    response.drinks.forEach((element, index) => {
        if( o < offset + 10 && o >= offset  )
        {
            tbody.innerHTML += `<tr> \
                <th scope="row">${index}</th> \
                <td>${element.strDrink}</td> \
                <td><img style='width:150px;' src='${element.strDrinkThumb}'/></td> \
                <td><a href="detail.html?drink=${element.strDrink}">View more</a></td> \
            </tr>`;
        }
        o++;
    });

    tfoot.innerHTML = `<a href="drinks.html?category=${urlParams.get('category')}&offset=${offset+10}" class="btn btn-primary">Next</a>`;
    
}

http.open('GET', url, false);
http.send();