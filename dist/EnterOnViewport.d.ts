export default class EnterOnViewport {
    selector: NodeListOf<HTMLElement>;
    event: string;
    rootMargin: string;
    constructor(selector: string, event?: string, rootMargin?: string);
    observe(): void;
    dispatchEvent(selector: HTMLElement): void;
}
