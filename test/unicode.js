'use strict';

var characters = require('./fixtures/emoji-characters.js');
var unicode = require('../parsers/unicode-and-emoji.js');
var assert = require('assert');

it('parseOne emoji', () => {
  characters.forEach(function (e) {
    var result = unicode.parseOne(e);

    assert.strictEqual(result, e);
  });
});

it('parse string that includes emoji', () => {
  characters.forEach(function (e) {
    var result = unicode.parse(`abcd${e}fg`);

    assert.strictEqual(result[0], 'a');
    assert.strictEqual(result[1], 'b');
    assert.strictEqual(result[2], 'c');
    assert.strictEqual(result[3], 'd');
    assert.strictEqual(result[4], e);
    assert.strictEqual(result[5], 'f');
    assert.strictEqual(result[6], 'g');
  });
});

it('parse unicode string', () => {
  var result = unicode.parse('Testing «ταБЬℓσ»: 1<2 & 4+1>3, now 20% off!');

  assert.strictEqual(result[0], 'T');
});

it('parseOne fail empty string', () => {
  var result = unicode.parseOne('');

  assert.strictEqual(result, false);
});

it('parse empty string', () => {
  var result = unicode.parse('');

  assert.deepEqual(result, []);
});

it('parse fail broken string', () => {
  var result = unicode.parse('\uDC00\uDC01');

  assert.strictEqual(result, false);
});
