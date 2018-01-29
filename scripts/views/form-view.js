'use strict';

(function(module) {
  const formView = {};

  formView.init = function(ctx, next) {
    $('#bookView').hide();
    $('#listView').hide();
    $('#errorView').hide();
    $('#newBookView').hide();
    $('#editBookView').hide();
    $('#formView').show();
    next();
  }

  module.formView = formView;
})(window);