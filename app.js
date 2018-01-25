'use strict';

var __API_URL__ = 'https://christian-ahmed-books.herokuapp.com/'; 

pageLoad();

$('#user-form').on('submit', function(e) {
  e.preventDefault();

  let data = {
    title: e.target.title.value,
    author: e.target.author.value,
    authorUrl: e.target.authorUrl.value
  }

  $.post(`${__API_URL__}/db/person`, data)
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
        <h2>Book Title: ${item.title}</h2>
        <p>Author: ${item.author}</p>
        <p>Author Url: ${item.authorUrl}</p>
      `;
        $('#results').append(content);
      });
    }, function(err) {
      console.error(err);
    });
}