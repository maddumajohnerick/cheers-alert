var expect = require("chai").expect;
var cheerio = require('cheerio');
var cheers = require('../src/index.js');

let $ = cheerio.load('<!doctype html><html><body></body></html>');

$.html();

describe("Our first test", () => {
  it("should pass", () => {
    cheers.default.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
      duration: 3
    });
    expect(true).to.equal(true);
  });
});


//global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
