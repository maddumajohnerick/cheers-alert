'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

require('font-awesome/css/font-awesome.min.css');
require('./styles/cheers.css');

var cheers = function () {
  function setContainer(data, type) {
    var icon = data.icon || '';

    if (!icon) {
      if (type === 'success') {
        icon = 'fa-check';
      }
      if (type === 'error') {
        icon = 'fa-times';
      }
      if (type === 'warning') {
        icon = 'fa-exclamation';
      }
      if (type === 'info') {
        icon = 'fa-info';
      }
    }

    var container = $('<div class="cheers-holder ' + data.alert + ' ' + type + '">'
                          +'<div class="cheers-icon">'
                              +'<i class="fa ' + icon + '" aria-hidden="true"></i>'
                          +'</div>'
                          +'<div class="cheers-body">'
                              +''+ (data.title ? '<div class="cheers-title">' + data.title + '</div>' : '') + ''
                              +'' + data.message + ''
                          +'</div>'
                      +'</div>');
    $(container).appendTo('body');
    setTimeout(function () {
      $(container).remove();
    }, 5000);
  }

  function success(data) {
    setContainer(data, 'success');
  }

  function warning(data) {
    setContainer(data, 'warning');
  }

  function error(data) {
    setContainer(data, 'error');
  }

  function info(data) {
    setContainer(data, 'info');
  }

  var alert = {
    success: success,
    warning: warning,
    error: error,
    info: info
  };

  return alert;
}();

exports.default = cheers;
