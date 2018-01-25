'use strict';

var __API_URL__ = 'https://christian-ahmed-books.herokuapp.com/'; 

pageLoad();

$('#user-form').on('submit', function(e) {
  e.preventDefault();

  let data = {
    author: e.target.author.value,
    title: e.target.title.value,
    image_url: e.target.img_url.value,
    isbn: e.target.isbn.value,
    descr: e.target.description.value
  }

  $.post(`${__API_URL__}/`, data)
    .then(function() {
      pageLoad();
    })
    .catch(function(err) {
      console.error(err);
      pageLoad();
    });
});

function pageLoad() {
  $.get(`${__API_URL__}/db/person`)
    .then(function(data) {
      console.log('our data:', data);
      $('#results').empty();

      data.rows.forEach(function(item) {
        let content = `
        <p>Author: ${item.author}</p>
        <h2>Book Title: ${item.title}</h2>
        <p>Image URL: ${item.img_url}</p>
      `;
        $('#results').append(content);
      });
    }, function(err) {
      console.error(err);
    });
}