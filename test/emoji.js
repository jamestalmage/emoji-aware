'use strict';

var characters = require('./fixtures/emoji-characters.js');
var emoji = require('../parsers/emoji.js');
var isEmoji = require('../lib/is-emoji.js');
var assert = require('power-assert');

characters.forEach(function (e) {
  it('parse one emoji ' + e, function () {
    assert.strictEqual(emoji.parse(e)[0], e);
  });

  it('parse two emoji ' + e + e, function () {
    var result = emoji.parse(e + e);

    assert.strictEqual(result[0], e);
    assert.strictEqual(result[1], e);
  });

  it('parseOne emoji ' + e, function () {
    assert.strictEqual(emoji.parseOne(e), e);
  });

  it('parse fail on emoji with non-emoji a' + e + 'a', function () {
    var result = emoji.parse(`a${e}a`);

    assert.strictEqual(result, false);
  });

  it('isEmoji emoji', function () {
    assert.strictEqual(isEmoji(e), true);
  });
});

it('parseOne fail non-emoji', function () {
  assert.strictEqual(emoji.parseOne('a'), false);
});

it('isEmoji fail on non-emoji', function () {
  assert.strictEqual(isEmoji('a'), false);
});
