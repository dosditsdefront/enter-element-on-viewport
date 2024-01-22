(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.enterElementOnViewport = factory());
})(this, (function () {
    var EnterOnViewport = /*#__PURE__*/function () {
      function EnterOnViewport(selector, event, rootMargin) {
        if (event === void 0) {
          event = 'elementOnViewport';
        }
        if (rootMargin === void 0) {
          rootMargin = '50px';
        }
        this.selector = void 0;
        this.event = void 0;
        this.rootMargin = void 0;
        this.selector = document.querySelectorAll(selector);
        this.event = event;
        this.rootMargin = rootMargin;
        this.observe();
      }
      var _proto = EnterOnViewport.prototype;
      _proto.observe = function observe() {
        var _this = this;
        var observeroptions = {
          rootMargin: this.rootMargin
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

    return EnterOnViewport;

}));
//# sourceMappingURL=enter-element-on-viewport.umd.js.map
