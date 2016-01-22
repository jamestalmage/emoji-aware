'use strict';

var characters = require('./fixtures/emoji-characters.js');
var consoleFormat = require('../lib/console-format.js');
var assert = require('power-assert');

it('consoleFormat emoji', () => {
  characters.forEach(function (e) {
    var result = consoleFormat(`${e}:`);

    assert.strictEqual(result, `${e} :`);
  });
});
