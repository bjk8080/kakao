// 부모 클래스: Animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name}이(가) 소리를 냅니다.`);
    }
}

// 자식 클래스: Dog (Animal 클래스를 상속받음)
// extends 를 사용하면 부모 클래스의 속성과 메서드를 자식클래스가 상속 받는다는 뜻이다.
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // 부모 클래스의 생성자를 호출하여 name을 설정
        this.breed = breed;
    }
    // this.breed를 사용하여 품종도 함께 저장할 수 있도록 추가하였다

    // 부모 클래스의 메서드를 재정의 (오버라이딩)
    speak() {
        console.log(`${this.name} (품종: ${this.breed})이(가) 멍멍 소리를 냅니다.`);
    }
}

// Animal 클래스를 상속받은 Dog 클래스의 인스턴스 생성
const myDog1 = new Dog('바둑이', '진돗개');

// 부모 클래스에서 상속받은 메서드 호출
myDog1.speak(); // "바둑이 (품종: 진돗개)이(가) 멍멍 소리를 냅니다." 출력



// 부모 클래스: Animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name}이(가) 소리를 냅니다.`);
    }
}

// 자식 클래스: Dog (Animal 클래스를 상속받음)
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // 부모 클래스의 생성자를 호출하여 name을 설정
        this.breed = breed;
    }

    // 부모 클래스의 메서드를 재정의 (오버라이딩)
    speak() {
        console.log(`${this.name} (품종: ${this.breed})이(가) 멍멍 소리를 냅니다.`);
    }
}

// 자식 클래스: Cat (Animal 클래스를 상속받음)
class Cat extends Animal {
    // 부모 클래스의 메서드를 재정의 (오버라이딩)
    speak() {
        console.log(`${this.name}이(가) 야옹 소리를 냅니다.`);
    }
}

// 자식 클래스: Bird (Animal 클래스를 상속받음)
class Bird extends Animal {
    // 부모 클래스의 메서드를 재정의 (오버라이딩)
    speak() {
        console.log(`${this.name}이(가) 짹짹 소리를 냅니다.`);
    }
}

// Animal 클래스의 인스턴스 생성
const initAnimal = new Animal('강아지');
initAnimal.speak();

// Animal 클래스를 상속받은 Dog, Cat, Bird 클래스의 인스턴스 생성
const myDog = new Dog('바둑이', '진돗개');
const myCat = new Cat('나비');
const myBird = new Bird('참새');

// 각각의 speak 메서드 호출
myDog.speak(); // "바둑이 (품종: 진돗개)이(가) 멍멍 소리를 냅니다." 출력
myCat.speak(); // "나비이(가) 야옹 소리를 냅니다." 출력
myBird.speak(); // "참새이(가) 짹짹 소리를 냅니다." 출력