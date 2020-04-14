'use strict';

var test = require('tape');
var {onClick, onFocus, onBlur, onKeyDown, onKeyUp, generateEventFn} = require('./');

var testNode = typeof document !== 'undefined' && document.body;

if (! testNode) {
    class NodeList {}
    class Event {
        constructor(type) {
            this.type = type;
        }
    }

    global.NodeList = NodeList;
    global.Event = Event;

    var testNode = (function() {
        function addEventListenerFn(evType, callback) {
            typeof o.eventCallbacks[evType] !== 'undefined' &&
            o.eventCallbacks[evType].push(callback);
        }

        function dispatchEventFn(event) {
            if (typeof o.eventCallbacks[event.type] === 'undefined') {
                return;
            }

            for (var i = o.eventCallbacks[event.type].length - 1; i >= 0; i--) {
                // Call widthout pass any argument
                o.eventCallbacks[event.type][i]();
            }
        }

        var o = {};

        o.eventCallbacks = {
            click: [],
            focus: [],
            blur: [],
            keyup: [],
            keydown: [],
            mouseenter: [],
        };

        o.addEventListener = addEventListenerFn;
        o.dispatchEvent = dispatchEventFn;

        return o;
    })();
}

function fireEvent(eventName) {
    var event = new Event(eventName);
    testNode.dispatchEvent(event);
}


test('when interact with element, check for event', function (t) {
    var stub = 1;

    t.equal(stub, 1);

    onClick(testNode, () => stub = 'click');
    fireEvent('click');

    t.equal(stub, 'click');

    onFocus(testNode, () => stub = 'focus');
    fireEvent('focus');

    t.equal(stub, 'focus')

    onBlur(testNode, () => stub = 'blur');
    fireEvent('blur');

    t.equal(stub, 'blur');

    onKeyDown(testNode, () => stub = 'keydown');
    fireEvent('keydown');

    t.equal(stub, 'keydown');

    onKeyUp(testNode, () => stub = 'keyup');
    fireEvent('keyup');

    t.equal(stub, 'keyup');

    var onMouseEnter = generateEventFn('mouseenter');

    onMouseEnter(testNode, () => stub = 'mouseenter');
    fireEvent('mouseenter');

    t.equal(stub, 'mouseenter');

    t.end();
});

test('when interact with array of elements and array of functions, check for event', function (t) {
    var stub = 1;
    t.equal(stub, 1);

    onClick([testNode], [() => stub = 'clack']);
    fireEvent('click');

    t.equal(stub, 'clack');

    onFocus([testNode], [() => stub = 'focus']);
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
