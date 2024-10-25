const readline = require('readline');

// Configura o readline para receber entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solicitarEntrada(pergunta) {
  return new Promise(resolve => {
    rl.question(pergunta, input => {
      resolve(input);
    });
  });
}

async function numberVictories() {
  let victories;

  while (true) { 
    victories = await solicitarEntrada("Digite a quantidade de vitórias do Herói: ");
    victories = Number(victories);

    if (Number.isInteger(victories) && victories > 0) {
      return victories;
    } else {
      console.log("Por favor, digite um número inteiro positivo.");
    }
  }
}

async function numberDefeats() {
  let defeats;

  while (true) {
    defeats = await solicitarEntrada("Digite a quantidade de derrotas do Herói: ");
    defeats = Number(defeats);

    if (Number.isInteger(defeats) && defeats > 0) {
      return defeats;
    } else {
      console.log("Por favor, digite um número inteiro positivo.");
    }
  }
}

function rank(victories, defeats) {
  let balance = victories - defeats;
  return balance;
}

function nivelHeroi(victories) {
  let nivel = "";
  switch (true) { 
    case victories <= 10:
      nivel = "Ferro";
      break;
    case victories >= 11 && victories <= 20:
      nivel = "Bronze";
      break;
    case victories >= 21 && victories <= 50:
      nivel = "Prata";
      break;
    case victories >= 51 && victories <= 80:
      nivel = "Ouro";
      break;
    case victories >= 81 && victories <= 90:
      nivel = "Diamante";
      break;
    case victories >= 91 && victories <= 100:
      nivel = "Lendário";
      break;
    case victories >= 101:
      nivel = "Imortal";
      break;
  }
  return nivel;
}

// Função principal para obter entradas e exibir resultados
async function main() {
  const victories = await numberVictories();
  const defeats = await numberDefeats();

  console.log("O Herói tem um saldo de " + rank(victories, defeats) + " e está no nível " + nivelHeroi(victories));
  rl.close();
}

main();
