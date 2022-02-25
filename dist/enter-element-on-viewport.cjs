var EnterOnViewport = /*#__PURE__*/function () {
  function EnterOnViewport(selector, event) {
    if (event === void 0) {
      event = 'elementOnViewport';
    }

    this.selector = void 0;
    this.event = void 0;
    this.selector = document.querySelectorAll(selector);
    this.event = event;
    this.observe();
  }

  var _proto = EnterOnViewport.prototype;

  _proto.observe = function observe() {
    var _this = this;

    var observeroptions = {
      rootMargin: '50px'
    };
    var observer = new IntersectionObserver(function (elements, observer) {
      elements.forEach(function (element) {
        if (element.isIntersecting) {
          var target = element.target;

          _this.dispatchEvent(target);

          observer.unobserve(target);
        }
      });
    }, observeroptions);
    this.selector.forEach(function (element) {
      observer.observe(element);
    });
  };

  _proto.dispatchEvent = function dispatchEvent(selector) {
    var evt = new CustomEvent(this.event, {
      detail: {
        selector: selector
      }
    });
    document.body.dispatchEvent(evt);
  };

  return EnterOnViewport;
}();

module.exports = EnterOnViewport;
//# sourceMappingURL=enter-element-on-viewport.cjs.map
