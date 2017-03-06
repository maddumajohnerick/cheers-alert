'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

require('font-awesome/css/font-awesome.min.css');
require('./styles/cheers.css');

var cheers = function () {
  var duration = 4;

  function setDuration(secs) {
    duration = secs;
  }

  function dismiss(container) {
    $(container).css('transition', '.5s');
    $(container).css('background', 'transparent');
    $(container).find('.cheers-icon').css('background', 'transparent');
    $(container).find('.cheers-icon i').css('color', 'transparent');
    $(container).find('.cheers-title').css('color', 'transparent');
    $(container).find('.cheers-body').css('color', 'transparent');
    $(container).css('-webkit-box-shadow', '1px 1px 4px rgba(0, 0, 0, 0.0)');
    $(container).css('box-shadow', '1px 1px 4px rgba(0, 0, 0, 0.0)');
    setTimeout(function () {
      $(container).remove();
    }, 2600);
  }

  function setContainer(data, type) {
    var icon = data.icon || '';
    duration = data.duration || duration;

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
                          +'<div class="cheers-overlay"></div>'
                      +'</div>');
    $(container).css('-webkit-animation-duration', ''+ duration +'s');
    $(container).css('animation-duration', ''+ duration +'s');
    $(container).appendTo('body');
    $(container).on('click', function (){
      dismiss(container);
    });
    setTimeout(function () {
      $(container).remove();
    }, 1000 * (duration + 1));
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
    info: info,
    setDuration: setDuration
  };

  return alert;
}();

exports.default = cheers;
