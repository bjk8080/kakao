function world() {
		console.log("Hello, World!!!")
}
world() // "Hello, World!!!" 출력

function greet(name) {
    return "Hello, " + name + "!";
}

greet("Jhon"); // "Hello, Jhon!" 출력
// function으로 함수를 불러오며 name을 매개변수로 저장했다. return은 반환할 값을 작성하라는 코드

const greet = (name) => {
    return "Hello, " + name + "!";
};

let message = greet("Bob");
console.log(message); // "Hello, Bob!" 출력
// greet 함수는 화살표 함수로 정의되었습니다. name 매개변수를 받아 인사 메시지를 반환합니다.
