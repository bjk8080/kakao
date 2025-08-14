// 배열의 복사
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // arr1의 요소를 복사하여 arr2에 할당
console.log(arr2); // [1, 2, 3] 출력

// 배열의 결합
const arr3 = [4, 5, 6];
const combinedArray = [...arr1, ...arr3]; // arr1과 arr3을 결합
console.log(combinedArray); // [1, 2, 3, 4, 5, 6] 출력

// 함수 호출에서의 사용
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6 출력 (numbers 배열의 요소가 각각 a, b, c로 전달됨)


// 객체의 복사
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1 }; // obj1의 속성을 복사하여 obj2에 할당
console.log(obj2); // { name: "Alice", age: 25 } 출력

// 객체의 병합
const obj3 = { job: "Developer" };
const combinedObj = { ...obj1, ...obj3 }; // obj1과 obj3을 병합
console.log(combinedObj); // { name: "Alice", age: 25, job: "Developer" } 출력
// combinedobj를 사용할 시 합쳐서 새로운 객체를 생성

// 객체의 속성 덮어쓰기
const obj4 = { name: "Bob", age: 30 };
const updatedObj = { ...obj1, ...obj4 }; // obj1의 속성들이 obj4의 속성들로 덮어써짐
console.log(updatedObj); // { name: "Bob", age: 30 } 출력
// updatedobj을 사용할 시 기존 것을 지우고 새로운 데이터로 생성