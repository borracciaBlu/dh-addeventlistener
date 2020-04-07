function addEventListenerEvent(eventType, itm, callbacks) {
    itm &&
    itm.addEventListener &&
    itm.addEventListener(eventType, callbacks);
}

function getArrayLike(itmList) {
    return (itmList instanceof NodeList || Array.isArray(itmList))
        ? itmList
        : new Array(itmList);
}

function getArray(itmList) {
    return Array.isArray(itmList)
        ? itmList
        : new Array(itmList);
}

/**
 * Generate the function to add event listiner
 *
 * @example
 * var itmList = document.querySelectorAll('.btn');
 * var callback = () => console.log('click');
 * generateEventFn('click')(itmList, callback);
 *
 * @param String action
 * @return Function
 */
function generateEventFn(eventType) {
    return function(itmList, clbList) {
        itmList = getArrayLike(itmList);
        clbList = getArray(clbList);

        for (var i = 0; i <= itmList.length - 1; i++) {
            for (var a = 0; a <= clbList.length - 1; a++) {
                addEventListenerEvent(eventType, itmList[i], clbList[a]);
            }
        }
    };
}

/**
 * Add event listener for focus to a Node
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var clb = [(event) => console.log('focus')];
 * onFocus(itm, clb);
 *
 * @param NodeList | Node itmList
 * @param Function[] | Function clbList
 */
var onFocus = generateEventFn('focus');

/**
 * Add event listener for blur to a Node
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var clb = [(event) => console.log('blur')];
 * onBlur(itm, clb);
 *
 * @param NodeList | Node itmList
 * @param Function[] | Function clbList
 */
var onBlur = generateEventFn('blur');

/**
 * Add event listener for click to a Node
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var clb = [(event) => console.log('click')];
 * onBlur(itm, clb);
 *
 * @param NodeList | Node itmList
 * @param Function[] | Function clbList
 */
var onClick = generateEventFn('click');

/**
 * Add event listener for keydown to a Node
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var clb = [(event) => console.log('key down')];
 * onBlur(itm, clb);
 *
 * @param NodeList | Node itmList
 * @param Function[] | Function clbList
 */
var onKeyDown = generateEventFn('keydown');

/**
 * Add event listener for keyup to a Node
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var clb = [(event) => console.log('key up')];
 * onBlur(itm, clb);
 *
 * @param NodeList | Node itmList
 * @param Function[] | Function clbList
 */
var onKeyUp = generateEventFn('keyup');


module.exports.generateEventFn = generateEventFn;
module.exports.onFocus = onFocus;
module.exports.onBlur = onBlur;
module.exports.onClick = onClick;
module.exports.onKeyDown = onKeyDown;
module.exports.onKeyUp = onKeyUp;
