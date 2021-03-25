var primeiroValor = parseFloat(prompt("Digite o primeiro valor: "))
var segundoValor = parseFloat(prompt("Digite o segundo valor: "))

var operacao = prompt("Digite 1 para divisão, 2 para multiplicação, 3 para soma e 4 para subrtração: ")

if (operacao == 1) {
  var resultado = (primeiroValor / segundoValor).toFixed(1)
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 2) {
  var resultado = (primeiroValor * segundoValor).toFixed(1)
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3) {
  var resultado = (primeiroValor + segundoValor).toFixed(1)
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 4) { 
  var resultado = (primeiroValor - segundoValor).toFixed(1)
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção inválida</h2>")
}