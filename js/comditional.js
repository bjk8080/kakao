let score = 85;
// let으로 변수 값을 저장

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
// if 조건이 맞을 때 해당되는 값을 불러온다. 아닐시 하위 else if 값들을 도출한다.

if (condition1) {
    // condition1이 true일 때 실행되는 코드

    if (condition2) {
        // condition1과 condition2가 모두 true일 때 실행되는 코드
    } else {
        // condition1이 true이고 condition2가 false일 때 실행되는 코드
    }

} else {
    // condition1이 false일 때 실행되는 코드

    if (condition3) {
        // condition1이 false이고 condition3이 true일 때 실행되는 코드
    } else {
        // condition1과 condition3이 모두 false일 때 실행되는 코드
    }
}

// 삼향 연산자 -> ?이후 참일 때의 값 : 이후 거짓일 때의 값을 표현
let age = 20;
let canVote = (age >= 18) ? "You can vote." : "You cannot vote.";

console.log(canVote); // "You can vote."


// if-else 문
let age = 20;
let canVoteIfElse;

if (age >= 18) {
  canVoteIfElse = "You can vote.";
} else {
  canVoteIfElse = "You cannot vote.";
}
// if 값에 해당하지 않으면 모든 값을 else로 도출

// 삼항 연산자로 동일한 로직을 구현
let canVote = (age >= 18) ? "You can vote." : "You cannot vote.";

let score = 85;

switch (true) {
    case (score >= 90):
        console.log("Grade: A");
        break;
    case (score >= 80):
        console.log("Grade: B");
        break;
    case (score >= 70):
        console.log("Grade: C");
        break;
    default:
        console.log("Grade: F");
}
// switch 문은 해당되는 케이스 값을 도출해낸다. 해당되는 케이스가 없을 시 default값을 도출한다.