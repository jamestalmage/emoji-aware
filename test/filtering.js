'use strict';

var characters = require('./fixtures/emoji-characters.js');
var utilities = require('../emoji-aware.js');
var assert = require('assert');

it('onlyEmoji fail broken string', () => {
  var result = utilities.onlyEmoji('\uDC00\uDC01');

  assert.strictEqual(result, false);
});

it('withoutEmoji fail broken string', () => {
  var result = utilities.withoutEmoji('\uDC00\uDC01');

  assert.strictEqual(result, false);
});

it('onlyEmoji', () => {
  characters.forEach(function (e) {
    var result = utilities.onlyEmoji(`abcd${e}fg`);

    assert.deepEqual(result, [e]);
  });
});

it('withoutEmoji', () => {
  characters.forEach(function (e) {
    var result = utilities.withoutEmoji(`abcd${e}fg`);

    assert.deepEqual(result, ['a', 'b', 'c', 'd', 'f', 'g']);
  });
});
