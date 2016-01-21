var assert = require('assert');

function add() {
    return Array.prototype.slice.call(arguments).reduce(function (prev, next) {
        return prev + next;
    }, 0);
}

describe('test add []', function () {
    var tests = [
        {args: [1, 2], expected: 3},
        {args: [1, 2, 3], expected: 6},
        {args: [1, 2, 3, 4], expected: 10}
    ];

    tests.forEach(function (test, index) {
        it('test' + index, function () {
            var res = add.apply(null, test.args);
            assert.equal(res, test.expected);
        });
    });
});
