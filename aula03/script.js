var sorteio = parseInt(Math.random() * 10);
console.log(sorteio);//5*/

var sorteio = 2

var tentativas = 3;

while (tentativas > 0) {
  var escolhaUser = parseInt(prompt("Escolha um número entre 1 e 10"));

  if (escolhaUser < sorteio) {
    alert("O número é maior");
    tentativas -= 1;
  } else if (escolhaUser > sorteio) {
    alert("O número é menor");
    tentativas -= 1;
  } else{
    document.write("<h2>Parabéns, você acertou!!<h2/>");
    break;
  }
}
if(tentativas <= sorteio)
document.write(`<h2> Você errou, o número sorteado era: ${sorteio}<h2/>`);