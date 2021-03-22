var valorEmDolarTxt = prompt("Qual o valor em dolar que você quer converter ?")
var valorEmDolarNumero = parseFloat(valorEmDolarTxt)

var valorCotacaoTxt = prompt("Qual o valor da cotação do dolar ?")
var valorCotacaoNumero = parseFloat(valorCotacaoTxt)

var valorEmReal = (valorEmDolarNumero * valorCotacaoNumero).toFixed(2)

alert("O valor total convertido é " +"R$"+valorEmReal)