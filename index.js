const urlParams = new URLSearchParams(location.search);

var http = new XMLHttpRequest();
var url = `https://jsonplaceholder.typicode.com/posts`;

http.onreadystatechange = function() {
    var response = JSON.parse(http.responseText);
    var tbody = document.querySelector('#posts-table tbody');

    response.forEach((element) => {
        tbody.innerHTML += `<tr> \
            <td>${element.id}</td> \
            <td>${element.title}</td> \
            <td><a href="posts.html?id=${element.id}">View more</a></td> \
        </tr>`;
    });

}

http.open('GET', url, false);
http.send();