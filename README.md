# cheers-alert
simple website notification


### Install
```js
$ npm install cheers-alert --save
```


### Usage
```js
import cheers from 'cheers-alert';

cheers.success(
    title: 'Warning',
    message: 'Validation error',
    alert: 'slideleft',
    icon: 'fa-user',
    duration: 3
);
```

### Configuring .duration
set the .duration one-time to avoid redundancy
```js
cheers.setDuration(10); //sets all notification's transition dynamically.
```

### Notification Types
  - success
  - warning
  - error
  - info

### Alert Types
  - slideleft
  - fadein

### Options
  - title - header(optional).
  - message - message or content.
  - alert - transition of notification.
  - icon - uses font awesome(optional).
  - duration - transition duration(defaults to 4) in seconds.

### To Do
  - add tests.
  - more alert styles.
