'use strict';

page('/', listView.init, app.Book.fetchAll, app.Book.loadAll, app.Book.renderAll);
// page('/new', listView.init, app.Book.fetchAll, app.Book.loadAll, app.Book.renderAll);
page('/new', formView.init, ()=>{});
// page('/book/:book_id', singleBookView.init, app.Book.fetchSingle, app.Book.loadSingle, app.Book.renderSingle, app.Book.prototype.deleteRecord);
// page('/book/:book_id/edit', editBookView.init, app.Book.fetchSingle, app.Book.loadSingle, app.Book.renderEditSingle, app.Book.prototype.updateRecord);
// page('/*', errorView.init);
// page('/*/*', errorView.init);
// page('/*/*/*', errorView.init);


page();