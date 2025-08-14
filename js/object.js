let num = 12345.6789;

console.log(num.toExponential());    // 1.23456789e+4
console.log(num.toExponential(2));   // 1.23e+4
console.log(num.toExponential(4));   // 1.2346e+4
// toExponential은 숫자를 지수로 표기하는 방법이다
console.log(num.toFixed(0));   // 12346
console.log(num.toFixed(2));   // 12345.68
console.log(num.toFixed(5));   // 12345.67890
// toFixed는 숫자에 소수점 표기법을 나타낸다
console.log(num.toPrecision(2));   // "1.2e+4
console.log(num.toPrecision(4));   // 1.235e+4
console.log(num.toPrecision(7));   // 12345.68
// toprecision은 숫자로 지정한 자릿수로 변환한 문자열을 반환한다.


let string = 'Hello World';

string = string.toLowerCase(); // 대문자를 소문자로 변경
// toUpperCase를 사용할 대문자로 변환하여준다.
string = string.replace(' ', '|'); // 첫 번째 인자를 두 번째 인자로 변경
let array = string.split('|'); // '|' 기반으로 문자열을 분해

console.log(string);
console.log(array);


// 0 이상 1 미만의 랜덤한 소수 생성
let randomNumber = Math.random();
console.log("랜덤한 소수:", randomNumber);
// Math.random을 사용하면 0이상 1미만의 소수를 반환,
// Math.random()*100을 할 시에 0이상 100미만의 소수를 생성
// 1부터 100까지의 랜덤한 정수 생성
let randomInt = Math.floor(Math.random() * 100) + 1;
// Math.floor은 내림 math.ceil은 올림 math.round는 반올림을 처리한다
console.log("1부터 100까지의 랜덤한 정수:", randomInt);


let fruits = ["Apple", "Banana"];

// 1. push() 메서드: 배열의 끝에 새로운 요소 추가
fruits.push("Cherry");
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// 여러 요소를 한 번에 추가
fruits.push("Date", "Elderberry");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

// 2. pop() 메서드: 배열의 마지막 요소를 제거하고 반환
let lastFruit = fruits.pop();
console.log(lastFruit); // "Elderberry"
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]

// 3. splice() 메서드
// 특정 위치에 요소 추가 (index 1에 두 개의 요소 추가)
fruits.splice(1, 0, "Fig", "Grape");
console.log(fruits); // ["Apple", "Fig", "Grape", "Banana", "Cherry", "Date"]

// 특정 위치에서 요소 제거 (index 2부터 2개의 요소 제거)
let removedFruits = fruits.splice(2, 2);
console.log(removedFruits); // ["Grape", "Banana"]
console.log(fruits); // ["Apple", "Fig", "Cherry", "Date"]

// 특정 위치에서 요소 교체 (index 1부터 1개의 요소를 "Honeydew"로 교체)
fruits.splice(1, 1, "Honeydew");
console.log(fruits); // ["Apple", "Honeydew", "Cherry", "Date"]


//includes 를 사용할 시 배열에 특정 요소가 포함 되어 있는지를 확인함 있으면 true 없을시 false
let fruits1 = ["Apple", "Banana", "Cherry", "Date"];

// 1. 배열에 특정 요소가 포함되어 있는지 확인
let hasBanana = fruits1.includes("Banana");
console.log(hasBanana); // true

// 2. 배열에 특정 요소가 포함되어 있지 않은 경우
let hasGrape = fruits1.includes("Grape");
console.log(hasGrape); // false

// 3. fromIndex를 사용하여 특정 위치부터 검색
let hasCherryAfterIndex2 = fruits1.includes("Cherry", 2);
console.log(hasCherryAfterIndex2); // true

let hasAppleAfterIndex2 = fruits1.includes("Apple", 2);
console.log(hasAppleAfterIndex2); // false


let fruits2 = ["Banana", "Apple", "Cherry", "Date"];

// 1. sort(): 배열을 사전순으로 정렬
fruits.sort();
console.log("Sorted:", fruits); // ["Apple", "Banana", "Cherry", "Date"]

