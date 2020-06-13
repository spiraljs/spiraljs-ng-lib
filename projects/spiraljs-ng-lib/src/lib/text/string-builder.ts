export class SpiralStringBuilder {
    content: string[];

    constructor() {
        this.content = [];
    }

    append(val: string) {
        this.content.push(val);
    }

    appendEmptyLine() {
        this.content.push("");
    }

    toString(): string {
        return this.content.join("\n");
    }
}