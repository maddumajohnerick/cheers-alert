# cheers-alert
simple website notification

[![Build Status](https://travis-ci.org/maddumajohnerick/cheers-alert.svg?branch=master)](https://travis-ci.org/maddumajohnerick/cheers-alert)
[![Coverage Status](https://coveralls.io/repos/github/maddumajohnerick/cheers-alert/badge.svg?branch=master)](https://coveralls.io/github/maddumajohnerick/cheers-alert?branch=master)
[![Code Climate](https://lima.codeclimate.com/github/maddumajohnerick/cheers-alert/badges/gpa.svg)](https://lima.codeclimate.com/github/maddumajohnerick/cheers-alert)

### Install
```js
$ npm install cheers-alert --save
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
  - title - header(optional).
  - message - message or content.
  - alert - transition of notification(defaults to fadein).
  - icon - uses font awesome(optional).
  - duration - transition duration(defaults to 4) in seconds.

### Notification Types
  - success
  - warning
  - error
  - info

### Alert Types
  - slideleft
  - fadein

### Configuring .duration
set the .duration one-time to avoid redundancy.
```js
cheers.setDuration(10); //sets all notification's transition.
```

### Disable close onClick
set to false to prevent closing onClick.
```js
cheers.setToggle(true); //defaults to false when not set.
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
