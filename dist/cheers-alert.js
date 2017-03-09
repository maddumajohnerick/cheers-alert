(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.cheers = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    duration = secs;
  }

  function setToggle(toggle) {
    dismissClick = toggle;
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
    var alert = data.alert || 'fadein';
    duration = data.duration || duration;

    if (!icon) {
      icon = defaultIcons[type];
    }

    var container = $('<div class="cheers-holder ' + alert + ' ' + type + '"><div class="cheers-icon"><i class="fa ' + icon + '" aria-hidden="true"></i></div><div class="cheers-body">'+ (data.title ? '<div class="cheers-title">' + data.title + '</div>' : '') + '' + data.message + '</div><div class="cheers-overlay"></div></div>');
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

},{}]},{},[1])(1)
});