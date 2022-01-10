export default class EnterOnViewport {
    selector: NodeListOf<HTMLElement>;
    event: string;
    constructor(selector: string, event?: string);
    observe(): void;
    dispatchEvent(selector: HTMLElement): void;
}
