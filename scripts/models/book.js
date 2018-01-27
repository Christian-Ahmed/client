'use strict'


var app = app || {};

(function(module){
  const book = {};

  var __API_URL__ = 'https://christian-ahmed-books.herokuapp.com/'; 

  function Book(rawBook){
    Object.keys(rawBook).forEach(key => {
      this[key] = rawBook[key];
    }, this);
  }

  Book.all = [];
  Book.single = [];

  Book.prototype.toHtml = () => {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.renderAll = (ctx, next) => {
    $('#books').empty();
    app.Book.all.map(book => $('#books').append(book.toHtml()));
}

  Book.loadAll = rows => {
    rows.sort((a,b) => (new Book(b.title)) - (new Book(a.title)))
    Book.all = rows.map(bookObject => new Book(bookObject));
  };

  Book.fetchAll = (ctx, next) => {
    $.get(`${__API_URL__ }/v1/books`)
      .then(results => {
        ctx.results = results;
        next();
      });
  }

  Book.renderSingle = (ctx, next) => {
    $('#individualBook').empty();
    app.Book.single.map(book => $('#individualBook').append(book.singleHtml()));
    $('#updateButton').attr('href', `/book/${ctx.params.book_id}/edit`)
    next();
  }

  Book.loadSingle = (ctx, next) => {
    console.log(ctx.results);
    Book.single = [];
    Book.single = ctx.results.map(bookObject => new Book(bookObject));
    next();
  }

  Book.fetchSingle = (ctx, next)  => {
    $.get(`${__API_URL__}/v1/books/${ctx.params.book_id}`)
      .then(results => {
        ctx.results = results;
        next();
      });
  };

  Book.prototype.insertRecord = function(){
    $.ajax({
      url: `${__API_URL__ }/v1/books`,
      method: 'POST',
      data: {
        title: this.title,
        author: this.author,
        isbn: this.isbn,
        image_url: this.image_url,
        description: this.description
      },
      success: window.location = '../',
    })
  };

  Book.prototype.deleteRecord = (ctx, next) => {
    let book_id = ctx.params.book_id;
    $('.bookListing').on('click', $('#deleteButton'), function() {
        $.ajax({
            url: `${__API_URL__}/v1/books/${book_id}`,
            method: 'DELETE',
            success: function() {
                window.location = '../';
            }
        })
    });
}

// UPDATE/PUT
// 3rd - adds this boks values to edit form
Book.renderEditSingle = (ctx, next) => {
    $('#author').val(Book.single[0].author);
    $('#description').val(Book.single[0].description);
    $('#image_url').val(Book.single[0].image_url);
    $('#isbn').val(Book.single[0].isbn);
    $('#title').val(Book.single[0].title);
    next();
  }

  Book.prototype.updateRecord = (ctx, next) => {
    let book_id = ctx.params.book_id;
    console.log('hi');
    console.log(book_id);
    $('#updateBookForm').on('submit', function(e) {
      e.preventDefault();
      console.log($('#title').val(), $('#author').val(), $('#isbn').val(), $('#image_url').val(), $('#description').val());


      $.ajax({
        url: `${__API_URL__}/v1/books/${book_id}/edit`,
        method: 'PUT',
        data: {
          title: $('#title').val(),
          author: $('#author').val(),
          isbn: $('#isbn').val(),
          image_url: $('#image_url').val(),
          description: $('#description').val()
        }
      })
    });
  }

  module.Book = Book;
})(app);