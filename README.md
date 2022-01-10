# enter-element-on-viewport
Subscribe an array of dom elements and emit event when enter to a viewport

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
