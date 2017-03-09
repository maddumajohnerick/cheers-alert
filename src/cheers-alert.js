'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var cheers = (function () {
  var duration = 4;
  var dismissClick = false;
  var defaultIcons = {
    success: 'fa-check',
    error: 'fa-times',
    warning: 'fa-exclamation',
    info: 'fa-info'
  }

  function setDuration(secs) {
    return duration = secs < 2 ? 4 : secs;
  }

  function setToggle(toggle) {
    return dismissClick = toggle;
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

  function validateFields(data) {
    var validated = data;

    if (!$.trim(data.title).length || !data.title) {
      validated.title = '';
    }
    if (!$.trim(data.message).length || !data.message) {
      return false;
    }
    if (isNaN(data.duration) && data.duration) {
      return false;
    }
    if(data.duration && data.duration < 2) {
      return false;
    }

    return validated;
  }

  function setContainer(data, type) {
    var validated = validateFields(data);

    if (!validated) return false;

    var icon = validated.icon || '';
    var alert = validated.alert || 'fadein';
    duration = validated.duration || duration;

    if (!icon) {
      icon = defaultIcons[type];
    }

    var container = $('<div class="cheers-holder ' + alert + ' ' + type + '">'
                      +'<div class="cheers-icon">'
                          +'<i class="fa ' + icon + '" aria-hidden="true"></i>'
                      +'</div>'
                      +'<div class="cheers-body">'
                          +''+ (validated.title ? '<div class="cheers-title">' + validated.title + '</div>' : '') + ''
                          +'' + validated.message + ''
                      +'</div>'
                      +'<div class="cheers-overlay"></div>'
                  +'</div>');
    $(container).css('-webkit-animation-duration', ''+ duration +'s');
    $(container).css('animation-duration', ''+ duration +'s');
    $(container).appendTo('body');
    if (dismissClick) {
      $(container).on('click', function (){ dismiss(container); });
    }
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
    setDuration: setDuration,
    setToggle: setToggle
  };

  return alert;
}());

module.exports = cheers;
