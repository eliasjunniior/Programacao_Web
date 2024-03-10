const readline = require('readline-sync');

function lerNumero() {
  const numero = readline.question('Digite um número: ');
  return parseFloat(numero);
}

const num1 = lerNumero();
const num2 = lerNumero();
const num3 = lerNumero();

const soma = num1 + num2 + num3;
const media = soma / 3;

console.log(`A média dos números ${num1}, ${num2} e ${num3} é ${media}`);
