'use strict'
var app = app || {};

(function(module){
  function Book(rawBook){
    Object.keys(rawBook).forEach(key => {
      this[key] = rawBook[key];
    }, this);
  }

  Book.all = [];

  Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-list-template').text());

    return template(this);
  };

  Book.loadAll = rows => {
    rows.sort((a,b) => (new Book(b.title)) - (new Book(a.title)))

    Book.all = rows.map(bookObject => new Book(bookObject));
  };

  Book.fetchAll = callback => {
    $.get('/db/person')
      .then(
        function(results) {

          Book.loadAll(results);
          callback();
        }
      )

  };
  module.Book = Book;
}), (window);