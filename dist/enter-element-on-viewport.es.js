class EnterOnViewport {
  selector;
  event;
  constructor(selector, event = "elementOnViewport") {
    this.selector = document.querySelectorAll(selector);
    this.event = event;
    this.observe();
  }
  observe() {
    const observeroptions = {
      rootMargin: "50px"
    };
    const observer = new IntersectionObserver((elements, observer2) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          const target = element.target;
          this.dispatchEvent(target);
          observer2.unobserve(target);
        }
      });
    }, observeroptions);
    this.selector.forEach((element) => {
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
//# sourceMappingURL=enter-element-on-viewport.es.js.map
