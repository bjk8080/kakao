const person = {};

// 데이터 프로퍼티 'name'을 정의
// object는 일반적인 내장 객체이다, 객체와 관련된 여러 가지 기능을 제공한다.
Object.defineProperty(person, 'name', {
    value: 'Alice',
    writable: false, // 값이 수정 불가능하게 설정
    enumerable: true, // 열거 가능하게 설정
    configurable: false // 프로퍼티 삭제 또는 속성 변경 불가능하게 설정
});

console.log(person.name); // "Alice" 출력

person.name = 'Bob'; // writable: false 이므로 값이 수정되지 않음
console.log(person.name); // 여전히 "Alice" 출력

for (let key in person) {
    console.log(key); // 'name'이 출력됨 (enumerable: true)
}

// 'name' 프로퍼티 삭제 시도 (configurable: false 이므로 삭제되지 않음)
delete person.name;
console.log(person.name); // 여전히 "Alice" 출력


const product = {
    _price: 100, // 실제 가격을 저장하는 내부 변수 _를 사용시 내부안에서만 사용
    // 접근자 프로퍼티 'price' 정의
    get price() {
        return `$${this._price}`; // 가격을 문자열로 반환
    },
    set price(value) {
        if (value > 0) {
            this._price = value; // 값이 0보다 큰 경우에만 가격 설정
        } else {
            console.log('가격은 0보다 커야 합니다.');
        }
    }
};

console.log(product.price); // "$100" 출력

product.price = 150;
console.log(product.price); // "$150" 출력

product.price = -50; // 유효하지 않은 값이므로 setter에서 경고 메시지 출력
console.log(product.price); // "$150" 출력 (값이 변경되지 않음)
