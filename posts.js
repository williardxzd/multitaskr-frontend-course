const urlParams = new URLSearchParams(location.search);

var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts/' + urlParams.get('id');

http.onreadystatechange = function() {
    var post = JSON.parse(http.responseText);
    var div = document.querySelector('#posts');

    div.innerHTML = `<div class="card"> \
    <div class="card-header">Post ${post.id}</div> \
    <div class="card-body"> \
      <h5 class="card-title">Title:<br>${post.title}</h5> \
      <p class="card-text">Description:<br>${post.body}</p> \
    </div> \
  </div>`
  
}

http.open('GET', url, false);
http.send();