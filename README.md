<p align="center">
  <a href="https://github.com/borracciaBlu/dh-addeventlistener/" target="_blank">
    <img src="https://user-images.githubusercontent.com/2061731/237676043-b509943c-7478-41b9-bb79-03078e75bd13.svg" width="240px" height="55px" alt="dh-addeventlistener" />
  </a>

  <br>
  <span align="center">
    Helpers functions to facilitate event listener on DOM elements.
  </span>
</p>

<p dir="auto"  align="center">
    <a href="https://badge.fury.io/js/%40borracciablu%2Fdh-addeventlistener"><img src="https://badge.fury.io/js/%40borracciablu%2Fdh-addeventlistener.svg" alt="npm version"></a>
    <a href="https://coveralls.io/github/borracciaBlu/dh-addeventlistener?branch=master"><img src="https://coveralls.io/repos/github/borracciaBlu/dh-addeventlistener/badge.svg?branch=master" alt="Coverage Status"></a>
    <a href="https://github.com/borracciaBlu/dh-addeventlistener/actions?query=workflow%3Abuild-test"><img src="https://github.com/borracciaBlu/dh-addeventlistener/workflows/build-test/badge.svg" alt="Build Status"></a>
    <a href="https://github.com/borracciaBlu/dh-addeventlistener/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg" alt="License"></a>
</p>

<p dir="auto"  align="center">
	<a href="https://saucelabs.com/u/borracciaBlu-dh-addeventlistener"><img src="https://saucelabs.com/browser-matrix/borracciaBlu-dh-addeventlistener.svg" alt="Sauce Test Status"></a>
</p>

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

### onBlur(itmList, clbList)
```js
var itm = document.querySelectorAll('.btn');
var clb = () => console.log('blur');
onBlur(itm, clb);
```

### onKeyUp(itmList, clbList)
```js
var itm = document.querySelectorAll('.btn');
var clb = () => console.log('key up');
onKeyUp(itm, clb);
```

### onKeyDown(itmList, clbList)
```js
var itm = document.querySelectorAll('.btn');
var clb = () => console.log('key down');
onKeyDown(itm, clb);
```

### onChange(itmList, clbList)
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