# dh-addeventlistener
[![Build Status](https://travis-ci.org/borracciaBlu/dh-addeventlistener.svg?branch=master)](https://travis-ci.org/borracciaBlu/dh-addeventlistener)
[![dependencies Status](https://david-dm.org/borracciaBlu/dh-addeventlistener/status.svg)](https://david-dm.org/borracciaBlu/dh-addeventlistener)
[![devDependencies Status](https://david-dm.org/borracciaBlu/dh-addeventlistener/dev-status.svg)](https://david-dm.org/borracciaBlu/dh-addeventlistener?type=dev)
[![npm version](https://badge.fury.io/js/%40borracciablu%2Fdh-addeventlistener.svg)](https://badge.fury.io/js/%40borracciablu%2Fdh-addeventlistener)
[![Coverage Status](https://coveralls.io/repos/github/borracciaBlu/dh-addeventlistener/badge.svg?branch=master)](https://coveralls.io/github/borracciaBlu/dh-addeventlistener?branch=master)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)  
Helpers functions to facilitate event listener on DOM elements.

[![Sauce Test Status](https://saucelabs.com/browser-matrix/borracciaBlu-dh-addeventlistener.svg)](https://saucelabs.com/u/borracciaBlu-dh-addeventlistener)

## Installing

`npm install @borracciablu/dh-addeventlistener`

```js
import {onClick} from '@borracciablu/dh-addeventlistener';
var {onClick, onFocus, onBlur, onKeyDown, onKeyUp, generateEventFn} = require('@borracciablu/dh-addeventlistener');
```

## API Reference

### onClick(itmList, clbList)
```js
var itm = document.querySelectorAll('.btn');
var clb = [() => console.log('click')];
onClick(itm, clb);
 ```

### onFocus(itmList, clbList)
```js
var itm = document.querySelectorAll('.btn');
var clb = () => console.log('focus');
onFocus(itm, clb);
 ```

### onBlur(itmList, clsList)
```js
var itm = document.querySelectorAll('.btn');
var clb = () => console.log('blur');
onBlur(itm, clb);
```

### onKeyUp(itmList, clsList)
```js
var itm = document.querySelectorAll('.btn');
var clb = () => console.log('key up');
onKeyUp(itm, clb);
```

### onKeyDown(itmList, clsList)
```js
var itm = document.querySelectorAll('.btn');
var clb = () => console.log('key down');
onKeyDown(itm, clb);
```

### onChange(itmList, clsList)
```js
var itm = document.querySelectorAll('.select');
var clb = () => console.log('change');
onChange(itm, clb);
```

### generateEventFn(eventType) 
In case you need an event not covered in the current api.

```js
var onMouseEnter = generateEventFn('mouseenter');
var itm = document.querySelectorAll('.btn');
var clb = () => console.log('key down');
onMouseEnter(itm, clb);
```

For the full list of `eventTypes` see [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events).


## CDN
Recommended CDN:

https://unpkg.com/@borracciablu/dh-addeventlistener@latest/dist/dh-addeventlistener.min.js

```js
var {onClick} = window.dhAddEventListener;

// Alternative syntax
var onClick = window.dhAddEventListener.onClick;
```