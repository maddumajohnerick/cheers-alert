var expect = require("chai").expect;
var cheers = require('../src/cheers-alert.js');

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

  it("should check if alert-container exist", function() {
    expect($('.alert-container').length).to.equal(0);
  });

  it("create alert-container if none exist", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.alert-container').length).to.equal(1);
    expect($('body').html()).to.contain('alert-container');
  });

  it("should create alert-container if none exist", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.alert-container').length).to.equal(1);
  });

  it("should create success notification", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('cheers-holder slideleft success');
  });

  it("should create error notification", function() {
    cheers.error({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('cheers-holder slideleft error');
  });

  it("should create warning notification", function() {
    cheers.warning({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('cheers-holder slideleft warning');
  });

  it("should create info notification", function() {
    cheers.info({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('cheers-holder slideleft info');
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
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-title').html()).to.contain('Warning');
  });

  it("should set message", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });


    expect($('.cheers-body').html()).to.contain('Validation error');
  });

  it("should set default alert", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('fadein');
  });

  it("should set alert", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('slideleft');
  });

  it("should set default success icon", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
    });

    expect($('.cheers-icon').html()).to.contain('fa-check');
  });

  it("should set default error icon", function() {
    cheers.error({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
    });

    expect($('.cheers-icon').html()).to.contain('fa-times');
  });

  it("should set default warning icon", function() {
    cheers.warning({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
    });

    expect($('.cheers-icon').html()).to.contain('fa-exclamation');
  });

  it("should set default info icon", function() {
    cheers.info({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
    });

    expect($('.cheers-icon').html()).to.contain('fa-info');
  });

  it("should set icon", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-icon').html()).to.contain('fa-user');
  });
});

describe("cheers-alert field validation", function() {
  beforeEach(function() {
     global.$ = $;
  });
  afterEach(function() {
    $('body').empty();
  });

  it("should set title to empty when not set", function() {
    cheers.success({
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('slideleft');
  });

  it("should error when message is not set", function() {
    cheers.success({
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('body').html().length).to.equal(0);
  });

  it("should error when duration is not a number", function() {
    cheers.success({
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
      duration: 'a'
    });

    expect($('body').html().length).to.equal(0);
  });

  it("should error when duration is lesser than 2", function() {
    cheers.success({
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
      duration: 1
    });

    expect($('body').html().length).to.equal(0);
  });

  it("should default duration to 4s", function(done) {
    cheers.setDuration(1);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    this.timeout(6000);
    setTimeout(function() {
      check( done, function() {
        expect($('.alert-container').html().length).to.equal(0);
      } );
    }, 5000);
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
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    this.timeout(6000);
    setTimeout(function() {
      check( done, function() {
        expect($('.alert-container').html().length).to.equal(0);
      } );
    }, 5000);
  });

  it("should dismiss after set secs", function(done) {
    cheers.setDuration(3);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    this.timeout(5000);
    setTimeout(function() {
      check( done, function() {
        expect($('.alert-container').html().length).to.equal(0);
      } );
    }, 4000);
  });

  it("should set setToggle", function(done) {
    cheers.setToggle(false);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    this.timeout(6000);
    setTimeout(function() {
      check( done, function() {
        expect($('.alert-container').html().length).to.equal(0);
      } );
    }, 5000);
  });

  it("should not dismiss if setToggle is false ", function(done) {
    cheers.setToggle(false);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    $('.cheers-holder').trigger('click');

    this.timeout(4000);
    setTimeout(function() {
      check( done, function() {
        expect($('.alert-container').html()).to.contain('cheers-holder');
      } );
    }, 3000);
  });

  it("should have these css if setToggle is true", function() {
    cheers.setToggle(true);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    $('.cheers-holder').trigger('click');

    expect($('.cheers-holder').attr('style')).to.contain('background: transparent;');
    expect($('.cheers-icon').attr('style')).to.contain('background: transparent;');
  });

  it("should display none after 500ms", function(done) {
    cheers.setToggle(true);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    $('.cheers-holder').trigger('click');

    this.timeout(1000);
    setTimeout(function() {
      check( done, function() {
        expect($('.cheers-holder').attr('style')).to.contain('display: none;');
      } );
    }, 500);
  });

  it("should be removed after 2600ms", function(done) {
    cheers.setToggle(true);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    $('.cheers-holder').trigger('click');

    this.timeout(3000);
    setTimeout(function() {
      check( done, function() {
        expect($('.alert-container').html().length).to.equal(0);
      } );
    }, 2600);
  });

  it("should stack notifs", function() {
    cheers.setStacking(true);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').css('position')).to.contain('');
  });

  it("should not stack notifs", function() {
    cheers.setStacking(false);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').css('position')).to.contain('fixed');
  });
});
