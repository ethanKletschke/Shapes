/** @module Shapes */

/**
 * The `Shape` interface is used to represent any abstract shape. It may be used
 * to define any other shape that is not included in this package. It may also
 * be used on its own, but this is not recommended, and it is preferred to rather
 * implement it into a new class, as follows:
 *
 * ```ts
 * import { Shape } from "./Shapes";
 *
 * class Hexagon implements Shape {
 *     // ...
 * }
 * ```
 *
 * @author Ethan Kletschke
 *
 * @interface Shape
 * @type {Shape}
 */
export interface Shape {
    /** Returns the area of the shape. */
    getArea: () => number;
    /** Returns the string representation of the shape's properties. */
    toString: () => string;
}

/**
 * The `Rectangle` class represents a rectangle, a polygon with 4 sides:
 * 2 longer sides, and 2 shorter sides. The opposite sides are of equal lengths.
 *
 * This class implements the "{@link Shape | `Shape`}" interface, and implements its member
 * methods of `toString()` and `getArea()`.
 * @author Ethan Kletschke
 *
 * @type {Rectangle}
 */
export class Rectangle implements Shape {
    /** Represents the rectangle's width. */
    protected readonly width: number;
    /** Represents the rectangle's height. */
    protected readonly height: number;

    /**
     * The `constructor()` method creates an instance of the `Rectangle` class. It initialises the
     * two fields of the class (`width` and `height`), or sets them to 1 if the parameters are "nullish"
     * (has a value of either `null` or `undefined`).
     * @author Ethan Kletschke
     *
     * @public
     * @param {number} width The width of the rectangle, or 1 if it is "nullish" (`null` or `undefined`).
     * @param {number} height The height of the rectangle, or 1 if it is "nullish" (`null` or `undefined`).
     */
    public constructor(width: number, height: number) {
        this.width = width ?? 1;
        this.height = height ?? 1;
    }


    /**
     * The `getArea()` method of the `Rectangle` class finds the area of the rectangle
     * by finding the product of its two member fields (`width` and `height`).
     *
     * Usage Example:
     * ```ts
     * import { Rectangle } from "./Shapes";
     *
     * const rec: Rectangle = new Rectangle(5, 6);
     * console.log(rec.getArea()); // Prints "30" to the console.
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {number}
     */
    public getArea(): number {
        return this.width * this.height;
    }


    /**
     * The static `area()` method is similar to the `getArea()` method of the `Rectangle`
     * class, but it is static, and intended for use without an object. This is merely
     * for instances where you do not want to make a separate `Rectangle` object, and
     * just want to find the area.
     *
     * Usage Example:
     * ```ts
     * import { Rectangle } from "./Shapes";
     *
     * let x = 5, y = 6;
     * let res = Rectangle.area(x, y);
     *
     * console.log(res); // Prints "30" to the console.
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @param {number} width The width of the rectangle.
     * @param {number} height The height of the rectangle.
     * @returns {number} The area of a rectangle from the two provided parameters.
     */
    public static area(width: number, height: number): number {
        return width * height;
    }

    /**
     * The `toString()` method (inherited from the {@link Shape | `Shape`} interface)
     * returns a string representation of the `Rectangle` object.
     *
     * Usage Example:
     * ```ts
     * import { Rectangle } from "./Shapes";
     *
     * const rec: Rectangle = new Rectangle(5, 6);
     * console.log(rec.toString()); // Rectangle[width=5,height=6,area=30]
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {string} The string representation of the `Rectangle` object.
     */
    public toString(): string {
        return `Rectangle[width=${this.width},height=${this.height},area=${this.getArea()}]`;
    }
}

/**
 * The `Square` class represents a square, a polygon with 4 equal sides.
 *
 * This class extends the {@link Rectangle | `Rectangle`} class, and overrides its
 * member methods to better fit a square.
 * @author Ethan Kletschke
 *
 * @type {Square}
 */
export class Square extends Rectangle {
    /**
     * The `constructor` method creates an instance of the `Square` class. It initialises its
     * inherited member fields (`width` and `height`) to the same value using the `Rectangle` class's
     * inherited constructor, to represent a square instead of a rectangle.
     * @author Ethan Kletschke
     *
     * @public
     * @param {number} width The length of the sides of the square.
     */
    public constructor(width: number) {
        super(width, width);
    }