// 2. reverse(): 배열의 요소 순서를 역순으로 바꿈
fruits.reverse();
console.log("Reversed:", fruits); // ["Date", "Cherry", "Banana", "Apple"]

// 3. join(): 배열의 모든 요소를 연결해 하나의 문자열로 만듦
let fruitString = fruits.join(", ");
console.log("Joined:", fruitString); // "Date, Cherry, Banana, Apple"

// 4. concat(): 배열과 다른 배열 또는 값을 결합하여 새로운 배열을 만듦
let moreFruits = ["Elderberry", "Fig"];
let allFruits = fruits.concat(moreFruits);
console.log("Concatenated:", allFruits); // ["Date", "Cherry", "Banana", "Apple", "Elderberry", "Fig"]

// 5. slice(): 배열의 일부를 선택하여 새로운 배열을 반환
let slicedFruits = allFruits.slice(1, 4);
console.log("Sliced:", slicedFruits); // ["Cherry", "Banana", "Apple"]


let numbers = [1, 2, 3, 4, 5];

// 1. forEach(): 각 요소에 대해 함수 실행 (각 요소를 두 배로 출력)
console.log("Using forEach:");
numbers.forEach(function(num) {
    console.log(num * 2); // 2, 4, 6, 8, 10 출력
});

// 2. map(): 각 요소에 대해 함수 실행한 결과로 새로운 배열 생성 (각 요소를 두 배로 만든 새로운 배열)
let doubledNumbers = numbers.map(function(num) {
    return num * 2;
});
console.log("Using map:", doubledNumbers); // [2, 4, 6, 8, 10]

// 3. filter(): 각 요소에 대해 함수 실행하여 true를 반환하는 요소로 새로운 배열 생성 (짝수만 필터링)
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Using filter:", evenNumbers); // [2, 4]


const person = {
  name: "Alice",
  age: 25,
  occupation: "Engineer"
};

// 1. Object.keys(): 객체의 모든 키를 배열로 반환
const keys = Object.keys(person);
console.log("Keys:", keys); 
// 출력: Keys: ["name", "age", "occupation"]

// 2. Object.values(): 객체의 모든 값을 배열로 반환
const values = Object.values(person);
console.log("Values:", values); 
// 출력: Values: ["Alice", 25, "Engineer"]

// 3. Object.entries(): 객체의 키-값 쌍을 배열의 배열로 반환
const entries = Object.entries(person);
console.log("Entries:", entries); 
// 출력: Entries: [["name", "Alice"], ["age", 25], ["occupation", "Engineer"]]


const person = {
  name: "Alice",
  age: 25
};

Object.preventExtensions(person);
// Object.preventExtensions을 사용하면 객체가 더 이상 확장되지 않아 새로운 속성 추가가 되지 않는다.
person.occupation = "Engineer"; // 새로운 속성 추가 시도
console.log(person.occupation); // undefined

console.log(Object.isExtensible(person)); // false


const person = {
  name: "Alice",
  age: 25
};

Object.seal(person);
// Object.seal을 할 경우 객체가 봉인된다. 봉인 될 시 속성이 변경은 가능하나 추가 및 제거가 불가능해진다
console.log(Object.isSealed(person)); // true
// Object.inSealed는 객체가 봉인 되어 있는지 확인 하는 코드이다.
person.age = 26; // 기존 속성 변경 가능
console.log(person.age); // 26

delete person.name; // 속성 삭제 시도
console.log(person.name); // "Alice"


const person = {
  name: "Alice",
  age: 25
};

Object.freeze(person);
// Object.freeze는 객체를 동결하여 더 이상 수정이 불가능해진다.
person.age = 26; // 기존 속성 변경 시도
console.log(person.age); // 25

delete person.name; // 속성 삭제 시도
console.log(person.name); // "Alice"

person.occupation = "Engineer"; // 새로운 속성 추가 시도
console.log(person.occupation); // undefined

console.log(Object.isFrozen(person)); // true