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

### Notification Types
  - slideleft
  - fadein

### Alert Types
  - success
  - warning
  - error
  - info

### Options
  - title - header(optional).
  - message - message or content.
  - alert - transition of notification.
  - icon - uses font awesome(optional).
  - duration - transition duration(defaults to 4) in seconds.

### Configuring .duration
```js
cheers.setDuration(10); //sets the duration to 10 seconds.
```

### To Do
  - add tests.
  - more alert styles.
