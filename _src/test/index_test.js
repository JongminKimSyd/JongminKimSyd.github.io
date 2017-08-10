var jsdom = require('jsdom'),
    fs = require('fs'),
    assert = require('chai').assert,
    expect = require('chai').expect,
    file = fs.readFileSync('../index.html').toString();

describe('Your HTML Page', function () {
    before(function() {
        this.jsdom = require('jsdom-global')(file);
    });

    it('has document', function () {
        var div = document.createElement('div')
        expect(div.nodeName).eql('DIV')
    })

    it('should have a title @title', function () {
        assert.equal(document.getElementsByTagName('title').length, 1, 'Make sure to create a `title` element.');
    });

    it('should have a title that contains your name @title', function () {
        assert.notEqual(document.getElementsByTagName('title'), '', 'Make sure to set the content of the `title` element to your Code School username.');
    });

    it('should have a h1 element @h1', function () {
        assert.isAtLeast(document.getElementsByTagName('h1').length, 1, "Make sure to create an `h1` element.");
    });

    it('should have content in the h1 element @h1', function () {
        assert.equal(document.getElementsByTagName('h1')[0].textContent, 'Welcome to Harp.', "Make sure to set the content of your `h1` element to 'Welcome to Harp.'.");
    });

    it('should have a ul @ul', function () {
        assert.isAtLeast(window.$('ul').length, 1, "Make sure to create a `ul` element.");
    });

    it('should have at least 2 li elements @li', function () {
        assert.isAtLeast(window.$('li').length, 2, "Make sure to create at least 2 `li` elements.");
    });

    it('should have content for all `li` elements. @li', function () {
        var message = "Make sure to include something you want to learn for each `li` element."
        assert.notEqual(window.$('li:first').text(), '', message);
        assert.notEqual(window.$('li:last').text(), '', message);
    });
});
