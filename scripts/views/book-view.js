'use strict';
(function(module) {
  const singleBookView = {};

  singleBookView.init = function(ctx, next) {
    $('#errorView').hide();
    $('#homeView').hide();
    $('#formView').hide();
    $('#editBookView').hide();
    $('#singleBookView').show();
    next();
  }
  module.singleBookView = singleBookView;
})(window);