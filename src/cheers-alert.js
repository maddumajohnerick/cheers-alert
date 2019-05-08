'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var cheers = (function () {
  var duration = 4;
  var dismissClick = true;
  var stacking = true;
  var defaultIcons = {
    success: 'fa-check',
    error: 'fa-times',
    warning: 'fa-exclamation',
    info: 'fa-info'
  }

  function setDuration(secs) {
    duration = secs < 2 ? 4 : secs;
  }

  function setToggle(toggle) {
    dismissClick = toggle;
  }

  function setStacking(stack) {
    stacking = stack;
  }

  function animate(notif, duration, alert) {
    if (alert === 'fadein') {
      $(notif).animate({
        opacity: 1
      }, 200);
      setTimeout(function() {
        $(notif).animate({
          opacity: .0
        }, 200);
      }, 1000 * Number(duration));
    } else {
      $(notif).animate({
        marginLeft: '0px'
      }, 200);
      setTimeout(function() {
        $(notif).animate({
          marginLeft: '+=370px'
        }, 200);
      }, 1000 * Number(duration));
    }
  }

  function dismiss(notif) {
    $(notif).css('transition', '.5s');
    $(notif).css('background', 'transparent');
    $(notif).find('.cheers-icon').css('background', 'transparent');
    $(notif).find('.cheers-icon i').css('color', 'transparent');
    $(notif).find('.cheers-title').css('color', 'transparent');
    $(notif).find('.cheers-body').css('color', 'transparent');
    $(notif).css('-webkit-box-shadow', '1px 1px 4px rgba(0, 0, 0, 0.0)');
    $(notif).css('box-shadow', '1px 1px 4px rgba(0, 0, 0, 0.0)');
    setTimeout(function () {
      $(notif).css('display', 'none');
    }, 500);
    setTimeout(function () {
      $(notif).remove();
    }, 2600);
  }

  function checkTitle(title) {
    if (!$.trim(title).length || !title) {
      return '';
    }
    return title;
  }

  function validateFields(data) {
    var validated = data;
    validated.title = checkTitle(data.title);

    if ((!$.trim(data.message).length || !data.message) || (isNaN(data.duration) && data.duration) || (data.duration && data.duration < 2)) {
      return false;
    }

    return validated;
  }

  function setContainer(data, type) {
    var validated = validateFields(data);
    if (!validated) return false;

    if (!$('.alert-container').length) {
      var container = $('<div class="alert-container"></div>');
      $(container).appendTo('body');
    }

    var icon = validated.icon || defaultIcons[type];
    var alert = validated.alert || 'fadein';
    duration = validated.duration || duration;

    var notif = $('<div class="cheers-holder ' + alert + ' ' + type + '">'
                      +'<div class="cheers-icon">'
                          +'<i class="fa ' + icon + '" aria-hidden="true"></i>'
                      +'</div>'
                      +'<div class="cheers-body">'
                          +''+ (validated.title ? '<div class="cheers-title">' + validated.title + '</div>' : '') + ''
                          +'' + validated.message + ''
                      +'</div>'
                      +'<div style="clear: both;"></div>'
                  +'</div>');
    $(notif).css('-webkit-animation-duration', ''+ duration +'s');
    $(notif).css('animation-duration', ''+ duration +'s');
    $(notif).css('position', stacking ? '' : 'fixed');
    if (stacking) {
      $(notif).prependTo('.alert-container');
    } else {
      $(notif).appendTo('.alert-container');
    }
    animate(notif, duration, alert);
    setTimeout(function () {
      $(notif).css('display', 'none');
    }, 1000 * (Number(duration) + (1 + .4)));
    setTimeout(function () {
      $(notif).remove();
    }, 1000 * (Number(duration) + (2 + .4)));
    $(notif).on('click', function (){ 
      if (validated.callback) {
        validated.callback()
      }
      if (dismissClick) {
        dismiss(notif); 
      }
    });
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
    setToggle: setToggle,
    setStacking: setStacking
  };

  return alert;
}());

module.exports = cheers;
