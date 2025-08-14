// 기본 배열 디스트럭쳐링
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // 1 출력
console.log(second); // 2 출력
console.log(third); // 3 출력

// 일부 요소만 디스트럭쳐링할 수 있습니다.
const [one, , three] = numbers; // 두 번째 요소는 무시
console.log(one); // 1 출력
console.log(three); // 3 출력

// 기본값 설정
const [a, b, c = 10, d = 20] = [1, 2];
console.log(a); // 1 출력
console.log(b); // 2 출력
console.log(c); // 10 출력 (기본값 사용)
console.log(d); // 20 출력 (기본값 사용)


// 기본 객체 디스트럭쳐링
const person = {
    name: "Alice",
    age: 25,
    job: "Developer"
};

const { name, age, job } = person;
console.log(name); // "Alice" 출력
console.log(age); // 25 출력
console.log(job); // "Developer" 출력

// 다른 이름으로 변수 할당
const { name: personName, age: personAge } = person;
console.log(personName); // "Alice" 출력
console.log(personAge); // 25 출력

// 기본값 설정
const { name: n, age: a1, hobby = "Reading" } = person;
console.log(n); // "Alice" 출력
console.log(a1); // 25 출력
console.log(hobby); // "Reading" 출력 (기본값 사용)


// 함수의 매개변수에서 객체 디스트럭쳐링 사용
function printPerson({ name, age }) {
    console.log(`이름: ${name}, 나이: ${age}`);
}

const user = { name: "Bob", age: 30 };
printPerson(user); // "이름: Bob, 나이: 30" 출력

