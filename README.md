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
);
```

### Types
  - success
  - warning
  - error
  - info

### Options
  - title - header(optional).
  - message - message or content.
  - alert - transition of notification.
  - icon - uses font awesome(optional).
