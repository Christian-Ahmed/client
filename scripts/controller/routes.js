'use strict';

page('/', listView.init);
page('/books/:book_id', detailView.init);
page('/books/new', formView.init);

page();