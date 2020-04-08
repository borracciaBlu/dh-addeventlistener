'use strict';

var test = require('tape');
var {onClick, onFocus, onBlur, onKeyDown, onKeyUp, generateEventFn} = require('./');

function fireEvent(eventName) {
    var event = new Event(eventName);
    document.body.dispatchEvent(event);
}


test('when interact with element, check for event', function (t) {
    var stub = 1;

    t.equal(stub, 1);

    onClick(document.body, () => stub = 'click');
    fireEvent('click');

    t.equal(stub, 'click');

    onFocus(document.body, () => stub = 'focus');
    fireEvent('focus');

    t.equal(stub, 'focus')

    onBlur(document.body, () => stub = 'blur');
    fireEvent('blur');

    t.equal(stub, 'blur');

    onKeyDown(document.body, () => stub = 'keydown');
    fireEvent('keydown');

    t.equal(stub, 'keydown');

    onKeyUp(document.body, () => stub = 'keyup');
    fireEvent('keyup');

    t.equal(stub, 'keyup');

    var onMouseEnter = generateEventFn('mouseenter');

    onMouseEnter(document.body, () => stub = 'mouseenter');
    fireEvent('mouseenter');

    t.equal(stub, 'mouseenter');

    t.end();
});

test('when interact with array of elements and array of functions, check for event', function (t) {
    var stub = 1;
    t.equal(stub, 1);

    onClick([document.body], [() => stub = 'clack']);
    fireEvent('click');

    t.equal(stub, 'clack');

    onFocus([document.body], [() => stub = 'focus']);
    fireEvent('focus');

    t.equal(stub, 'focus');

    t.end();
});

test('when interact with intruder', function (t) {
    var stub = 1;

    onKeyUp(null, () => stub = 'keyup');
    onKeyUp([null], () => stub = 'keyup');
    onKeyUp(undefined, () => stub = 'keyup');
    onKeyUp([undefined], () => stub = 'keyup');
    onKeyUp({}, () => stub = 'keyup');
    onKeyUp([{}], () => stub = 'keyup');

    t.end();
});
