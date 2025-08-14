const person = {
    name: "Alice",
    age: 25,
    job: "Developer"
};

// 자바스크립트 객체를 JSON 문자열로 변환
const jsonString = JSON.stringify(person);

console.log(jsonString);
// 출력: {"name":"Alice","age":25,"job":"Developer"}


const jsonString = '{"name":"Alice","age":25,"job":"Developer"}';

// JSON 문자열을 자바스크립트 객체로 변환
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);
// 출력: {name: "Alice", age: 25, job: "Developer"}
console.log(jsonObject.name); // "Alice" 출력

