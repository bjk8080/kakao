let a = 5;

let b = ++a; // 전위 증가: a를 1 증가시키고 나서, b에 할당합니다.
console.log(a); // 6
console.log(b); // 6

let c = a++; // 후위 증가: c에 현재 a의 값을 할당한 후, a를 1 증가시킵니다.
console.log(a); // 7
console.log(c); // 6

let x = 10;

let y = --x; // 전위 감소: x를 1 감소시키고 나서, y에 할당합니다.
console.log(x); // 9
console.log(y); // 9

let z = x--; // 후위 감소: z에 현재 x의 값을 할당한 후, x를 1 감소시킵니다.
console.log(x); // 8
console.log(z); // 9

