'use strict';
var app = app || {};

(function (module) {
  var errorView = {};

  errorView.initErrorPage = function(err){
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();
    var template = Handlebars.compile($('#error-template').text());

    return template(err);
  };
  module.errorView = errorView;
}), (window);