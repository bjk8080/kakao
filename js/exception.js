function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed"); // 강제로 예외를 발생시킴
    }
    let result = a / b;
    console.log(`Result: ${result}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

divide(10, 2); // 정상적인 출력: Result: 5
divide(10, 0); // 오류 발생: Error: Division by zero is not allowed

function readFile(file) {
  try {
    // 파일을 읽는 작업 (실제로는 이 부분에 파일 읽기 코드가 있을 수 있음)
    console.log(`Reading file: ${file}`);
    if (!file) {
      throw new Error("File not found");
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log("Cleaning up resources...");
  }
}

readFile("data.txt"); // 정상적인 파일 읽기 시나리오
readFile("");         // 오류 발생 시나리오