    /**
     * The static `area()` method is similar to the `getArea()` method of the `Square`
     * class, but it is static, and intended for use without an object. This is merely
     * for instances where you do not want to make a separate `Square` object, and
     * just want to find the area.
     *
     * Note that this override from `Rectangle` uses one parameter instead of two.
     *
     * Usage Example:
     * ```ts
     * import { Square } from "./Shapes";
     *
     * let x = 9;
     * let res = Square.area(x);
     *
     * console.log(res); // Prints "81" to the console.
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @param {number} sidelength The length of the sides of the square.
     * @returns {number} The area of the square with the given side lengths.
     */
    public static override area(sidelength: number): number {
        return sidelength ** 2;
    }


    /**
     * The `toString()` method (overridden from the {@link Rectangle | `Rectangle`} class)
     * returns a string representation of the `Square` object.
     *
     * Usage Example:
     * ```ts
     * import { Square } from "./Shapes";
     *
     * const sqr: Square = new Square(9);
     * console.log(sqr.toString()); // Square[width=9,area=81]
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {string} A string representation of the `Square` object.
     */
    public override toString(): string {
        return `Square[width=${this.width},area=${this.getArea()}]`;
    }
}

/**
 * The `Triangle` class represents a triangle, a 3-sided shape.
 *
 * This class implements the {@link Shape | `Shape`} interface, as well as its
 * two member methods, `toString()` and `getArea()`.
 * @author Ethan Kletschke
 *
 * @type {Triangle}
 */
export class Triangle implements Shape {
    /** Represents the base of the triangle. */
    protected readonly base: number;
    /** Represents the perpendicular height of the triangle. */
    protected readonly height: number;

    /**
     * The `constructor` method creates an instance of the `Triangle` class. It takes two
     * parameters to initialise the two member fields (`base` and `height`), or sets them to 1
     * if they are "nullish" (set to `null` or `undefined`).
     * @author Ethan Kletschke
     *
     * @public
     * @param {number} base The length of the base of the triangle.
     * @param {number} height The height of the triangle perpendicular to the base.
     */
    public constructor(base: number, height: number) {
        this.base = base ?? 1;
        this.height = height ?? 1;
    }

    /**
     * The `getArea()` method of the `Triangle` class returns the area of the triangle, by
     * finding the product of half the base and the perpendicular height.
     *
     * Usage Example:
     * ```ts
     * import { Triangle } from "./Shapes";
     *
     * const tri: Triangle = new Triangle(15, 20);
     * console.log(tri.getArea()); // Prints "150" to the console.
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {number} The area of the `Triangle` object.
     */
    public getArea(): number {
        return 0.5 * this.base * this.height;
    }

    /**
     * The static `area()` method is similar to the `getArea()` method, except that it is static,
     * and is intended for use without an object. This is merely for instances where you would like to
     * find the area of a triangle without creating a separate `Triangle` object.
     *
     * Usage Example:
     * ```ts
     * import { Triangle } from "./Shapes";
     *
     * let x = 15, y = 20;
     * let res = Triangle.area(x, y);
     * console.log(res); // Prints "150" to the console.
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @param {number} base The length of the base of the triangle.
     * @param {number} height The height of the triangle perpendicular to the base.
     * @returns {number} The area of a triangle using the parameters given.
     */
    public static area(base: number, height: number): number {
        return 0.5 * base * height;
    }

    /**
     * The `toString()` method (inherited from the {@link Shape | `Shape`} interface)
     * returns a string representation of the `Triangle` object.
     *
     * Usage Example:
     * ```ts
     * import { Triangle } from "./Shapes";
     *
     * const tri: Triangle = new Triangle(15, 20);
     * console.log(tri.toString()); // Triangle[base=15,height=20]
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {string}
     */
    public toString(): string {
        return `Triangle[base=${this.base},height=${this.height}]`;
    }
}

/**
 * The `Circle` class represents a circle, a round shape with a circumference rather than
 * a fixed number of sides.
 *
 * The `Circle` class implements the {@link Shape | `Shape`} interface.
 * @author Ethan Kletschke
 *
 * @type {Circle}
 */
export class Circle implements Shape {
    /** Represents the radius of the circle. */
    protected readonly radius: number;

    /**
     * The `constructor` method creates an instance of the `Circle` class. It takes one parameter
     * which initialises the radius, or sets it to 1 if the parameter is "nullish" (has a value of
     * `null` or `undefined`).
     * @author Ethan Kletschke
     *
     * @public
     * @param {number} radius The radius of the circle.
     */
    public constructor(radius: number) {
        this.radius = radius ?? 1;
    }

