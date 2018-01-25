'use strict'

var __API_URL__ = 'https://christian-ahmed-books.herokuapp.com/'; 
var app = app || {};

(function(module){

  function Book(rawBook){
    Object.keys(rawBook).forEach(key => {
      this[key] = rawBook[key];
    }, this);
  }

  Book.all = [];

  Book.prototype.toHtml = () => {
    var template = Handlebars.compile($('#book-list-template').text());

    return template(this);
  };

  Book.loadAll = rows => {
    rows.sort((a,b) => (new Book(b.title)) - (new Book(a.title)))
    Book.all = rows.map(bookObject => new Book(bookObject));
  };

  Book.fetchAll = callback => {
    $.get('../../data/book.json')
      .then(
        function(results) {
          Book.loadAll(results);
          callback();
        }
      )
  };

  module.Book = Book;
})(app);