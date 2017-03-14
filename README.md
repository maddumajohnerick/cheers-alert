# cheers-alert
simple website notification

[![Build Status](https://travis-ci.org/maddumajohnerick/cheers-alert.svg?branch=master)](https://travis-ci.org/maddumajohnerick/cheers-alert)
[![Coverage Status](https://coveralls.io/repos/github/maddumajohnerick/cheers-alert/badge.svg?branch=master)](https://coveralls.io/github/maddumajohnerick/cheers-alert?branch=master)
[![Code Climate](https://lima.codeclimate.com/github/maddumajohnerick/cheers-alert/badges/gpa.svg)](https://lima.codeclimate.com/github/maddumajohnerick/cheers-alert)

![Demo Animation](https://media.giphy.com/media/xUA7bb2xFCGG659ofS/source.gif)

[Demo Page](https://maddumajohnerick.github.io/cheers-alert/examples/)

### Install
#### NPM
```js
$ npm install cheers-alert --save
```
#### Bower
```js
$ bower install cheers-alert --save
```

### Usage
```js
import cheers from 'cheers-alert';
import 'cheers-alert/src/cheers-alert.css'; //load style
import 'font-awesome/css/font-awesome.min.css'; //load font-awesome

cheers.success({
    title: 'Warning',
    message: 'Validation error',
    alert: 'slideleft',
    icon: 'fa-user',
    duration: 3
});
```

### Properties
  - title - [String] header(optional).
  - message - [String] message or content(required).
  - alert - [String] transition of notification(defaults to fadein).
  - icon - [String] uses font awesome(optional).
  - duration - [Number] transition duration(defaults to 4) in seconds.

### Notification Types
  - success
  - warning
  - error
  - info

### Alert Types
  - slideleft
  - fadein

### Configuring .duration
set the .duration one-time to avoid redundancy. minimum of 2(seconds).
```js
cheers.setDuration(10); //sets all notification's transition.
```

### Enable close onClick
set to false to prevent closing onClick.
```js
cheers.setToggle(false); //defaults to true when not set.
```

### Enable stacking
set false true to disable stacking of notifications.
```js
cheers.setStacking(false); //defaults to true when not set.
```

### Customize CSS
overide this class to modify styles.
```html
<div class="cheer-holder">
    <div class="cheers-icon"></div>
    <div class="cheers-body">
        <div class="cheers-title"></div>
    </div>
</div>
```

### To Do
  - more alert styles.
