let operacao;
let num1;
let num2;

while (operacao !== "sair") {
  operacao = prompt("Qual operação deseja realizar? (+, -, *, / ou sair)");

  if (operacao !== "sair") {
    num1 = Number(prompt("Digite o primeiro valor:"));
    num2 = Number(prompt("Digite o segundo número:"));

    switch (operacao) {
      case "+":
        console.log(`${num1} + ${num2} = ${soma(num1, num2)}`);
        break;
      case "-":
        console.log(`${num1} - ${num2} = ${subtracao(num1, num2)}`);
        break;
      case "*":
        console.log(`${num1} * ${num2} = ${multiplicacao(num1, num2)}`);
        break;
      case "/":
        console.log(`${num1} / ${num2} = ${divisao(num1, num2)}`);
        break;
      default:
        console.log("Operação inválida");
        break;
    }
  }
}

console.log("Até uma próxima!");

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}