    /**
     * The `getArea()` method gets the area of the circle by finding
     * the product of the mathematical constant Pi (`Math.PI`) and the
     * radius squared.
     *
     * Usage Example:
     * ```ts
     * import { Circle } from "./Shapes";
     *
     * const circ: Circle = new Circle(15);
     * console.log(circ.getArea()); // Prints "706.8583470577034" to the console.
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {number}
     */
    public getArea(): number {
        return Math.PI * this.radius ** 2;
    }

    /**
     * The `getCircumference()` method finds the circumference of the circle by
     * finding the product of double the mathematical constant Pi (`Math.PI`) and
     * the radius (2 * pi * radius).
     *
     * Usage Example:
     * ```ts
     * import { Circle } from "./Shapes";
     *
     * const circ: Circle = new Circle(15);
     * console.log(circ.getCircumference()); // Prints "94.24777960769379" to the console.
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {number} The circumference of the `Circle` object.
     */
    public getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }

    /**
     * The `getDiameter()` method returns the diameter of the circle,
     * which is simply double the radius.
     *
     * Usage Example:
     * ```ts
     * import { Circle } from "./Shapes";
     *
     * const circ: Circle = new Circle(15);
     * console.log(circ.getDiameter()); // Prints "30" to the console.
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {number} The diameter of the circle.
     */
    public getDiameter(): number {
        return this.radius * 2;
    }


    /**
     * The `toString()` method (inherited from the {@link Shape | `Shape`} interface)
     * returns a string representation of the `Circle` object.
     *
     * Usage Example:
     * ```ts
     * import { Circle } from "./Shapes";
     *
     * const circ: Circle = new Circle(15);
     * console.log(circ.toString()); // Circle[radius=15,diameter=30,circumference=94.248]
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {string} A string representation of the `Circle` object.
     */
    public toString(): string {
        return (
            `Circle[radius=${this.radius},diameter=${this.getDiameter()},` +
            `circumference=${this.getCircumference().toFixed(3)}]`
        );
    }
}

/**
 * The `SemiCircle` class represents a semi-circle, essentially a circle cut in half.
 *
 * It extends the `Circle` class, and overrides its methods to better fit a semi-circle.
 * @author Ethan Kletschke
 *
 * @type {SemiCircle}
 */
export class SemiCircle extends Circle {
    /**
     * The `constructor()` method creates an instance of the `SemiCircle` class.
     *
     * The semi-circle's constructor is identical to that of the `Circle` class's
     * constructor.
     * @author Ethan Kletschke
     *
     * @public
     * @param {number} radius
     */
    public constructor(radius: number) {
        super(radius);
    }


    /**
     * The `getArea()` method, which is overridden from the `Circle` class, returns the
     * area of the semi-circle, which is that of a normal circle's area halved.
     *
     * Usage Example:
     * ```ts
     * import { SemiCircle } from "./Shapes";
     *
     * const sc: SemiCircle = new SemiCircle(15);
     * console.log(sc.getArea()); // Prints "353.4291735288517" to the console.
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {number} The area of the `SemiCircle` object.
     */
    public override getArea(): number {
        return (Math.PI * this.radius ** 2) / 2;
    }

    /**
     * The `getCircumference()` method, which is overridden from the `Circle` class,
     * returns the circumference of the semi-circle, which is Pi * radius + 2 * radius.
     *
     * Usage Example:
     * ```ts
     * import { SemiCircle } from "./Shapes";
     *
     * const sc: SemiCircle = new SemiCircle(15);
     * console.log(sc.getCircumference()); // Prints "77.1238898038469" to the console.
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {number} The circumference of the `SemiCircle` object.
     */
    public override getCircumference(): number {
        return Math.PI * this.radius + 2 * this.radius;
    }

    /**
     * The `toString()` method, which is inherited from the {@link Circle | `Circle`}
     * class, returns a string representation of the `SemiCircle` object.
     *
     * Usage Example:
     * ```ts
     * import { SemiCircle } from "./Shapes";
     *
     * const sc: SemiCircle = new SemiCircle(15);
     * console.log(sc.toString()); // SemiCircle[radius=15,diameter=30,circumference=77.124]
     * ```
     * @author Ethan Kletschke
     *
     * @public
     * @returns {string}
     */
    public override toString(): string {
        return (
            `SemiCircle[radius=${this.radius},diameter=${this.getDiameter()}` +
            `,circumference=${this.getCircumference().toFixed(3)}]`
        );
    }
}
