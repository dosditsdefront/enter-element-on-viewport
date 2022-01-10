export default class EnterOnViewport {
    selector:NodeListOf<HTMLElement>
    event:string
    constructor(selector:string, event = 'elementOnViewport') {
        this.selector = document.querySelectorAll(selector)
        this.event = event
        this.observe()
    }

    observe() :void{			
        const observeroptions = {
            rootMargin: '50px',
        }

        const observer = new IntersectionObserver((elements, observer) => {
            elements.forEach((element) => {
                if (element.isIntersecting) {
                    const target = element.target as HTMLElement
                    this.dispatchEvent(target)
                    observer.unobserve(target)
                }
            })
        }, observeroptions)

        this.selector.forEach((element) => {
            observer.observe(element)
        })
    }

    dispatchEvent(selector:HTMLElement):void {
        const evt = new CustomEvent(this.event, {
            detail: {
                selector,
            },
        })
        document.body.dispatchEvent(evt)
    }
}