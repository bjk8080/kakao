let hong = "홍길동"
console.log(`안녕하세요, ${hong}입니다.`) // 안녕하세요, 홍길동입니다.

let message1 = '그는 "이건 \'예제\'입니다"라고 말했다.';
console.log(message); // 그는 "이건 '예제'입니다"라고 말했다.
let message2 = "그녀가 '이건 \"예제\"입니다'라고 말했다.";
console.log(message); // 그녀가 '이건 "예제"입니다'라고 말했다.
// 따옴표를 포함하려면 \를 사용해야함

let message3 = "안녕하세요,\n자바스크립트 세계에 오신 것을 환영합니다!";
console.log(message);
// 출력:
// 안녕하세요,
// 자바스크립트 세계에 오신 것을 환영합니다!
// 줄바꿈을 표현 하려면 \n을 사용해야한다

let message4 = "이름\t나이\t직업\n홍길동\t30\t프로그래머";
console.log(message);
// 출력:
// 이름    나이    직업
// 홍길동  30    프로그래머
// 탭(공백)을 표시하려면 \t를 사용해야 한다.

let path = "C:\\사용자\\문서\\파일.txt";
console.log(path); // C:\사용자\문서\파일.txt
// \을 표시하려면 \\를 사용해야 한다.

let isStudent = true; // true는 불리언입니다.
let isGraduated = false; // false도 불리언입니다.

const boolTrue = 1 < 2; //1 < 2 는 참이므로 boolTrue 의 값은 true 입니다.
const boolFalse = 1 > 2; //1 > 2 는 거짓이므로 boolFalse 의 값은 false 입니다.

// ! 기호를 변수 앞에 붙여 참 거짓 값을 반전시킬 수 있습니다.
!isStudent // false
!isGraduated // true