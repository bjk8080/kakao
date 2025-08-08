let isAdult = true;
let hasDrivingLicense = false;

let canDrive = isAdult && hasDrivingLicense;
console.log(canDrive); // false (둘 다 true여야 true가 됩니다)
// &&는 and연산자로써 둘다 참이여야 참이 된다

let isWeekend = true;
let isHoliday = false;

let canRelax = isWeekend || isHoliday;
console.log(canRelax); // true (둘 중 하나만 true면 true가 됩니다)
// ||는 or 연산자로써 둘중 하나만 참이여도 참이 된다

let isRaining = false;

let stayHome = !isRaining; // 비가 오지 않으면 나갈 수 있습니다.
console.log(stayHome); // true (비가 오지 않으므로 !false는 true입니다)
// !는 not의 연산자로써 고유의 값을 반대로 도출해낸다

let a = true;
let b = false;
let c = true;

let result = a || b && c;
console.log(result); // true
// and 연산자와 or 연산자를 같이 사용했을 때 and 연산자가 우선순위를 가진다.