class EnterOnViewport {
    constructor(selector, event = 'elementOnViewport') {
        this.selector = (typeof selector !== 'string') ? this.selector : document.querySelectorAll(this.selector)
        this.event = event
        this.observe()
    }

    observe() {			
            let observeroptions = {
                rootMargin: '50px',
            }

            const observer = new IntersectionObserver((elements, observer) => {
                elements.forEach((element) => {
                    if (element.isIntersecting) {
                        const target = element.target
                        this.dispatchEvent(target)
                        observer.unobserve(target)
                    }
                })
            }, observeroptions)

            this.selector.forEach((element) => {
                observer.observe(element)
            })
    }

    dispatchEvent(selector) {
        const evt = new CustomEvent(this.elementOnViewport, {
            detail: {
                selector,
            },
        })
        document.body.dispatchEvent(evt)
    }
}

export default EnterOnViewport