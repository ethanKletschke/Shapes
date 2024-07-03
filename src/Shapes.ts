export interface Shape {
    getArea: () => number;
    toString: () => string;
}

export class Rectangle implements Shape {
    public constructor(
        protected readonly width: number,
        protected readonly height: number
    ) {}

    public getArea(): number {
        return this.height * this.width;
    }

    public toString(): string {
        return `Rectangle[width=${this.width},height=${this.height}]`;
    }
}

export class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}

export class Triangle implements Shape {
    public constructor(
        protected readonly base: number,
        protected readonly height: number
    ) {}

    public getArea(): number {
        return 0.5 * this.base * this.height;
    }

    public toString(): string {
        return `Triangle[base=${this.base},height=${this.height}]`;
    }
}
