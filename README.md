# enter-element-on-viewport
Trigger event when element reach the viewport for the first time 

## Features & characteristics:
* NO dependencies
* Choose event name
* Event returns the selector of element
* JS Vanilla

## Install & basic usage

```bash
npm install @dosditsdefront/enter-element-on-viewport
```

```javascript
new EnterOnViewport('.dom-element-or-array', 'eventName')
document.body.addEventListener('eventName', (ev) => {
    // ev.detail.selector
})
```
