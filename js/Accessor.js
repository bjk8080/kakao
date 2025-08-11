const inventory = {
    quantity: 10,  // 실제 개수
    // quantity로 실제 값을 저장한다

    // Getter: 개수를 그대로 반환
    get totalQuantity() {
        return this.quantity;
    },
    // get은 속성의 값을 읽고 반환해주는 함수

    // Setter: 개수를 설정 (음수가 되지 않도록 처리)
    set totalQuantity(value) {
        if (value < 0) {
            console.log("개수는 음수가 될 수 없습니다.");
        } else {
            this.quantity = value;
        }
    }
    // set은 속성에 값을 쓸 때 사용하며 인자를 받아 설정할 때 추가적인 작업을 하는 함수
};

// Getter 사용
console.log(inventory.totalQuantity); // 10 출력

// Setter 사용
inventory.totalQuantity = 15;
console.log(inventory.totalQuantity); // 15 출력

// 잘못된 개수 설정 시도
inventory.totalQuantity = -5; // "개수는 음수가 될 수 없습니다." 출력
console.log(inventory.totalQuantity); // 15 출력 (변경되지 않음)

// 클래스에서도 get과 set을 사용하여 접근자 프로퍼티를 정의 할 수 있다.
// 클래스의 경우 캡슐화, 데이터 보호에 유용하다
class Inventory {
    constructor(quantity) {
        this.quantity = quantity;  // 실제 개수
    }

    // Getter: 개수를 그대로 반환
    get totalQuantity() {
        return this.quantity;
    }

    // Setter: 개수를 설정 (음수가 되지 않도록 처리)
    set totalQuantity(value) {
        if (value < 0) {
            console.log("개수는 음수가 될 수 없습니다.");
        } else {
            this.quantity = value;
        }
    }
}

const inventory = new Inventory(10);

// Getter 사용
console.log(inventory.totalQuantity); // 10 출력

// Setter 사용
inventory.totalQuantity = 15;
console.log(inventory.totalQuantity); // 15 출력

// 잘못된 개수 설정 시도
inventory.totalQuantity = -5; // "개수는 음수가 될 수 없습니다." 출력
console.log(inventory.totalQuantity); // 15 출력 (변경되지 않음)


class Student {
    // private 필드 정의
    #studentName = '';
    #studentID = 0;
    // #을 사용하면 private 필드를 정의한다. 내부 메서드에서만 접근 가능

    constructor(studentName, studentID) {
        this.#studentName = studentName;
        this.#studentID = studentID;
    }

    // Getter: studentName을 읽을 때 호출
    get name() {
        return this.#studentName;
    }

    // Setter: studentName을 설정할 때 호출
    set name(newName) {
        this.#studentName = newName;
    }

    // Getter: studentID를 읽을 때 호출
    get id() {
        return this.#studentID;
    }

    // Setter: studentID를 설정할 때 호출
    set id(newID) {
        this.#studentID = newID;
    }

    // private 필드에 접근하여 출력하는 메서드
    displayInfo() {
        console.log(`학생 이름: ${this.name}, 학번: ${this.id}`);
    }
}

// Student 클래스의 인스턴스 생성
const student1 = new Student('이영희', 2023001);

// Getter를 통해 private 필드에 접근
console.log(student1.name); // "이영희" 출력

// Setter를 통해 private 필드의 값을 변경
student1.name = '김철수';
console.log(student1.name); // "김철수" 출력

// Getter와 Setter를 통해 학번 변경 및 접근
console.log(student1.id); // 2023001 출력
student1.id = 2023002;
console.log(student1.id); // 2023002 출력

// 클래스 내부의 메서드를 통해 private 필드를 출력
student1.displayInfo(); // "학생 이름: 김철수, 학번: 2023002" 출력