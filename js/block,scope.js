let globalVar = "이것은 전역 변수입니다.";

function myFunction() {
    let localVar = "이것은 지역 변수입니다.";
    console.log(globalVar); // 전역 변수에 접근 가능
    console.log(localVar);  // 지역 변수에 접근 가능
}

myFunction();

console.log(globalVar); // 전역 변수에 접근 가능
console.log(localVar);  // 오류 발생: 지역 변수에 접근 불가

if (true) {
    let blockScopedVar = "이것은 블록 스코프 변수입니다.";
    console.log(blockScopedVar); // 블록 내에서 접근 가능
}

console.log(blockScopedVar); // 오류 발생: 블록 밖에서 접근 불가

function varTest() {
    var functionScopedVar = "이것은 함수 스코프 변수입니다.";

    if (true) {
        var functionScopedVar = "이것은 함수 스코프에서 재할당된 변수입니다.";
        console.log(functionScopedVar); // "이것은 함수 스코프에서 재할당된 변수입니다." 출력
    }

    console.log(functionScopedVar); // "이것은 함수 스코프에서 재할당된 변수입니다." 출력
}

varTest();
