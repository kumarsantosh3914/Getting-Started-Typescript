/**
 * Types in typescript
 * Below are all primitive types in TS
 * - string -> store text
 * - number -> intergers, real
 * - boolean 
 * - undefined
 * - null
 * - bigint
 * - symbol
 * 
 * var <variable_name> : number = <value>; // type annotation or type signature
 */

let id: number = 5;
let firstName = "Santosh"; // TS understands firstName will store strings
// firstName = 12;  TSC throw error
var lastName: string = "Kumar";
// lastName = 13; TSC throws error
console.log(id, firstName);

// Union of types
let userId: number | string = "26";
userId = 10;

let x : any = 10;
x = "Santosh";
x = false;
console.log(x);

/**
 * arrays
 * let <variable_name> : type[] = [val1, val2, ....];
 */
let ids: number[] = [1, 2, 3, 4, 5];
let hetero: any[] = [1, 2, false, "123", null];

let data: (number | string | boolean)[] = [1, "Santosh", true];
console.log(ids, hetero, data);

// arrays in form of typed tuple
let data1: [number, string, boolean] = [1, "Santosh", true];

/**
 * How to define types for objects
 * - classes -> data members, members functions
 * - interface -> its a contract
 */

class Car {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
};

interface Product {
    name: string;
    price: number;
    brand: string;
    display(): void;
}

let p1: Product = {
    name: "Iphone",
    price: 100000,
    brand: "Apple",
    display: () => {
        console.log("display");
    }
}
console.log(p1);

function sum(a: number, b? :number): number {
    return a + (b || 0);
}
console.log(sum(10));