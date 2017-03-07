var expect = require("chai").expect;
var cheers = require('../src/index.js');

var jsdom = require('jsdom').jsdom;
var document = jsdom('<div/');
var window = document.defaultView;
var $ = jQuery = require('jquery')(window);

function check( done, f ) {
  try {
    f();
    done();
  } catch( e ) {
    done( e );
  }
};

describe("cheers-alert notification", function() {
  beforeEach(function() {
     global.$ = $;
  });
  afterEach(function() {
    $('body').empty();
  });

  it("should create success notification", function() {
    cheers.default.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('body').html()).to.contain('cheers-holder slideleft success');
  });

  it("should create error notification", function() {
    cheers.default.error({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('body').html()).to.contain('cheers-holder slideleft error');
  });

  it("should create warning notification", function() {
    cheers.default.warning({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('body').html()).to.contain('cheers-holder slideleft warning');
  });

  it("should create info notification", function() {
    cheers.default.info({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('body').html()).to.contain('cheers-holder slideleft info');
  });
});


describe("cheers-alert properties", function() {
  beforeEach(function() {
     global.$ = $;
  });
  afterEach(function() {
    $('body').empty();
  });

  it("should set title", function() {
    cheers.default.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').html()).to.contain('Warning');
  });

  it("should set message", function() {
    cheers.default.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-body').html()).to.contain('Validation error');
  });

  it("should set default alert", function() {
    cheers.default.success({
      title: 'Warning',
      message: 'Validation error',
      icon: 'fa-user',
    });

    expect($('body').html()).to.contain('fadein');
  });

  it("should set alert", function() {
    cheers.default.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('body').html()).to.contain('slideleft');
  });

  it("should set default icon", function() {
    cheers.default.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
    });

    expect($('.cheers-icon').html()).to.contain('fa-check');
  });

  it("should set icon", function() {
    cheers.default.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-icon').html()).to.contain('fa-user');
  });
});

describe("cheers-alert functionalities", function() {
  beforeEach(function() {
     global.$ = $;
  });
  afterEach(function() {
    $('body').empty();
  });

  it("should dismiss after 4-5s", function(done) {
    cheers.default.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    this.timeout(6000);
    setTimeout(function() {
      check( done, function() {
        expect($('body').html().length).to.equal(0);
      } );
    }, 5000);
  });

  it("should dismiss after set secs", function(done) {
    cheers.default.setDuration(3);

    cheers.default.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    this.timeout(5000);
    setTimeout(function() {
      check( done, function() {
        expect($('body').html().length).to.equal(0);
      } );
    }, 4000);
  });
});
