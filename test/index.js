var expect = require("chai").expect;
var cheers = require('../src/index.js');

var jsdom = require('jsdom').jsdom;
var document = jsdom('<div/');
var window = document.defaultView;
var $ = jQuery = require('jquery')(window);

describe("cheers-alert", () => {
  beforeEach(function() {
     global.$ = $;
  });

  it("should create notification", () => {
    cheers.default.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
      duration: 3
    });

    expect($('body').html()).to.contain('cheers-holder slideleft success');
  });
});


//global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
