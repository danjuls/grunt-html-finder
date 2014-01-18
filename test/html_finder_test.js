'use strict';

var grunt = require('grunt');
var fs = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.html_finder = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  options: function (test) {
    test.expect(1);
    var regex = '\/(.*)';
    var actual = grunt.file.expand('dev/test.html');
    var expected = grunt.file.expand('test/expected/test.html');
    
    test.notEqual(actual, expected, 'For the time just a lame test');

    test.done();
  }
};
