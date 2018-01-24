'use strict';
var app = app || {};

(function (module) {
  var errorView = {};

  errorView.initErrorPage = () => {
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();
    var template = Handlebars.compile($('#error-template').text());

    module.errorView = errorView;
  };
}), (window);