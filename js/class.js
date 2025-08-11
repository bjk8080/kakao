// 클래스 정의
class Animal {
    // 생성자 메서드
    // constructor은 클래스에서 객체를 만들 때 자동으로 실행되는 특별한 메서드이다.(처음으로 실행되는 함수)
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
    // type과 sound로 각각 종류 및 울음소리를 저장
    // 메서드 정의
    makeSound() {
        return `${this.type} says ${this.sound}!`;
    }
    // $와 중괄호 안에 변수 및 식을 넣으면 값을 문자열에 그대로 들어간다.
}
// makesound로 메서드로 지정해 저장된 정보로 울음소리를 출력
// 클래스의 인스턴스 생성
const dog = new Animal('Dog', 'Woof');
const cat = new Animal('Cat', 'Meow');
// new 키워드를 사용해 animal클래스의 인스턴스를 생성한다.
// new를 사용하지않으면 새 객체를 생성 할 수 없다. 생성버튼이라고 생각하자

console.log(dog.makeSound()); // "Dog says Woof!"
console.log(cat.makeSound()); // "Cat says Meow!"
