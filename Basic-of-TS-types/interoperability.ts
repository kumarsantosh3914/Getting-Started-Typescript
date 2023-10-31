let schoolName: "DPS" | "DAV" = "DPS";
let another: string = "KV";

another = schoolName;
console.log(another);

type Complex = {
    real: number,
    imag: number,
    add: (C: Complex) => Complex;
}

interface IComplex {
    real: number,
    imag: number,
    add: (C: IComplex) => IComplex;
}

let c1: Complex = {
    real: 10,
    imag: 10,
    add: (C: Complex) => {
        return C;
    }
}

let c2: IComplex = {
    real: 9,
    imag: 9,
    add: (C: IComplex) => {
        return C;
    }
}
console.log(c1);

c1 = c2; // TS will consider Complex and IComplex same because the member are some. Although
// names are diff, still doesn't matter

console.log(c1);