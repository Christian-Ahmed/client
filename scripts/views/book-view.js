'use strict';
var app = app || {};

(function (module) {
  var bookView = {};

  bookView.initIndexPage = () => {
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.forEach(a => $('#book-list').append(a.toHtml()));
  };

  $(document).ready(function() {
    app.Book.fetchAll(bookView.initIndexPage);
  });

  module.bookView = bookView;
}), (window);