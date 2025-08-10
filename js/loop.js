for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
// for문 :( 초기화 코드, 반복이 계속되는 조건, 반복문이 증가되는 코드)
// 반복문 안에 반복문을 넣어 사용하는 중첩 반복문 

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // i가 5일 때 반복문 종료
    }
    if (i % 2 === 0) {
        continue; // 짝수는 건너뛰고 다음 반복으로
    }
    console.log(i); // 1, 3 출력
}



let count = 0;

while (count < 5) {
    console.log("Count is: " + count);
    count++;
}
// while문은 조건까지만 반복하는 반복문
// 카운트가 5미만 일때까지만 반복
