# cheers-alert
simple website notification


### Install
```js
$ npm install cheers-alert --save
```


### Usage
```js
import cheers from 'cheers-alert';

cheers.success({
    title: 'Warning',
    message: 'Validation error',
    alert: 'slideleft',
    icon: 'fa-user',
    duration: 3
});
```

### Configuring .duration
set the .duration one-time to avoid redundancy.
```js
cheers.setDuration(10); //sets all notification's transition dynamically.
```

### Disable close onClick
set to false to prevent closing onClick.
```js
cheers.setToggle(false); //defaults to true when not set.
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
  - add tests.
  - more alert styles.
