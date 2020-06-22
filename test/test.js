describe('dh-addeventlistener', function tests() {
    var dh = require('../');

    var onClick = dh.onClick;
    var onFocus = dh.onFocus;
    var onBlur = dh.onBlur;
    var onKeyDown = dh.onKeyDown;
    var onKeyUp = dh.onKeyUp;
    var generateEventFn = dh.generateEventFn;

    var assert = require('assert');

    var testNode = typeof document !== 'undefined' && document.body;

    if (! testNode) {
        function NodeList() {};

        global.NodeList = NodeList;
        global.Event = (typeof Event !== 'undefined')
                            ? Event
                            : function(type) { this.type = type; };

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

    function createNewEvent(eventName) {
        var event;

        if (typeof(Event) === 'function') {
            event = new Event(eventName);
        } else {
            event = document.createEvent('Event');
            event.initEvent(eventName, true, true);
        }

        return event;
    }

    function fireEvent(eventName) {
        var event = createNewEvent(eventName);
        testNode.dispatchEvent(event);
    }

    describe('when interact with element, check for event', function () {
        it('should listen the event', function () {
            var stub = 1;

            assert.equal(stub, 1);

            onClick(testNode, function() { stub = 'click'; });
            fireEvent('click');

            assert.equal(stub, 'click');

            onFocus(testNode, function() { stub = 'focus'; });
            fireEvent('focus');

            assert.equal(stub, 'focus')

            onBlur(testNode, function() { stub = 'blur'; });
            fireEvent('blur');

            assert.equal(stub, 'blur');

            onKeyDown(testNode, function() { stub = 'keydown'; });
            fireEvent('keydown');

            assert.equal(stub, 'keydown');

            onKeyUp(testNode, function() { stub = 'keyup'; });
            fireEvent('keyup');

            assert.equal(stub, 'keyup');

            var onMouseEnter = generateEventFn('mouseenter');

            onMouseEnter(testNode, function() { stub = 'mouseenter'; });
            fireEvent('mouseenter');

            assert.equal(stub, 'mouseenter');
        });
    });

    describe('when interact with array of elements and array of functions, check for event', function () {
        it('should listen the event', function () {
            var stub = 1;
            assert.equal(stub, 1);

            onClick([testNode], [function() { stub = 'clack'; }]);
            fireEvent('click');

            assert.equal(stub, 'clack');

            onFocus([testNode], [function() { stub = 'focus'; }]);
            fireEvent('focus');

            assert.equal(stub, 'focus');
        });
    });

    describe('when interact with intruder', function () {
        it('should be resilient', function () {
            var stub = 1;

            onKeyUp(null, function() { stub = 'keyup'; });
            onKeyUp([null], function() { stub = 'keyup'; });
            onKeyUp(undefined, function() { stub = 'keyup'; });
            onKeyUp([undefined], function() { stub = 'keyup'; });
            onKeyUp({}, function() { stub = 'keyup'; });
            onKeyUp([{}], function() { stub = 'keyup'; });
        });
    });
});
