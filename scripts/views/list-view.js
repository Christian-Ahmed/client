'use strict';

(function(module) {
  const listView = {};
  listView.init = function(ctx, next) {
    $('#bookView').hide();
    $('#errorView').hide();
    $('#formView').hide();
    $('#editBookView').hide();
    $('#listView').show();
    next();
  }

  module.listView = listView;
})(window);