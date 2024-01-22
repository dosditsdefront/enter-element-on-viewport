class EnterOnViewport {
  constructor(selector, event = 'elementOnViewport', rootMargin = '50px') {
    this.selector = void 0;
    this.event = void 0;
    this.rootMargin = void 0;
    this.selector = document.querySelectorAll(selector);
    this.event = event;
    this.rootMargin = rootMargin;
    this.observe();
  }
  observe() {
    const observeroptions = {
      rootMargin: this.rootMargin
    };
    const observer = new IntersectionObserver((elements, observer) => {
      elements.forEach(element => {
        if (element.isIntersecting) {
          const target = element.target;
          this.dispatchEvent(target);
          observer.unobserve(target);
        }
      });
    }, observeroptions);
    this.selector.forEach(element => {
      observer.observe(element);
    });
  }
  dispatchEvent(selector) {
    const evt = new CustomEvent(this.event, {
      detail: {
        selector
      }
    });
    document.body.dispatchEvent(evt);
  }
}

export { EnterOnViewport as default };
//# sourceMappingURL=enter-element-on-viewport.modern.js.map
